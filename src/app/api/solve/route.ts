// File: src/api/solve/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { db } from "@/lib/firebase";
import { ref, push, set } from "firebase/database";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function isImageFile(f: File | null): f is File & { type: string } {
  return (
    !!f &&
    typeof (f as any).type === "string" &&
    (f as any).type.startsWith("image/")
  );
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const title = formData.get("title") as string;
    const deadline = formData.get("deadline") as string;

    if (!file || !title || !deadline) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!isImageFile(file)) {
      return NextResponse.json(
        { error: "Only image uploads are supported" },
        { status: 400 }
      );
    }

    // Convert image to Base64 to send to OpenAI
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64Image = buffer.toString("base64");
    const imageUrl = `data:${file.type};base64,${base64Image}`;

    // Call OpenAI multimodal model (vision)
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 1200,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "You are an expert tutor. Please solve the problem in this image step-by-step.",
            },
            { type: "image_url", image_url: { url: imageUrl } },
          ],
        },
      ],
    });

    const solution = response.choices[0]?.message?.content ?? "";

    // Save the result to Firebase Realtime Database
    const assignmentsRef = ref(db, "assignments");
    const newAssignmentRef = push(assignmentsRef);

    const newAssignmentData = {
      id: newAssignmentRef.key,
      title: title,
      deadline: new Date(deadline).toISOString(),
      solution: solution,
      createdAt: new Date().toISOString(),
    };

    await set(newAssignmentRef, newAssignmentData);

    return NextResponse.json(newAssignmentData);
  } catch (err) {
    const error = err as {
      response?: { data?: any; status?: number };
      message?: string;
    };
    console.error(
      "/api/solve error",
      error?.response?.data || error?.message || error
    );
    const message =
      error?.response?.data?.error?.message ||
      error?.message ||
      "Something went wrong";
    const status = error?.response?.status || 500;
    return NextResponse.json({ error: message }, { status });
  }
}

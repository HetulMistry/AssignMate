// File: src/api/solve/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { db } from "@/lib/firebase";
import { ref, push, set } from "firebase/database";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const title = formData.get("title") as string;
    const deadline = formData.get("deadline") as string;

    if (!file || !title || !deadline) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Convert image to Base64 to send to OpenAI
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64Image = buffer.toString("base64");
    const imageUrl = `data:${file.type};base64,${base64Image}`;

    // Call OpenAI Vision API
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "You are an expert tutor. Please solve the problem in this image step-by-step.",
            },
            {
              type: "image_url",
              image_url: { url: imageUrl },
            },
          ],
        },
      ],
    });

    const solution = response.choices[0].message.content;

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
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

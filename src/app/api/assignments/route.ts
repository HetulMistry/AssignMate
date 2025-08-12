// File: src/api/assignments/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { ref, get } from "firebase/database";

interface Assignment {
  deadline: string;
  title?: string;
  description?: string;
  // Add other expected properties here
  [key: string]: string | number | undefined;
}

export async function GET() {
  try {
    const assignmentsRef = ref(db, "assignments");
    // Fetch without requiring an index; we'll sort in memory below
    const snapshot = await get(assignmentsRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const assignmentsArray = (Object.values(data) as Assignment[]).sort(
        (a, b) =>
          new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
      );
      return NextResponse.json(assignmentsArray);
    } else {
      return NextResponse.json([]);
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch assignments" },
      { status: 500 }
    );
  }
}

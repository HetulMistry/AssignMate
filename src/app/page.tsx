// File: src/app/page.tsx
"use client";

import { useState, FormEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Assignment {
  id: string;
  title: string;
  deadline: string;
  solution?: string | null;
  createdAt: string;
}

export default function Home() {
  const [solution, setSolution] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const getTimeRemaining = (deadline: string) => {
    const now = new Date();
    const deadlineDate = new Date(deadline);
    const diff = deadlineDate.getTime() - now.getTime();

    if (diff <= 0) return "Deadline passed!";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    return `${days}d ${hours}h remaining`;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setSolution("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/solve", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const result = await response.json();
      setSolution(result.solution || "No solution found.");
      fetchAssignments();
    } catch (error) {
      console.error("Error solving assignment:", error);
      setSolution("Failed to get a solution.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAssignments = async () => {
    try {
      const response = await fetch("/api/assignments");
      const data = await response.json();
      setAssignments(data);
    } catch (error) {
      console.error("Failed to fetch assignments:", error);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <main className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold">AssignMate</h1>
        <p className="text-muted-foreground mt-2">
          Your AI-powered assignment helper
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        <Card>
          <CardHeader>
            <CardTitle>Solve New Assignment</CardTitle>
            <CardDescription>
              Fill in the details and upload a photo of your problem.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g., Physics Kinematics"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline">Deadline</Label>
                <Input
                  id="deadline"
                  name="deadline"
                  type="datetime-local"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="file">Assignment Photo</Label>
                <Input id="file" name="file" type="file" required />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? "Solving..." : "Solve with AI"}
              </Button>
            </form>
            {solution && (
              <div className="mt-6">
                <Label htmlFor="solution">AI Generated Solution</Label>
                <Textarea
                  id="solution"
                  value={solution}
                  readOnly
                  rows={10}
                  className="mt-2 bg-muted"
                />
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Assignment Log</CardTitle>
            <CardDescription>
              Your saved assignments and solutions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {assignments.length > 0 ? (
              assignments.map((item) => (
                <div key={item.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {getTimeRemaining(item.deadline)}
                    </span>
                  </div>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm text-blue-500">
                      View Solution
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground whitespace-pre-wrap">
                      {item.solution || "Solution not available."}
                    </p>
                  </details>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground">
                No assignments logged yet.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

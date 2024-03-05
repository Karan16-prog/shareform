"use client";
import { Button } from "./ui/button";

export function BackForm({ title }: { title: string }) {
  return (
    <div className="flex items-center">
      <Button>Back</Button>
      <div></div>
      <p>{title}</p>
    </div>
  );
}

export function Options() {
  return (
    <div className="bg-slate-200 flex items-center gap-x-3 p-4 rounded">
      <button className="hover group-hover:bg-red-50">Build</button>
      <button>Design</button>
      <button>Integrate</button>
      <button>Share</button>
      <button>Submissions</button>
    </div>
  );
}

export function FooterButtons() {
  return (
    <div>
      <Button>C</Button>
      <Button>O</Button>
      <Button>Published</Button>
    </div>
  );
}

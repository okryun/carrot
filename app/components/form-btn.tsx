"use client";

import { useFormStatus } from "react-dom";

export default function FormButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <div>
      <button
        disabled={pending}
        className="bg-orange-400 text-white w-full rounded-md h-8 disabled:opacity-50"
      >
        {pending ? "Loading..." : text}
      </button>
      <div></div>
    </div>
  );
}

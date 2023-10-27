"use client";

import { Loader2, XIcon } from "lucide-react";
import { useFormStatus } from "react-dom";

export const DeleteButton: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <button className="w-10 h-10 flex justify-center items-center">
      {pending ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <XIcon className="w-4 h-4" />
      )}
    </button>
  );
};

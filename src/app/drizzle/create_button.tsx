"use client";

import { Loader2, PlusIcon } from "lucide-react";
import { useFormStatus } from "react-dom";

export const CreateButton: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-10 h-10 flex justify-center items-center"
      disabled={pending}
    >
      {pending ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <PlusIcon className="w-4 h-4" />
      )}
    </button>
  );
};

import React from "react";

import { deleteUser } from "./actions";
import { DeleteButton } from "./delete_button";

type Props = {
  id: string;
};
export const UserCard: React.FC<Props> = ({ id }) => {
  return (
    <div className="bg-white rounded-md p-2.5 flex gap-x-2.5 text-black justify-between items-center max-w-xs">
      <div>{id}</div>
      <form action={deleteUser}>
        <input type="hidden" name="id" defaultValue={id} />
        <DeleteButton />
      </form>
    </div>
  );
};

'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteAction = async (idDelete: string, pagePosition:string) => {
  const res = await fetch(`http://localhost:3001/tasks/${idDelete}`, {
			method: "DELETE",
		});
		if (res.ok) {
            let path = pagePosition === "home" ? "/" : `/${pagePosition}`
            revalidatePath(path)
            redirect(path)
		}
	};


import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const formSubmitAction = async (formData: FormData) => {
	"use server"; //buat agar memastikan agar dia berjalan tok di server aja

	const title = formData.get("title");
	const category = formData.get("category");

	// console.log(title, category);

	// berhubungan dengan server yanga ada di sebrang, dengan fetch

	const response = await fetch("http://localhost:3001/tasks", {
		method: "POST",
		body: JSON.stringify({
			title,
			category,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	//redirect setelah dibuat
	if (response.ok) {
		revalidatePath("/");
		return redirect("/");
	}
};

const page = () => {
	//kalau mau buat ssr buat action
	//kalau csr buat pakai handlesubmit
	return (
		<form action={formSubmitAction}>
			<h1>create task</h1>
			<input
				type="text"
				className="text"
				name="title"
				id="title"
				placeholder="Type here"
			/>
			<select name="category" id="category">
				<option value="frontend">Frontend</option>
				<option value="backend">Backend</option>
				<option value="mobile">Mobile</option>
			</select>
			<button type="submit">Submit</button>
		</form>
	);
};

export default page;

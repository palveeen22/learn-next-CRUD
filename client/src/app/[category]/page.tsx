type Params = {
	category: string;
};

type Props = {
	params: Params;
};

import ServerList from "@/components/ServerList";
import { Tasks } from "@/type";

const fetchFilter = async (categoryType: string): Promise<Tasks[]> => {
	const res = await fetch(
		`http://localhost:3001/tasks?category=${categoryType}`
	);
	const result = await res.json();
	return result;
};

/*
aslinya gini get by id nya
export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>
}
*/

const page = async ({ params }: Props) => {
	const data = await fetchFilter(params.category);
	return (
		<>
			<p>halaman {params.category}</p>
			<ServerList task={data} pagePosition={params.category} />
		</>
	);
};

export default page;

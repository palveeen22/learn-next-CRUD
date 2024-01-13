// dia ssr jadi bisa asyn

import ServerList from "@/components/ServerList";
import { Tasks } from "@/type";

const fetchData = async (): Promise<Tasks[]> => {
	//karena dia asyn jadi harus Promise balikan datanya
	const res = await fetch("http://localhost:3001/tasks", {
		method: "GET", // optional by default dia get
	});
	const resJSon = await res.json();
	return resJSon;
};

const Home = async () => {
	const tasks = await fetchData();
	return (
		//table di pecah menjadi comp
		<ServerList task={tasks} pagePosition="home" />
	);
};

export default Home;

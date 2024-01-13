import { Tasks } from "@/type";
import ClientButtonDelete from "./ClientButtonDelete";

type Props = {
	task: Tasks[];
	pagePosition: string;
};

const ServerList = ({ task, pagePosition }: Props) => {
	return (
		<table>
			<thead>
				<tr>
					<td>id</td>
					<td>title</td>
					<td>category</td>
					<td>action</td>
				</tr>
			</thead>
			<tbody>
				{task.map((e) => {
					return (
						<tr key={e?.id}>
							<td>{e?.id}</td>
							<td>{e?.title}</td>
							<td>{e?.category}</td>
							<td>
								<ClientButtonDelete
									idDelete={e?.id}
									pagePosition={pagePosition} //ini pasing sebagai identitas halamnya
								/>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default ServerList;

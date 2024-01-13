"use client";

import { deleteAction } from "./action";

type Props = {
	idDelete: string;
	pagePosition: string;
};

const ClientButtonDelete = ({ idDelete, pagePosition }: Props) => {
	const ButtonClick = async () => {
		deleteAction(idDelete, pagePosition);
	};
	return (
		<button onClick={ButtonClick} className="p-8 bg-red-400">
			Delete
		</button>
	);
};

export default ClientButtonDelete;

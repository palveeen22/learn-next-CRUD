import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<section className="p-4 grid grid-cols-12">
					<section className="col-span-2">
						<ul>
							<li>
								<Link href="/">home</Link>
							</li>
							{/* dan seterusnya */}
							<li>
								<Link href="/create-task">create</Link>
							</li>
							<li>
								<Link href="/frontend">fe</Link>
							</li>
							<li>
								<Link href="/backend">be</Link>
							</li>
							<li>
								<Link href="/mobile">mobile</Link>
							</li>
						</ul>
					</section>
					<section>{children}</section>
				</section>
			</body>
		</html>
	);
}
// components/Navigation.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User } from "lucide-react";

export default function Navigation() {
	const pathname = usePathname();

	const isActive = (path: string) => pathname === path;

	return (
		<nav className="bg-white shadow-sm">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<div className="flex space-x-4">
						<Link
							href="/"
							className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                ${
									isActive("/")
										? "text-blue-600"
										: "text-gray-600 hover:text-blue-600"
								}`}
						>
							<Home className="w-4 h-4 mr-2" />
							Dashboard
						</Link>
						<Link
							href="/body-stats"
							className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                ${
									isActive("/body-stats")
										? "text-blue-600"
										: "text-gray-600 hover:text-blue-600"
								}`}
						>
							<User className="w-4 h-4 mr-2" />
							Körperparameter
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

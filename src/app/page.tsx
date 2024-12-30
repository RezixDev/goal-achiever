import { WeeklyPlanner } from "@/components/WeeklyPlanner"; // Pfad anpassen

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center w-full">
				{/* WeeklyPlanner Komponente */}
				<div className="w-full max-w-4xl">
					<WeeklyPlanner />
				</div>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				{/* Footer-Content bleibt unverändert */}
			</footer>
		</div>
	);
}

import { BodyStats } from "@/components/BodyStats";
import { NutritionSummary } from "@/components/NutritionSummary";

// Data
import { sampleMeals } from "@/components/data";
export default function KoerperPage() {
	// Berechne die Tagesernährung
	const dailyNutrition = {
		calories: sampleMeals.reduce((sum, meal) => sum + meal.calories, 0),
		protein: sampleMeals.reduce((sum, meal) => sum + meal.protein, 0),
		carbs: sampleMeals.reduce((sum, meal) => sum + meal.carbs, 0),
		fats: sampleMeals.reduce((sum, meal) => sum + meal.fats, 0),
		water: 0, // Wird durch WaterTracking verwaltet
	};

	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-bold">Körperparameter</h1>
			<BodyStats />
			<NutritionSummary dailyNutrition={dailyNutrition} />
		</div>
	);
}

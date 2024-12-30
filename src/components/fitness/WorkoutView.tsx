// components/fitness/WorkoutView.tsx
import React from "react";
import { Dumbbell } from "lucide-react";
import type { WorkoutSession, Exercise } from "@/data/types";

interface WorkoutViewProps {
	workout: WorkoutSession;
}

export const WorkoutView: React.FC<WorkoutViewProps> = ({ workout }) => (
	<div className="space-y-4">
		<div className="p-4 border rounded-lg">
			<h3 className="font-semibold mb-3">Heutiges Workout</h3>
			<div className="space-y-3">
				{workout.exercises.map((exercise: Exercise, index: number) => (
					<div key={index} className="flex items-center gap-4">
						<Dumbbell className="w-5 h-5" />
						<div>
							<p className="font-medium">{exercise.name}</p>
							<p className="text-sm text-gray-500">
								{exercise.sets} x {exercise.reps}
								{exercise.weight ? ` @ ${exercise.weight}kg` : ""}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	</div>
);

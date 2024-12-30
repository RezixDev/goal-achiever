// components/projects/ProjectsList.tsx
import React from "react";
import type { Project } from "@/data/types";

interface ProjectsListProps {
	projects: Project[];
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => (
	<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
		{projects.map((project) => (
			<div key={project.id} className="p-4 border rounded-lg">
				<div className="flex items-center gap-2 mb-2">
					<project.icon className="w-5 h-5" />
					<h3 className="font-semibold">{project.name}</h3>
				</div>
				<div className="text-sm text-gray-500 mb-2">
					Priorität: {project.priority}
				</div>
				<div className="text-sm mb-2">Milestones:</div>
				{project.milestones.map((milestone, idx) => (
					<div key={idx} className="flex items-center gap-2 ml-2 text-sm">
						<input type="checkbox" checked={milestone.completed} readOnly />
						<span>{milestone.name}</span>
					</div>
				))}
			</div>
		))}
	</div>
);

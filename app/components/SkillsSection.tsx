'use client';

interface Skill {
	name: string;
	level: number;
	category: 'Frontend' | 'Backend' | 'DevOps' | 'Tooling';
	badge?: string;
}

const skills: Skill[] = [
	{ name: 'Flutter', level: 95, category: 'Frontend', badge: 'Multi-Platform' },
	{ name: 'SwiftUI (Learning)', level: 60, category: 'Frontend', badge: 'iOS Native' },
	{ name: 'Kotlin (Jetpack Compose)', level: 80, category: 'Frontend', badge: 'Android' },
	{ name: 'Firebase', level: 92, category: 'Backend', badge: 'Serverless' },
	{ name: 'Node.js', level: 90, category: 'Backend', badge: 'API Backend' },
	{ name: 'MySQL (Sequelize)', level: 85, category: 'Backend', badge: 'ORM' },
	{ name: 'AWS & CI/CD', level: 80, category: 'DevOps', badge: 'Deployment' },
	{ name: 'Git & GitHub Actions', level: 90, category: 'DevOps', badge: 'Version Control' },
	{ name: 'App Store & Play Store Deployment', level: 88, category: 'DevOps', badge: 'Release' },
	{ name: 'Riverpod / GetX / Bloc', level: 90, category: 'Frontend', badge: 'State Management' },
	{ name: 'Figma & UI/UX', level: 85, category: 'Tooling', badge: 'Design' },
	{ name: 'Pixel Perfect UI', level: 85, category: 'Tooling', badge: 'Design' },
];

const groupedSkills = skills.reduce((acc, skill) => {
	(acc[skill.category] ||= []).push(skill);
	return acc;
}, {} as Record<string, Skill[]>);

const SkillsSection = () => {
	return (
		<section className="py-16 md:py-20 relative bg-gradient-to-b from-black to-gray-900 text-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">🛠️ Technical Expertise</h2>
				<p className="text-base text-gray-400 text-center mb-12 max-w-2xl mx-auto">
					Hands-on experience across frontend, backend, deployment, and app store operations.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{Object.entries(groupedSkills).map(([category, skills]) => (
						<div key={category} className="space-y-4">
							<h3 className="text-xl font-semibold border-b border-gray-700 pb-2 flex items-center gap-2">
								{category === 'Frontend' && '🎨 Frontend & UI'}
								{category === 'Backend' && '🧠 Backend & API'}
								{category === 'DevOps' && '🚀 DevOps & Deployment'}
								{category === 'Tooling' && '🧰 Design & Tools'}
							</h3>
							{skills.map((skill) => (
								<div key={skill.name} className="group relative">
									<div className="flex justify-between items-center mb-2">
										<div className="flex gap-2 items-center">
											<span className="font-medium">{skill.name}</span>
											{skill.badge && (
												<span className="text-xs px-2 py-0.5 bg-white/10 text-gray-300 border border-gray-600 rounded-full">
													{skill.badge}
												</span>
											)}
										</div>
										<span className="text-sm text-gray-400 group-hover:text-white transition">{skill.level}%</span>
									</div>
									<div className="h-2.5 bg-gray-700/50 rounded-full overflow-hidden">
										<div
											className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
											style={{ width: `${skill.level}%` }}
										></div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;

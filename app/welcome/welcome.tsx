import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import logoHospital from "./logo-hospital.png";

export function Welcome({ message }: { message: string }) {
	return (
		<main className="min-h-screen bg-gray-50 dark:bg-neutral-950 text-gray-800 dark:text-gray-100">
			<div className="container mx-auto px-6 py-12 flex flex-col items-center">
				
				<header className="flex flex-col items-center gap-8 text-center max-w-4xl">
					<div className="w-[220px] md:w-[320px]">
						<img
							src={logoHospital}
							alt="Hospital da Alma"
							className="block w-full dark:hidden"
  							style={{ borderRadius: "50%" }}
						/>

						<img
							src={logoHospital}
							alt="Hospital da Alma"
							className="hidden w-full dark:block"
							style={{ borderRadius: "50%" }}
						/>
					</div>

					<div className="space-y-4">
						<h1 className="text-4xl md:text-6xl font-bold text-blue-900 dark:text-blue-400">
							Hospital da Alma
						</h1>

						<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
							Um projeto de assistência espiritual e social dedicado
							ao cuidado da vida, da fé e do amor ao próximo.
						</p>
					</div>
				</header>

				<section className="mt-14 max-w-5xl grid gap-8 md:grid-cols-3">
					<div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-neutral-800">
						<h2 className="text-2xl font-semibold mb-3 text-blue-800 dark:text-blue-400">
							Propósito
						</h2>

						<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
							O Hospital da Alma nasceu com a missão de levar apoio
							espiritual, aconselhamento e acolhimento às pessoas,
							promovendo esperança, restauração e fortalecimento da fé.
						</p>
					</div>

					<div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-neutral-800">
						<h2 className="text-2xl font-semibold mb-3 text-blue-800 dark:text-blue-400">
							Atendimento
						</h2>

						<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
							Os atendimentos são realizados de forma voluntária por
							membros preparados e capacitados, oferecendo cuidado,
							oração e aconselhamento baseado nos princípios bíblicos.
						</p>
					</div>

					<div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-neutral-800">
						<h2 className="text-2xl font-semibold mb-3 text-blue-800 dark:text-blue-400">
							Assistência Social
						</h2>

						<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
							Além do cuidado espiritual, o projeto também promove
							ações sociais voltadas às pessoas necessitadas, levando
							amor, solidariedade e auxílio à comunidade.
						</p>
					</div>
				</section>

				<section className="mt-16 max-w-3xl text-center">
					<blockquote className="text-2xl md:text-3xl italic font-medium text-blue-900 dark:text-blue-300">
						“Quem cuida da alma, cuida da vida.”
					</blockquote>

					<p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
						“A religião pura e imaculada para com Deus, o Pai, é esta:
						visitar os órfãos e as viúvas nas suas tribulações e
						guardar-se puro da corrupção do mundo.”
					</p>

					<span className="block mt-2 font-semibold text-gray-700 dark:text-gray-300">
						Tiago 1:27
					</span>
				</section>

				<footer className="mt-16 text-sm text-gray-500 dark:text-gray-400 text-center">
					{message}
				</footer>
			</div>
		</main>
	);
}
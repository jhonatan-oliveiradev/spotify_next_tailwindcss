import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export function Main() {
	return (
		<main className="flex-1 p-6">
			<div className="flex items-center gap-3">
				<button className="p-1 rounded-full bg-black/40">
					<ChevronLeft />
				</button>
				<button className="p-1 rounded-full bg-black/40">
					<ChevronRight />
				</button>
			</div>
			<h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
			<div className="grid grid-cols-3 gap-4 mt-4">
				<a
					href="#"
					className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-all"
				>
					<Image src="/chill.png" alt="chill" width={104} height={104} />
					<strong>Chill</strong>
					<button className="invisible group-hover:visible flex items-center justify-center pl-1 w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-8">
						<Play />
					</button>
				</a>
				<a
					href="#"
					className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-all"
				>
					<Image
						src="/dancehits.png"
						alt="dance hits"
						width={104}
						height={104}
					/>
					<strong>Dance Hits</strong>
					<button className="invisible group-hover:visible flex items-center justify-center pl-1 w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-8">
						<Play />
					</button>
				</a>
				<a
					href="#"
					className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-all"
				>
					<Image
						src="/desplugado.png"
						alt="desplugado"
						width={104}
						height={104}
					/>
					<strong>Desplugado</strong>
					<button className="invisible group-hover:visible flex items-center justify-center pl-1 w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-8">
						<Play />
					</button>
				</a>
				<a
					href="#"
					className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-all"
				>
					<Image src="/fire.png" alt="fire" width={104} height={104} />
					<strong>Fire</strong>
					<button className="invisible group-hover:visible flex items-center justify-center pl-1 w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-8">
						<Play />
					</button>
				</a>
				<a
					href="#"
					className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-all"
				>
					<Image src="/happy.png" alt="happy" width={104} height={104} />
					<strong>Happy</strong>
					<button className="invisible group-hover:visible flex items-center justify-center pl-1 w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-8">
						<Play />
					</button>
				</a>
				<a
					href="#"
					className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-all"
				>
					<Image src="/oneweek.jpg" alt="oneweek" width={104} height={104} />
					<strong>One Week</strong>
					<button className="invisible group-hover:visible flex items-center justify-center pl-1 w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-8">
						<Play />
					</button>
				</a>
			</div>

			<h2 className="font-semibold text-2xl mt-10">
				Made for Jhonatan Oliveira
			</h2>
			<div className="grid grid-cols-5 gap-4 mt-4">
				<a
					href="#"
					className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-all"
				>
					<Image
						className="w-full"
						src="/rock.jpg"
						alt="playlist1"
						width={104}
						height={104}
					/>
					<strong>Daily Mix 1</strong>
					<span className="text-sm text-zinc-400">
						Wallows, COIN, girl in red and more
					</span>
				</a>
				<a
					href="#"
					className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-all"
				>
					<Image
						className="w-full"
						src="/roze.jpg"
						alt="playlist2"
						width={104}
						height={104}
					/>
					<strong>Daily Mix 1</strong>
					<span className="text-sm text-zinc-400">
						Wallows, COIN, girl in red and more
					</span>
				</a>
				<a
					href="#"
					className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-all"
				>
					<Image
						className="w-full"
						src="/sertanejo.png"
						alt="playlist3"
						width={104}
						height={104}
					/>
					<strong>Daily Mix 1</strong>
					<span className="text-sm text-zinc-400">
						Wallows, COIN, girl in red and more
					</span>
				</a>
				<a
					href="#"
					className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-all"
				>
					<Image
						className="w-full"
						src="/top50mund.jpg"
						alt="playlist4"
						width={104}
						height={104}
					/>
					<strong>Daily Mix 1</strong>
					<span className="text-sm text-zinc-400">
						Wallows, COIN, girl in red and more
					</span>
				</a>
				<a
					href="#"
					className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-all"
				>
					<Image
						className="w-full"
						src="/topbrasil.jpg"
						alt="playlist5"
						width={104}
						height={104}
					/>
					<strong>Daily Mix 1</strong>
					<span className="text-sm text-zinc-400">
						Wallows, COIN, girl in red and more
					</span>
				</a>
			</div>
		</main>
	);
}

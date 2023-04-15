import Image from "next/image";
import {
	Play,
	Shuffle,
	SkipBack,
	SkipForward,
	Repeat,
	Mic2,
	LayoutList,
	MonitorSpeaker,
	Volume2,
	Maximize2,
} from "lucide-react";

export function Footer() {
	return (
		<footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
			<div className="flex items-center gap-3">
				<Image src="/rock.jpg" alt="Rock" width={56} height={56} />
				<div className="flex flex-col">
					<strong className="font-normal">Rope</strong>
					<span className="text-xs text-zinc-500">Foo Fighters</span>
				</div>
			</div>
			<div className="flex flex-col items-center">
				<div className="flex items-center gap-6">
					<Shuffle
						size={20}
						className="text-zinc-200 hover:text-zinc-500 hover:cursor-pointer transition-all"
					/>
					<SkipBack
						size={20}
						className="text-zinc-200 hover:text-zinc-500 hover:cursor-pointer transition-all"
					/>

					<button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
						<Play />
					</button>

					<SkipForward
						size={20}
						className="text-zinc-200 hover:text-zinc-500 hover:cursor-pointer transition-all"
					/>
					<Repeat
						size={20}
						className="text-zinc-200 hover:text-zinc-500 hover:cursor-pointer transition-all"
					/>
				</div>
				<div className="flex items-center gap-2">
					<span className="text-xs text-zinc-400">1:31</span>
					<div className="h-1 rounded-full w-96 bg-zinc-600">
						<div className="h-1 rounded-full w-40 bg-zinc-400"></div>
					</div>
					<span className="text-xs text-zinc-400">3:14</span>
				</div>
			</div>
			<div className="flex items-center gap-2">
				<Mic2
					className="hover:text-zinc-500 hover:cursor-pointer transition-all"
					size={20}
				/>
				<LayoutList
					className="hover:cursor-pointer hover:text-zinc-500 transition-all"
					size={20}
				/>
				<MonitorSpeaker
					className="hover:cursor-pointer hover:text-zinc-500 transition-all"
					size={20}
				/>
				<div className="flex items-center gap-2">
					<Volume2
						className="hover:cursor-pointer hover:text-zinc-500 transition-all"
						size={20}
					/>
					<div className="h-1 rounded-full w-20 bg-zinc-600">
						<div className="h-1 rounded-full w-10 bg-zinc-400"></div>
					</div>
				</div>
				<Maximize2
					className="hover:cursor-pointer hover:text-zinc-500 transition-all"
					size={20}
				/>
			</div>
		</footer>
	);
}

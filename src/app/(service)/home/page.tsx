import Image from 'next/image';

export default function Home() {
	return (
		<div className="h-full px-8 py-10">
			<h1 className="text-2xl font-bold">Buongiorno, Bezzi!</h1>
			<div className="mt-10 flex gap-10 rounded-lg border-4 border-orange-300 px-5 py-5">
				<Image className="rounded-lg" src="/doggy.jpeg" alt="doggy" width={120} height={100}></Image>
				<div className="flex flex-col gap-2">
					<span>이름:배찌</span>
					<span>성별:남</span>
					<span>나이: 5개월</span>
					<span>생일:2023.04.23</span>
					<span>종: 포메라니안</span>
				</div>
			</div>
			<div className="mt-10">
				<h2 className="text-[20px]">무엇을 해야할까요?</h2>
			</div>
			<div className="mt-10">
				<h2 className="text-[20px]">오늘의 식사</h2>
			</div>
			<div className="mt-10">
				<h2 className="text-[20px]">오늘의 산책</h2>
			</div>
			<div className="mt-10">
				<h2 className="text-[20px]">건강스케쥴</h2>
			</div>
		</div>
	);
}

'use client';

import {useRouter} from 'next/navigation';

export default function Login() {
	const router = useRouter();

	const handleJoinClick = () => router.push('/join');
	const handleLoginClick = (e: React.MouseEvent) => {
		e.preventDefault();
		router.push('/home');
	};

	return (
		<div className="flex h-[100vh] w-full flex-col flex-wrap content-center justify-center bg-orange-400 ">
			<h1 className="mb-5 text-[64px] text-white">PawPaw</h1>
			<form className="flex flex-col">
				<label htmlFor="id">ID</label>
				<input id="id" type="text" />
				<label htmlFor="password">PASSWORD</label>
				<input id="passowrd" type="password" />
				<button onClick={handleLoginClick} type="submit">
					로그인
				</button>
			</form>
			<button onClick={handleJoinClick}>회원가입</button>
		</div>
	);
}

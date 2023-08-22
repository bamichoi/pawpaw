'use client';

import {useRouter} from 'next/navigation';

export default function Join() {
	const router = useRouter();

	const handleJoinClick = (e: React.MouseEvent) => {
		e.preventDefault();
		router.push('/home');
	};
	return (
		<div className="flex h-[100vh] w-full flex-col flex-wrap content-center justify-center bg-orange-400 ">
			<h1 className="mb-10 text-[64px] text-white">회원가입</h1>
			<form className="gap-1- flex flex-col gap-10">
				<div className="flex flex-col gap-2">
					<label htmlFor="id">아이디</label>
					<input id="id" />
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="passwored">비밀번호</label>
					<input id="password" />
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="check_password">비밀번호 확인</label>
					<input id="check_password" />
				</div>
				<input onClick={handleJoinClick} type="submit" value="가입" />
			</form>
		</div>
	);
}

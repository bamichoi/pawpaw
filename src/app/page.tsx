'use client';

import {useRouter} from 'next/navigation';
import {useState} from 'react';
import {signIn} from 'next-auth/react';

const SignIn = () => {
	const router = useRouter();
	const [form, setForm] = useState({email: '', password: ''});

	const handleJoinClick = () => router.push('/join');

	const handleSignInClick = async (e: React.MouseEvent) => {
		e.preventDefault();
		const result = await signIn('credentials', {...form, callbackUrl: `/home`});
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		setForm({...form, [e.target.id]: text});
	};

	return (
		<div className="flex h-[100vh] w-full flex-col flex-wrap content-center justify-center bg-orange-400 ">
			<h1 className="mb-5 text-[64px] text-white">PawPaw</h1>
			<form className="flex flex-col">
				<label htmlFor="id">이메일</label>
				<input id="email" type="email" name="email" onChange={handleInputChange} />
				<label htmlFor="password">비밀번호</label>
				<input id="password" type="password" name="password" onChange={handleInputChange} />
				<button onClick={handleSignInClick} type="submit">
					로그인
				</button>
			</form>
			<button onClick={handleJoinClick}>회원가입</button>
		</div>
	);
};

export default SignIn;

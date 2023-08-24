'use client';

import {useRouter} from 'next/navigation';
import requestJoinUser from '../api/users/joinUser';
import {useState} from 'react';
import Input from '../components/input';

export interface JoinForm {
	email: string;
	name: string;
	password: string;
	confirmPassword: string;
}

type InputName = keyof JoinForm;

const Join = () => {
	const router = useRouter();
	const [form, setForm] = useState<JoinForm>({email: '', name: '', password: '', confirmPassword: ''});

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		requestJoinUser(form);
		router.push('/');
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		setForm({...form, [e.target.id]: text});
	};
	return (
		<div className="flex h-[100vh] w-full flex-col flex-wrap content-center justify-center bg-orange-400 ">
			<h1 className="mb-10 text-[64px] text-white">회원가입</h1>
			<form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
				<Input id="email" type="email" name="이메일" value={form.email} onChange={handleInputChange} />
				<Input id="name" type="text" name="보호자 이름" value={form.name} onChange={handleInputChange} />
				<Input id="password" type="password" name="비밀번호" value={form.password} onChange={handleInputChange} />
				<Input id="confirmPassword" type="password" name="이메일" value={form.confirmPassword} onChange={handleInputChange} />
				<button type="submit">가입</button>
			</form>
		</div>
	);
};

export default Join;

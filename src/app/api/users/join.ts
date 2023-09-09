import {JoinForm} from '@/app/join/page';

const requestJoinUser = async (form: JoinForm) => {
	const res = await fetch('/api/users', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(form)
	});

	console.log(res);
};

export default requestJoinUser;

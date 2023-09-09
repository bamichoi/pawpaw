import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {label: '이메일', type: 'email', placeholder: '이메일을 입력해주세요.'},
				password: {label: '비밀번호', type: 'password', password: '비밀번호를 입력해주세요.'}
			},
			async authorize(credentials, req) {
				const res = await fetch(`${process.env.NEXTAUTH_URL}/api/signin`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email: credentials?.email,
						password: credentials?.password
					})
				});
				const user = await res.json();
				console.log(user);
				if (user) {
					// Any object returned will be saved in `user` property of the JWT
					return user;
				} else {
					// If you return null then an error will be displayed advising the user to check their details.
					return null;
					// You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
				}
			}
		})
	]
});

export {handler as GET, handler as POST};

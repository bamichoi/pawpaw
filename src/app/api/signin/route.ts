import prisma from '@/app/lib/primsa';
import {NextApiRequest} from 'next';
import * as bcrypt from 'bcrypt';
import {NextResponse} from 'next/server';

export const POST = async (req: Request) => {
	const {email, password} = await req.json();
	console.log(req);
	const user = await prisma.user.findFirst({
		where: {
			email
		}
	});
	console.log(user);
	if (user && (await bcrypt.compare(password, user.password))) {
		const {password, ...rest} = user;
		return new Response(JSON.stringify(rest));
	} else {
		return new Response(JSON.stringify(null));
	}
};

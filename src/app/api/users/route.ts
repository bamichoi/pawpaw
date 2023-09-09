import prisma from '@/app/lib/primsa';
import {NextApiRequest} from 'next';
import {NextResponse} from 'next/server';
import * as bcrypt from 'bcrypt';

export const POST = async (req: Request) => {
	const {email, name, password} = await req.json();
	const user = await prisma.user.create({
		data: {
			email,
			name,
			password: await bcrypt.hash(password, 10)
		}
	});
	console.log(user);
	return NextResponse.json({msg: 'success!'});
};

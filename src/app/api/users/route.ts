import {PrismaClient} from '@prisma/client';
import {NextRequest, NextResponse} from 'next/server';

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
	const {email, name, password} = await req.json();
	const user = await prisma.user.create({
		data: {
			email,
			name,
			password
		}
	});
	return NextResponse.json({msg: 'success!'});
};

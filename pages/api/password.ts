import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from 'cookie';

export default function handler(req: NextApiRequest, res:NextApiResponse){
	if(req.method !== "POST"){
		res.status(405).send("Method Not Allowed")
	}

	const password = req.body.password;
	
	if(process.env.PASSWORD_PROTECT?.toLowerCase === password.toLowerCase){
		const cookie = serialize('login', 'true', {
			path: '/',
			httpOnly: true
		})
		res.setHeader('Set-Cookie', cookie)
		res.redirect(302, '/')
	} else {
		const url = new URL("/password", req.headers["origin"])
		url.searchParams.append("error", "Incorrect Password")
		res.redirect(302, url.toString())
	}
}
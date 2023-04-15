import prisma from '../../lib/prisma';
import bcrypt from 'bcrypt';
// import { withSessionRoute } from "../../lib/config/withSession";
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

async function loginRoute(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // console.log(email)

  const user = await prisma.user.findUnique({
    where: { email },
  });

  // console.log(user)

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  const userInstance = { 
        isLoggedIn: true, 
        login:'', 
        id:user.id,
        username:user.username,
        email:user.email}
  //0331
  req.session.user = userInstance;
  await req.session.save();

  // const userInfo = { email: user.email };
  return res.status(200).json(userInstance);
}

export default withIronSessionApiRoute(loginRoute, sessionOptions)
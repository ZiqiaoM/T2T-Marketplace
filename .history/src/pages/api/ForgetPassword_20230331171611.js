// import nodemailer from 'nodemailer';

// export default async function forgetPassword(req, res) {
//   const { email } = req.body;

//   // Check if email is valid and exists in the database
//   // ...

//   // Generate a new password
//   const newPassword = Math.random().toString(36).slice(-8);

//   // Update the user's password in the database
//   // ...

//   // Send an email with the new password
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'your_email@gmail.com',
//       pass: 'your_password',
//     },
//   });

//   const mailOptions = {
//     from: 'your_email@gmail.com',
//     to: email,
//     subject: 'New Password',
//     text: `Your new password is: ${newPassword}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).json({ message: 'Email sent' });
//     }
//   });
// }


import prisma from '../../lib/prisma';

export default async function forgetPassword(req, res) {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(404).json({ message: 'User not found.' });
      return;
    }

    await prisma.user.update({
      where: { email },
      data: { password },
    });

    res.status(200).json({ message: 'Password updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  } finally {
    await prisma.$disconnect();
  }
}
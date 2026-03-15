import nodemailer from 'nodemailer';

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
});

// const sendEmail=async()=>{
//     const mailOptions={
//         from:'aissaes0203@gmail.com',
//         to:'nihalreddy.vanga@gmail.com',
//         subject:'Hello',
//         text:'hELLO THIS IN NIHAK'
//     }
//     await transporter.sendMail(mailOptions);
// }
export default transporter;
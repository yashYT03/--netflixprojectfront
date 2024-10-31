// import bcrypt from 'bcrypt'
// import { NextApiRequest, NextApiResponse } from 'next'
// import prismadb from '@/lib/prismadb'

// export default async function handler(req:NextApiRequest, res:NextApiResponse){
//     if (req.method == 'POST') {
//         return res.status(405).end();
//     }
// try {
// const { email, name, password} = req.body;
// const existingUser = await prismadb.user.findUnique({
//     where : {
//     email,
//     }
// });


// if(existingUser){
//     return res.status(422).json({error: 'Email taken'});
// }
// const hashedPassword = await bcrypt.hash(password,12);

// const user = await prismadb.user.create({
//     data:{
//         email,
//         name,
//         hashedPassword,
//         image:'',
//         emailVerified: new Date(),

//     }
// });
// return res.status(200).json(user);
// } catch(error) {
//     console.log(error);
//     return res.status(400).end();
// }
// }














import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        // Return 405 if the method is not POST
        return res.status(405).end();
    }

    try {
        const { email, name, password } = req.body;

        // Check if user already exists
        const existingUser = await prismadb.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return res.status(422).json({ error: 'Email taken' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create new user
        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date(),
            },
        });

        // Return the created user as a response
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}





// import bcrypt from 'bcrypt';
// import { NextApiRequest, NextApiResponse } from 'next';
// import prismadb from '@/lib/prismadb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== 'POST') {
//         return res.status(405).end(); // Return 405 if the method is not POST
//     }

//     try {
//         const { email, name, password } = req.body;

//         // Check if user already exists
//         const existingUser = await prismadb.user.findUnique({
//             where: { email },
//         });

//         if (existingUser) {
//             return res.status(422).json({ error: 'Email taken' });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 12);

//         // Create new user
//         const user = await prismadb.user.create({
//             data: {
//                 email,
//                 name,
//                 hashedPassword,
//                 image: '',
//                 emailVerified: new Date(),
//             },
//         });

//         // Return the created user as a response
//         return res.status(200).json(user);

//     } catch (error: any) {
//         // Improved error handling to prevent logging issues
//         if (error instanceof Error) {
//             console.error("Caught error:", error.message);
//         } else {
//             console.error("Unexpected error type:", error);
//         }
//         return res.status(400).json({ error: "An unexpected error occurred" });
//     }
// }

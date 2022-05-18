import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function createUserPrisma() {
    try {
        const user = await prisma.user.create({
            data: {
                email: 'nyaaaaaaaaaaaah',
                name: 'jadorelecacamdrcesttropbahnonjai25ansengros',
            },
        })
    }
    catch(error:any) {
        console.log(error)
        throw new Error(error)
    } 
}
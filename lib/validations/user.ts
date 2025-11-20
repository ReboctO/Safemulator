import * as z from 'zod';

export async function UserHandleError() {
    try{

    }catch(error:any){

    }
}



export const UserValidation = z.object({
    profile_photo : z.string().url().nonempty(),
    username: z.string().min(3).max(30),
    firstName: z.string().min(3).max(30),
    lastName: z.string().min(3).max(30),
    email: z.string().min(3).max(30),
    department: z.string().min(3).max(30),
    role: z.string().min(3).max(30)
})
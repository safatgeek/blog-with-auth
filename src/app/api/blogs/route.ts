import getCurrentUSer from "@/app/actions/getCurrentUSer";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    const currentUSer = await getCurrentUSer()

    if (!currentUSer) {
        return null
    }

    const body = await request.json()

    const {name,description,imageSrc} = body

    const blog = await prisma?.blog.create({
        data: {
            name,
            imageSrc,
            description,
            userId:currentUSer.id
        }
    })

    return NextResponse.json(blog)
}
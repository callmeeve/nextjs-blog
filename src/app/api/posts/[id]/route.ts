import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const posts = await prisma.post.findUnique({
      where: {
        id: params.id,
      },
      include: {
        user: true 
      }
    });

    if (!posts) {
      return NextResponse.json({ message: "posts not found" }, { status: 404 });
    }

    return NextResponse.json(posts);
  } catch (error: unknown) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: (error instanceof Error) ? error.message : 'Unknown error occurred',
      }),
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user || !user.id) {
    return NextResponse.redirect("/login");
  }

  try {
    const { title, content } = (await req.json()) as {
      title: string;
      content: string;
    };

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: params.id,
        userId: user.id,
      },
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(updatedPost);
  } catch (error: unknown) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: (error instanceof Error) ? error.message : 'Unknown error occurred',
      }),
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user || !user.id) {
    return NextResponse.redirect("/login");
  }

  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id: params.id,
        userId: user.id,
      },
    });

    return NextResponse.json(deletedPost);
  } catch (error: unknown) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: (error instanceof Error) ? error.message : 'Unknown error occurred',
      }),
      { status: 500 }
    );
  }
}
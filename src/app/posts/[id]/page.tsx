import { Metadata } from "next"

import { postApi } from "@/entities/post"

import { PostDetail } from "@/widgets"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params

  try {
    const { title, body } = await postApi.getById(Number(id))
    return {
      title: `Post: ${title}`,
      description: body,
    }
  } catch {
    return {
      title: `Post: #${id}`,
    }
  }
}

export default async function PostPage({ params }: PageProps) {
  const { id } = await params
  return <PostDetail id={Number(id)} />
}

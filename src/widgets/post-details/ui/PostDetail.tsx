"use client"

import { useRouter } from "next/navigation"

import { usePostQuery } from "@/entities/post"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Skeleton,
  Badge,
  Button,
} from "@/shared/ui"
import { ROUTES } from "@/config/routes"

interface PostDetailProps {
  id: number
}

export function PostDetail({ id }: PostDetailProps) {
  const router = useRouter()
  const { data: post, isLoading, isError } = usePostQuery(id)

  if (isLoading) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-7 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    )
  }

  if (isError || !post) {
    return (
      <div className="mx-auto max-w-2xl rounded-xl border border-red-200 bg-red-50 p-8 text-center">
        <p className="mb-2 text-xl font-semibold text-red-700">
          Post not found
        </p>
        <p className="mb-6 text-red-500">
          This post does not exist or has been deleted.
        </p>
        <Button onClick={() => router.push(ROUTES.home)}>Back to home</Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6">
        <Button variant="ghost" className="-ml-2" onClick={() => router.back()}>
          Back
        </Button>
      </div>
      <Card>
        <CardHeader>
          <Badge variant="outline" className="mb-1 w-fit">
            #{post.id}
          </Badge>
          <CardTitle className="text-2xl capitalize">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-zinc-600">{post.body}</p>
        </CardContent>
      </Card>
    </div>
  )
}

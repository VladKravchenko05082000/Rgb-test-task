"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { useAllPostQuery } from "@/entities/post"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Skeleton,
  Badge,
  Button,
} from "@/shared/ui"

import { truncateText } from "@/shared/lib/utils"
import { ROUTES } from "@/config/routes"

export function PostList() {
  const router = useRouter()
  const { data: posts, isLoading, isError } = useAllPostQuery()

  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="mt-auto h-9 w-28" />
          </div>
        ))}
      </div>
    )
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
        Failed to load posts. Please check your connection and try again.
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts?.map((post) => (
        <Card
          key={post.id}
          className="flex flex-col transition-shadow hover:shadow-md"
        >
          <CardHeader className="flex-1">
            <div className="mb-2">
              <Badge
                variant="ghost"
                onClick={() => router.push(`/${ROUTES.posts}/${post.id}`)}
              >
                #{post.id}
              </Badge>
            </div>
            <CardTitle className="line-clamp-2 capitalize">
              {post.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-500">
              {truncateText(post.body, 30)}
            </p>
          </CardContent>
          <CardFooter>
            <Link href={`/${ROUTES.posts}/${post.id}`}>
              <Button variant="outline">View details</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

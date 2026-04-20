import { useQuery } from "@tanstack/react-query"
import { postApi } from "../api/post-api"

export const postKeys = {
  all: ["posts"] as const,
  detail: (id: number) => ["posts", id] as const,
}

export function useAllPostQuery() {
  return useQuery({
    queryKey: postKeys.all,
    queryFn: postApi.getAll,
  })
}

export function usePostQuery(id: number) {
  return useQuery({
    queryKey: postKeys.detail(id),
    queryFn: () => postApi.getById(id),
    enabled: !!id,
  })
}

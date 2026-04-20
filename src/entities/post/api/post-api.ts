import { axiosInstance } from "@/shared/api/axios-instance"

import { PostItem } from "@/shared/types/post/post"

export const postApi = {
  getAll: async (): Promise<PostItem[]> => {
    const { data } = await axiosInstance.get<PostItem[]>("/posts")
    return data
  },

  getById: async (id: number): Promise<PostItem> => {
    const { data } = await axiosInstance.get<PostItem>(`/posts/${id}`)
    return data
  },
}

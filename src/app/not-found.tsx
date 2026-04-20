import Image from "next/image"
import Link from "next/link"

import { ROUTES } from "@/config/routes"

export default function NotFound() {
  return (
    <div className="absolute inset-0 flex h-screen min-h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6 text-white">
      <div className="max-w-xl text-center">
        <h1 className="mb-6 animate-bounce text-7xl font-extrabold">404</h1>

        <p className="mb-4 text-2xl">You wandered off...</p>

        <p className="mb-8 text-gray-400">
          Oops... looks like this page got a little lost. 🥺
        </p>

        <div className="mb-8 rounded-2xl bg-gray-800 p-6 shadow-xl">
          <Image
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExODAxeW5ncXN2djY5dnM3NnVhYzFmYnR5ZnZndnU4OW93bmY0OG0waiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2vlC9FMLSmqGs/giphy.gif"
            alt="confused meme"
            width={500}
            height={500}
            className="mx-auto rounded-xl"
          />
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href={ROUTES.home}
            className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

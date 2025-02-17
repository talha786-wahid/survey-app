"use client"

import { Survey } from "../components/Survey"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Personal & Lifestyle Survey</h1>
        <Survey />
      </div>
    </main>
  )
}


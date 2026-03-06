"use client"

import { useEffect, useState } from "react"
import Card from "@/components/Card"
import ActorProps from "@/components/Actor"

export default function Home() {

  const [actors, setActors] = useState<ActorProps[]>([])

  useEffect(() => {

    fetch("http://localhost:3000/api/v1/actors")
      .then((res) => res.json())
      .then((data) => {
        setActors(data)
      })

  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-4xl font-bold mb-12">Lista de Actores</h1>
      <div className="grid grid-cols-3 gap-4 p-10">

        {actors.map((actor) => (
          <Card key={actor.id} actor={actor} />
        ))}

      </div>
    </main>
  )
}
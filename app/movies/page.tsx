"use client"

import { useEffect, useState } from "react"
import CardMovie from "@/components/CardMovie"
import MovieProps from "@/components/Movie"

export default function Home() {

  const [movies, setActors] = useState<MovieProps[]>([])

  useEffect(() => {

    fetch("http://localhost:3000/api/v1/movies")
      .then((res) => res.json())
      .then((data) => {
        setActors(data)
      })

  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-4xl font-bold mb-12">Lista de Peliculas</h1>
      <div className="grid grid-cols-3 gap-4 p-10">

        {movies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}

      </div>
    </main>
  )
}
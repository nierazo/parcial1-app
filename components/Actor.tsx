interface MovieProps {
  id: string
  title: string
  poster: string
  duration: number
  country: string
  releaseDate: string
  popularity: number
}

interface ActorProps {
  id: string
  name: string
  photo: string
  nationality: string
  birthDate: string
  biography: string
  movies: MovieProps[]
}

export default ActorProps
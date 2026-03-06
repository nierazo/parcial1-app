import MovieProps from "./Movie"

interface ActorProps {
  id: string
  name: string
  photo: string
  nationality: string
  birthDate: string
  biography: string
  movies: MovieProps[]
}

export default ActorProps;

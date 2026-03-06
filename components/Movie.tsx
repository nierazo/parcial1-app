import Director from "./Director"

interface MovieProps {
  id: string
  title: string
  poster: string
  duration: number
  country: string
  releaseDate: string
  popularity: number
  directors?: Director[]
  prize?: string

}

export default MovieProps;
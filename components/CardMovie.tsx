import CardPropsMovie from "./CardPropsMovie";

const Card = ({ movie }: CardPropsMovie) => {
  return (
    <main className="border rounded-lg shadow-lg overflow-hidden max-w-sm">
        <div className="border rounded-lg shadow-lg overflow-hidden max-w-sm">
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
            <p className="text-gray-700">{new Date(movie.releaseDate).toLocaleDateString()}</p>
                <p className="text-gray-700">{movie.directors?.findLast.name}</p>
                <p className="text-gray-700">{movie.prize}</p>
        </div>

        </div>
    </main>
  );
};

export default Card;
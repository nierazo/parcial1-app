import Image from "next/image";
import CardProps from "./CardProps";

const Card = ({ actor }: CardProps) => {
  return (
    <main className="border rounded-lg shadow-lg overflow-hidden max-w-sm">
        <div className="border rounded-lg shadow-lg overflow-hidden max-w-sm">

        <Image
            src={actor.photo}
            alt={`Imagen para ${actor.name}`}
            width={500}
            height={300}
            className="w-full h-48 object-cover"
        />

        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{actor.name}</h3>
            <p className="text-gray-700">{actor.nationality}</p>
            <p className="text-gray-700">{new Date(actor.birthDate).toLocaleDateString()}</p>
            <p className="text-gray-700">{actor.biography}</p>
        </div>

        </div>
    </main>
  );
};

export default Card;
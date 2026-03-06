"use client"
import Image from "next/image";
import useActorForm from "@/components/CustomHook";

export default function CrearActor() {
  const { inputs, actors, handleInputChange, handleSubmit } = useActorForm()

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Crear Actor</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={inputs.name}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="photo">Photo (URL)</label>
          <input
            type="text"
            id="photo"
            name="photo"
            value={inputs.photo}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="nationality">Nationality</label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={inputs.nationality}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="birthDate">Birthday</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={inputs.birthDate}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="biography">Biography</label>
          <textarea
            id="biography"
            name="biography"
            value={inputs.biography}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-3">
          Registrar Actor
        </button>
      </form>

      <h2 className="text-xl font-bold mt-10 mb-5">Lista de Actores</h2>

      <div className="grid grid-cols-3 gap-4">
        {actors.map((actor) => (
          <div key={actor.id} className="border rounded p-2">
            <h3 className="font-bold">{actor.name}</h3>
            <Image
                src={actor.photo}
                alt={actor.name}
                width={300}        // ancho de la imagen
                height={150}       // alto de la imagen
                className="w-full h-32 object-cover"
            />
            <p>{actor.nationality}</p>
            <p>{actor.birthDate}</p>
            <p>{actor.biography}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
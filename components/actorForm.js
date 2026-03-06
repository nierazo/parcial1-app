import { useActorForm } from "@/hooks/useActorForm";

function Signup() {
  const { handleSubmit, handleInputChange } = useActorForm(schema);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="photo">Photo</label>
          <input
            type="text"
            id="photo"
            name="photo"
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="nationality">Nationality</label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="birthday">Birthday</label>
          <input
            type="text"
            id="birthday"
            name="birthday"
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="biography">Biography</label>
          <input
            type="text"
            id="biography"
            name="biography"
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Signup;
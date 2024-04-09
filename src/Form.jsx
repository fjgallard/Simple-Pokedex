import { useQuery } from "@tanstack/react-query";
import fetchTypes from "./data/fetchTypes";

const Form = () => {
  const results = useQuery(["types", ''], fetchTypes);
  const types = results?.data?.results || [];

  if (results?.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  return (
    <form>
      <div>
        <label htmlFor="types">Choose a Pokémon Type:</label>
        <select id="types" name="types">
        <option />
          {types.map((type) => (
            <option key={type.name} value={type.name}>
            {type.name}
          </option>
          ))}
        </select>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Form;
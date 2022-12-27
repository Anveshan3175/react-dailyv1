import { people } from "./sample-data";
import { getImageUrl } from "./sample-utils";

export default function SampleObjectsDetailsList() {
  const allPersons = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return <ul>{allPersons}</ul>;
}

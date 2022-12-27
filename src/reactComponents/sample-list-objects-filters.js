import { people } from "./sample-data";
import { getImageUrl } from "./sample-utils";

export default function SampleObjectsDetailsFilter() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const displayChemists = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <br />
      <b>{person.name} </b> {" " + person.profession + " "}
    </li>
  ));

  return <>{<ul>{displayChemists}</ul>}</>;
}

import React, { useEffect } from "react";
import { people } from "./sample-data";
import { getImageUrl } from "./sample-utils";

export default function SampleDropdown() {
  const [displayPeople, setDisplayPeople] = React.useState();

  function handleChange(event) {
    const selectedProfession = event.target.value;
    const filteredPeople = people.filter(
      (person) => person.profession === selectedProfession
    );

    setDisplayPeople(
      filteredPeople.map((person) => (
        <li key={person.id}>
          {person.name}
          <p />
          <img src={getImageUrl(person)} alt={person.name} />
          <p />
        </li>
      ))
    );
  }

  // useEffect(() => {
  //   setDropdownVal(dropdownVal);
  // }, [dropdownVal, setDropdownVal]);

  return (
    <>
      <label>
        Select Profession : &nbsp;
        <select
          id="professions"
          style={{ padding: "5px" }}
          onChange={handleChange}
        >
          <option value=""> </option>
          <option value="mathematician">Mathematician </option>
          <option value="chemist">Chemist</option>
          <option value="physicist">Physicist</option>
          <option value="astrophysicist">Astrophysicist</option>
        </select>
      </label>

      <p />
      <ul>{displayPeople}</ul>
    </>
  );
}

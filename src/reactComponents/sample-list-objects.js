export default function SampleObjectsList() {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

  const allPersons = people.map((person) => (
    <li key={person.id}>{person.name}</li>
  ));

  const chemistsOnly = people.map((person) => {
    if (person.profession === "chemist")
      return <li key={person.id}>{person.name}</li>;
  });
  return (
    <>
      <h1> All persons</h1>
      <ul>{allPersons}</ul>
      <br />

      <h1>Chemists only</h1>
      <ul>{chemistsOnly}</ul>
    </>
  );
}

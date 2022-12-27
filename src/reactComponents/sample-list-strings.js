export default function SampleStringsList() {
  const namesList = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];

  const filteredList = namesList.map((name) => <li>{name}</li>);
  return (
    <>
      <ul>{filteredList}</ul>
    </>
  );
}

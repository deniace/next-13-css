import TeaList from "../../components/TeaList";

const teas = [
  {
    name: "Oolong",
    description: "A partially fermented tea.",
    image: "/oolong.jpg",
  },
  {
    name: "Yuunan Gold",
    description: "Teh yunan.",
    image: "/yunnan-gold.jpg",
  },
];

export default function Shop() {
  return (
    <main>
      <div className="lookup">
        <h1>Shop our tea</h1>
        <TeaList teas={teas} />
      </div>
    </main>
  );
}

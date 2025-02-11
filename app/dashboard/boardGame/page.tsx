import VegetableComponent from "../../../components/VegetableComponent";
import TableOfContents from "../../../components/TableOfContents";


export default function StarfieldApp() {
  return (
    <div>
      <div className="main">
        <h1>Vegetables (Board Game is TBD)</h1>
        <TableOfContents />
        <ul><VegetableComponent/></ul>
      </div>
    </div>
  );
}
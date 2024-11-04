import SampleComponent from "../components/SampleComponent";
import MyButton from "../components/MyButton";
import VegetableComponent from "../components/VegetableComponent";
import TableOfContents from '../components/TableOfContents';

export default function StarfieldApp() {
  return (
    <div>
      <TableOfContents />
      
      <div className="main">
        <h1>Welcome to my app</h1>
        <ul><VegetableComponent/></ul>
        <ul><SampleComponent message={"test"}/></ul>
        <MyButton />
      </div>
    </div>
  );
}
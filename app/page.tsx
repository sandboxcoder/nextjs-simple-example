import SampleComponent from "../components/SampleComponent";
import MyButton from "../components/MyButton";
import VegetableComponent from "../components/VegetableComponent";

export default function StarfieldApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <ul><VegetableComponent/></ul>
      <ul><SampleComponent/></ul>
      <MyButton />
    </div>
  );
}
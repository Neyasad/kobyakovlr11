import './App.css';
import Pizzacard from './components/Pizzacard/Pizzacard';
import pepperoni from "./pic/pepperoni.png"

function App() {

  return (
    <div className="main">
      <Pizzacard title="Пепперони" description="Ничего лишнего! Томатный соус, колбаски, Пепперони и Моцарелла"
      image={pepperoni} price="550"/>
    </div>
  );


}

export default App;

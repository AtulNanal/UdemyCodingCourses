import React, { useState } from "react";
//import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import "./App.css";
import type Item from "./models/item";
import { v4 as getId } from "uuid";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, qty: number) => {
    console.log("Made it to the App Component !!");
    console.log(product);
    setItems([...items, { id: getId(), product: product, quantity: qty }]);
  };
  // const items = [
  //   { id: 1, product: "Lemon", quantity: 3 },
  //   { id: 2, product: "Chicken Breast", quantity: 2 },
  // ];

  return (
    <div>
      <ShoppingList items={items} />
      {/* <Greeter person="Colt" />
      <Greeter person="Blue" />
      <Greeter person="Elton" /> */}
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;

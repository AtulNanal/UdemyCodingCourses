import React from "react";
import type Item from "../models/item";

interface ShoppingListProps {
  items: Item[];
}

export default function ShoppingList(props: ShoppingListProps) {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            {item.product} --- {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

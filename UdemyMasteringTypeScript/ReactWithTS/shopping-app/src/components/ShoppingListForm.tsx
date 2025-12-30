import { useRef } from "react";
import React, { type JSX } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

function ShoppingListForm(props: ShoppingListFormProps): JSX.Element {
  const prodInputRef = useRef<HTMLInputElement>(null);
  const qtyInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newProduct = prodInputRef.current!.value;
    const quantity = parseInt(qtyInputRef.current!.value);
    props.onAddItem(newProduct, quantity);
    prodInputRef.current!.value = ""; //Clear the input
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={prodInputRef} />
      <input type="number" min={0} ref={qtyInputRef} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ShoppingListForm;

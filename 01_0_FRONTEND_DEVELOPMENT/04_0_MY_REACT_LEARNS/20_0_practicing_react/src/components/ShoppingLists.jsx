import {useState} from "react";

const ShoppingLists = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const handleSubmit = e =>{
    e.preventDefault()
    if(!name || !qty)return;
    const newItem = {
        name, qty: parseInt(qty),
    };
    setItems((prevItems) => [...prevItems, newItem]);
    setName("");
    setQty("");
  }
  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ItemName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.qty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingLists;

const ProductList = () => {
  const products = [
    {id: 1, name: "Phone", price: "$599"},
    {id: 2, name: "Laptop", price: "$5992"},
    {id: 3, name: "TV", price: "$1599"},
  ];
  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <h1>Name: {p.name}</h1>
          <h1>Price: {p.price}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

import Person from "./components/Person"
import Product from "./components/Product"

const App = () => {
  return (
    <div>
      <Person name = 'Krishna' age={21}/>
      <Product name = 'Iphone' price={21000}/>
    </div>
  )
}

export default App
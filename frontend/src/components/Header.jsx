import { Filters } from "./Filters";
import { ProductCreator } from "./ProductCreator";
import '../assets/Header.css'
export function Header() {
  return (
    <header>
      <h1>Productos</h1>
      <div className="container-header">
        <ProductCreator  />
        <Filters />
      </div>
    </header>
  )
}

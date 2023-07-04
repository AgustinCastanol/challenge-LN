import { Filters } from "./Filters";
import { ProductCreator } from "./ProductCreator";
import '../assets/Header.css'
import { DropDownProvider } from '../context/dropdown';
export function Header() {
  return (
    <header>
      <h1>Productos</h1>
      <div className="container-header">
        <DropDownProvider>
          <ProductCreator />
        </DropDownProvider>
        <Filters />
      </div>
    </header>
  )
}

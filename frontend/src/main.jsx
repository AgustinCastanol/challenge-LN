import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'
import { ProductsProvider } from './context/products.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductsProvider>
        <FiltersProvider>
            <App />
        </FiltersProvider>
    </ProductsProvider>
)

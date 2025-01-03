import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FlowersProvider from './context/Flowers.jsx'
import BasketProvider from './context/Basket.jsx'
import FavoritesProvider from './context/Favorites.jsx'

createRoot(document.getElementById('root')).render(
  <FavoritesProvider>
    <BasketProvider>
      <FlowersProvider>
        <App />
      </FlowersProvider>
    </BasketProvider>
  </FavoritesProvider>,
)

import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/App'
import Error from './components/Error'
import Location from './pages/Location'
import APropos from './pages/APropos'
import './assets/fonts/static/Montserrat-Regular.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/location/:id" element={<Location />} />
      <Route path="/locationTest" element={<Location />} />
      <Route path="/about" element={<APropos />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
)

import {createRoot} from 'react-dom/client'
import './ui/index.css'
import {HomePage} from '../pages/home'

export const mountApp = () => {
  createRoot(document.getElementById('root')!).render(
    <HomePage/>
  )
}

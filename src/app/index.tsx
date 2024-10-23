import {createRoot} from 'react-dom/client'
import './ui/index.css'
import {HomePage} from '../pages/home'
import {MainLayout} from "../shared/ui";

export const mountApp = () => {
  createRoot(document.getElementById('root')!).render(
    <MainLayout>
      <HomePage/>
    </MainLayout>
  )
}

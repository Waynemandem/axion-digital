import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Blog />} />
    </Routes>
  )
}

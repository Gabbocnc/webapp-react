import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Layout from './layout/layout'
import HomePage from './pages/HomePage'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

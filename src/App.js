import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'


function App() {
  return <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
      </Routes>
    </Router>
  </div>
}

export default App

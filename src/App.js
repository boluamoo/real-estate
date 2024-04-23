import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Companies from './Components/Companies'
import Residencies from './Components/Residencies'
import Value from './Components/Value'
import Contact from './Components/Contact'
import GetStarted from './Components/GetStarted'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Companies />
      <Residencies />
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default App

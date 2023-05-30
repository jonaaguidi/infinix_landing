import "./styles/vendor.min.css"
import './App.css'
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Enterprises from "./components/Enterprises/Enterprises"
import Team from "./components/Team/Team"
import SolutionsText from "./components/SolutionsText/SolutionsText"
import Partners from "./components/Partners/Partners"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Enterprises />
        <Team />
        <SolutionsText />
        <Partners />
      </main>
      <Footer />
    </>
  )
}

export default App

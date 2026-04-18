import Navbar from "./components/navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {
  return (
    <>
    <Navbar/>
    <div className="cards">
    <Card title="card 1" description="I am description of card One" />
    <Card title="card 2" description="I am description of card Two"/>
    <Card title="card 3" description="I am description of card Three"/>
    <Card title="card 4" description="I am description of card Four"/>
    </div>
    <Footer/>
</>
  )
}

export default App
import './App.css'
import { Card, CardProps } from './components/Card/Card'

function App() {
  const card1: CardProps = {
    title: 'Card title',
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: "https://ps.w.org/tiny-compress-images/assets/icon-256x256.png?rev=1088385",
  }

  const card2: CardProps = {
    title: 'Special title treatment',
    text: 'With supporting text below as a natural lead-in to additional content.',
  }
  
  return (
    <div className='container'>
      <Card {...card1}/>
      <br />
      <Card {...card2}/>
    </div>
  );
}

export default App

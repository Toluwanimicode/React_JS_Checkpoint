import CardCom from './components/Cards'
import Navigationbar from "./components/NavigationBar"
import "./App.css"

function App() {
  return (
    <>
      <Navigationbar />
      <h1>Welcome to my component</h1>
      <div className='grid'>
        <CardCom 
          title="Mouse"
          imgUrl="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/2682531/1.jpg?7831"
          text="Mouse"
        />

        <CardCom 
          title="Refrigerator"
          imgUrl="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/7090752/1.jpg?5951"
          text="Mouse"
        />

        <CardCom 
          title="Sony PlayStation 5 Console"
          imgUrl="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/5490752/1.jpg?7906"
          text="Mouse"
        />     
      </div>
     

    </>
  )
}

export default App

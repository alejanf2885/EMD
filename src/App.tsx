

import './App.css'
import Form from './components/Form'
import CardAdvantages from './components/CardAdvantages'

function App() {
 

  return (
    <>
      <h1>EMD</h1>
      <div className="w-96 mx-auto bg-gray-800 p-4 rounded-md shadow-md">
        <Form />
      </div>
      <div className="">
        <CardAdvantages />  
      </div>
      
    </>
  )
}

export default App

import { useState } from 'react';
import './App.css'
import Form from './components/Form'
import CardAdvantages from './components/CardAdvantages'
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
    <Header />
    <div className='bg-gray-500 p-6'>
      <Button text="Buscar" variant="primary" />
      <Button text="Buscar" variant="secondary" />
      <Button text="Buscar" variant="details" />
    </div>
    <Footer />
 
  
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

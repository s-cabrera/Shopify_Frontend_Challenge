import './App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Gallery from './components/Gallery';
import Header from './components/Header';

function App() {
  return (
    
    <div className="App">
    <ChakraProvider>
      <Header />
      <Gallery/>
    </ChakraProvider>  
    </div>

  )
}

export default App;
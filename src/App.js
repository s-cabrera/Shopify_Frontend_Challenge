import './App.css';
import * as React from 'react'
import PageContainer from './components/PageContainer';

//Chakra UI Components
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider theme={theme} minHeight="vh100">
      <PageContainer/>
    </ChakraProvider>  

  )
}

export default App;
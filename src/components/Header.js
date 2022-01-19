//imports
import React from "react"

//Chakra UI
import {
    Flex,
    Input,    
    Heading,
    Button,
    Spinner,
    Spacer,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    useColorMode,
    useColorModeValue,
    
} from "@chakra-ui/react"

import { SearchIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

function Header({setSearch, show, setShow}) {
    
    //Input value on change
    const [input, setInput] = React.useState('');

    //Is Loading switch
    const handleSubmit = () => {
        setShow(!show)
        setSearch(input)
        setInput('');
    }


    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Flex 
                p={5} 
                borderBottom={'2px solid'} 
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                align={{
                    base: 'center'
                }} 
                direction={{
                    base: 'column',
                    md: 'row'
                }}
            >
                <Heading class="heading" size='2xl'>NASA-Gram</Heading>
                <Spacer />
                <InputGroup 
                    width={{
                        base: '80%', 
                        md: '45%',
                        lg: '30%'
                    }} 
                    alignItems={'center'}
                >
                    <InputLeftAddon children={<SearchIcon />} />
                    <Input 
                        type='text' 
                        placeholder='Look up a NASA title' 
                        onChange={(e)=> {setInput(e.target.value)}}
                        value={input}
                        />
                    <InputRightAddon width='4.5rem' p={1}
                        children=                        
                        {show ?
                            <Button 
                                isLoading  
                                variant={'ghost'}
                                width={'100%'}

                            >
                                <Spinner />
                            </Button>
                            :
                            <Button 
                                variant={'ghost'} 
                                width={'100%'}
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        }
                    />
                </InputGroup>
                <Button
                    onClick={toggleColorMode}
                    h="full"
                    m={3}
                    aria-label="Dark/Light Theme Toggle Button"
                    w={{ 
                        base: '80%', 
                        md: 'fit-content' 
                    }}
                    py={2}
                >
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Flex>

        </>

    )
}

export default Header;
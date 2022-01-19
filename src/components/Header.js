//imports
import React from "react"

//Chakra UI
import {
    Flex,
    InputGroup,
    InputLeftAddon,
    Input,
    InputRightElement,
    Heading,
    Button,
    Spinner,
    Spacer
} from "@chakra-ui/react"

import { SearchIcon } from '@chakra-ui/icons'

function Header() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <>
            <Flex p={5} borderBottom={'2px solid'} borderColor={'gray.700'}>
                <Heading class="heading" size='2xl'>NASA-Gram</Heading>
                <Spacer/>
                <InputGroup width={'30%'}>
                    <InputLeftAddon children={<SearchIcon />} />
                    <Input type='tel' placeholder='Look up a NASA title' />
                    <InputRightElement width='4.5rem'>
                        {show ?
                            <Button isLoading h='1.75rem' size='sm'>
                                <Spinner />
                            </Button>
                            :
                            <Button h='1.75rem' size='sm' onClick={handleClick}>Submit</Button>
                        }

                    </InputRightElement>
                </InputGroup>
            </Flex>

        </>

    )
}

export default Header;
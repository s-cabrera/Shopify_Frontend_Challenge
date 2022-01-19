//imports
import React from "react"

//Chakra UI
import {
    Box,
    Text,
    Icon,
    Stack,
    Spacer,
    Spinner,
    useColorModeValue
} from "@chakra-ui/react"


//Font Awesome Icons and Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

//Lazy Loading
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


//Images
import testImg from "../dark_background.jpg"

//Each image result should list at least a title, date of capture (ideally in earth_date) and a button to “like” that image

function Card() {

    const [like, setLike] = React.useState(false)
    const changeLikeStatus = () => setLike(!like)

    return (

        < Box
            bg={useColorModeValue("gray.200", "gray.700")}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="dark-lg"
            p={2}
        >
            <Box
                px={2}
            >
                <Box 
                    py={1} 
                    my={2} 
                    background={useColorModeValue('gray.300','gray.600')} 
                    borderRadius={5}
                >
                    <Text
                        align="right"
                        p={1}
                        fontSize='md'
                        fontWeight={'bold'}
                        color={useColorModeValue('blackAlpha.500', 'blackAlpha.700')}
                    >
                        01/18/2022
                    </Text>

                    <LazyLoadImage
                        src={testImg}
                        alt={"title"}
                        aria-label={"title"}
                        width={'100%'}
                        height={'100%'}
                        effect="black-and-white"
                        placeholderSrc={'Image loading'}
                        placeholder={<div height="100%" width="100%"> <Spinner /> </div>}
                    />
                </Box>

                <Stack direction={'row'} m={3}>
                    <Text
                        fontSize={'2xl'}
                        fontWeight={'semibold'}
                        color={useColorModeValue('gray.500', 'gray.300')}
                    >
                        Dark Sky
                    </Text>
                    <Spacer />
                    <Icon w={8} h={8} color={ like ? 'red.400': 'gray.500'}>
                        <FontAwesomeIcon 
                            size="sm"
                            icon={faHeart} 
                            class="heart"
                            alt="Like/Unlike button" 
                            onClick={changeLikeStatus} 
                        />
                    </Icon>
                </Stack>
            </Box>
        </Box >
    )
}

export default Card;
//imports
import React from "react"

//Chakra UI
import {
    Box,
    Text,
    Icon,
    Stack,
    Button,
    Spacer,
    Spinner,
    Collapse,
    useColorModeValue,
    // useDisclosure
} from "@chakra-ui/react"

//Font Awesome Icons and Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

//Lazy Loading
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


//Images
// import testImg from "../dark_background.jpg"

//Each image result should list at least a title, date of capture (ideally in earth_date) and a button to “like” that image

function Card({item}) {

    // const savedLike = localStorage.getItem(item.title);

    const [like, setLike] = React.useState(false);
    const changeLikeStatus = () => {setLike(!like)}

    React.useEffect(() => {
        async function init() {
          const data = await localStorage.getItem(`${item.title}_${item.date}`); 
          console.log(`${item.title}_${item.date} : ${data}`);
        //   console.log(`Parsed: ${JSON.parse(data)}`);
          setLike(JSON.parse(data));
        }
        init();
    }, [ item.title, item.date])

    React.useEffect(() => {
        localStorage.setItem(`${item.title}_${item.date}`, like);
       }, [like, item.title, item.date])


    // onLoad={() => { setLike(savedLike != null ? savedLike: false) }}

    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    
    

    return (

        < Box
            bg={useColorModeValue("gray.200", "gray.700")}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="dark-lg"
            p={2}
            height={'fit-content'}
            overflowY={'auto'}
            overscrollY={'auto'}
        >
            <Box
                px={2}
            >
                <Box
                    py={1}
                    my={2}
                    background={useColorModeValue('gray.300', 'gray.600')}
                    borderRadius={5}
                >
                    <Text
                        align="right"
                        p={1}
                        fontSize='md'
                        fontWeight={'bold'}
                        color={useColorModeValue('blackAlpha.500', 'gray.400')}
                    >
                        {item.date}
                    </Text>

                    <LazyLoadImage
                        src={(item.hdurl)? item.hdurl : item.url}
                        alt={item.title}
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
                        {item.title}
                    </Text>
                    <Spacer />
                    <Icon w={8} h={8} color={like ? 'red.400' : 'gray.500'} onClick={()=>{changeLikeStatus();}}>
                        <FontAwesomeIcon
                            size="sm"
                            icon={faHeart}
                            className="heart"
                            alt="Like/Unlike button"
                            
                        />
                    </Icon>
                </Stack>
                <Collapse  
                    in={show}
                    height={'full'} 
                    startingHeight={50} 
                    animateOpacity 
                >
                    {item.explanation}
                </Collapse>
                <Button height="full" size="sm" onClick={handleToggle} mt="1rem">
                    {show ? "Close" : "Expand"}
                </Button>
            </Box>
        </Box >
    )
}

export default Card;
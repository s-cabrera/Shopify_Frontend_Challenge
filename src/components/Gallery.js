//Imports
import { useState, useEffect } from 'react'

import Card from "./Card";

//Chakra UI
import {
    Grid,
    Flex,
    Text
} from "@chakra-ui/react"

//API KEY
const API_KEY = process.env.REACT_APP_API_KEY;

/*
Tester API
https://api.github.com/users/${search}/repos
*/

function Gallery(/*{search, setShow}*/) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=60`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    // setShow(false);
                    console.log(result)
                    console.log(localStorage)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    // setShow(false);
                }
            )
    }, [])

    if (error) {
        return <Text p={3}>Error: {error.message}</Text>;
    } else if (!isLoaded) {
        return <Text p={3}>Loading...</Text>;
    } else {
        return (
            <Flex justifyContent={"center"} py={5}>
                <Grid
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 2fr)"
                    }}
                    gap={{
                        base: 2,
                        md: 3,
                        lg: 5
                    }}
                    mx={4}
                    gridAutoFlow={'dense'}
                >
                    {/* <div> */}
                        {
                        items.length > 0 ? 
                        items.map(item => (
                            < Card key={`${item.title}_${item.date}`} item={item}/>
                        ))
                        : 
                        <Text fontSize={'2xl'}>No results found!</Text>
                        }
                    {/* </div> */}
                </Grid>
            </Flex>
        )
    }
}

export default Gallery;
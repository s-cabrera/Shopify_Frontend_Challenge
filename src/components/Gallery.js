//Imports
import { useState, useEffect } from 'react'

// import Card from "./Card";

//Chakra UI
import {
    Grid,
    Flex,
    Text
} from "@chakra-ui/react"

//API KEY
const API_KEY = process.env.REACT_APP_API_KEY;

function Gallery({search, setShow}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${search}/repos`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    setShow(false);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    setShow(false);
                }
            )
    }, [search, setShow])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Flex justifyContent={"center"} py={5}>
                <Grid
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)"
                    }}
                    gap={{
                        base: 2,
                        md: 3,
                        lg: 5
                    }}
                    mx={4}
                >
                    <ul>
                        {
                        items.length > 0 ? 
                        items.map(item => (
                            <li key={item.id}>
                                {item.name} {item.price}
                            </li>
                        ))
                        : 
                        <Text fontSize={'2xl'}>No results found!</Text>
                        }
                    </ul>
                </Grid>
            </Flex>
        )
    }
}

export default Gallery;
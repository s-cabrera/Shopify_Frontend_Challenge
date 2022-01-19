//Imports
import Card from "./Card";

//Chakra UI
import {
    Grid,
    Flex,
} from "@chakra-ui/react"

function Gallery() {
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
                <Card/>
            </Grid>
        </Flex>
    )
}

export default Gallery;
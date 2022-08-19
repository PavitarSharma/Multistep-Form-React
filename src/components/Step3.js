import React, { useRef } from 'react'
import { Stack, Button, Typography, Box } from "@mui/material"

import { FaUserAlt, FaUserFriends } from "react-icons/fa"

const Step3 = ({ title, subTitle, handleNext }) => {

    const cardOne = useRef(null);
    const cardTwo = useRef(null);
    const mouseOverOpacityForCardOne = (e) => {
        cardOne.current.style.border = "1px solid blue";

    }

    const mouseOutOpacityForCardOne = (e) => {
        cardTwo.current.style.border = "0";

    }

    const mouseOverOpacityForCardTwo = (e) => {
        cardTwo.current.style.border = "1px solid blue";

    }

    const mouseOutOpacityForCardTwo = (e) => {
        cardOne.current.style.border = "0";

    }
    return (
        <>
            <Stack direction="column" textAlign="center" gap="10px" margin="4rem 0">
                <Typography variant="h4">{title}</Typography>
                <Typography variant="p">{subTitle}</Typography>
            </Stack>
            <Stack direction="row" gap="26px">
                <Button ref={cardOne} onClick={mouseOverOpacityForCardOne} onMouseLeave={mouseOutOpacityForCardOne} sx={{ maxWidth: 245, height: "300px", cursor: "pointer" }} p="2rem">
                    <Stack gap="0.5rem">

                        <Box sx={{ width: '100%' }}> <FaUserAlt /></Box>
                        <Typography sx={{ textTransform: "capitalize" }} gutterBottom variant="h6" component="div">
                            For myself
                        </Typography>
                        <Typography sx={{ textTransform: "capitalize" }} variant="body2" color="text.secondary">
                            With better. Think more clearly. Stay organized
                        </Typography>
                    </Stack>

                </Button>
                <Button ref={cardTwo} onClick={mouseOverOpacityForCardTwo} onMouseLeave={mouseOutOpacityForCardTwo} sx={{ maxWidth: 245, cursor: "pointer" }} p="2rem">

                    <Stack gap="0.5rem">
                        <Box sx={{ width: '100%' }}> <FaUserFriends /></Box>
                        <Typography sx={{ textTransform: "capitalize" }} gutterBottom variant="h6" component="div">
                            With my team
                        </Typography>
                        <Typography sx={{ textTransform: "capitalize" }} variant="body2" color="text.secondary">
                            Wikis, docs, tasks & projects, all in one place.
                        </Typography>
                    </Stack>

                </Button>

            </Stack>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <Button variant="contained" sx={{ backgroundColor: 'blue', color: "#fff", p: "0.8rem 1rem", borderRadius: "8px" }} onClick={handleNext}>
                    Create Workspace
                </Button>
            </Box>
        </>
    )
}

export default Step3
import React from 'react'
import { Box, Button, Stack, TextField, Typography } from "@mui/material"

const Step1 = ({ title, subTitle, data, handleChange, handleNext }) => {
    return (
        <>
            <Stack direction="column" textAlign="center" gap="10px" margin="4rem 0">
                <Typography variant="h4">{title}</Typography>
                <Typography variant="p">{subTitle}</Typography>
            </Stack>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Stack >
                    <label>Full Name</label>
                    <TextField
                        height="76px"
                        name="fullName"

                        value={data.fullName}
                        onChange={handleChange}
                        placeholder="Steve Jobs"
                        type="text"
                        sx={{
                            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
                            width: { lg: "800px", xs: "350px" },
                            height: "76px",
                            backgroundColor: "#fff",
                            borderRadius: "40px"
                        }}
                    />

                </Stack>

                <Stack>
                    <label>Display Name</label>
                    <TextField
                        height="76px"
                        name="displayName"

                        value={data.displayName}
                        onChange={handleChange}
                        placeholder="Steve"
                        type="text"
                        sx={{
                            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
                            width: { lg: "800px", xs: "350px" },
                            height: "76px",
                            backgroundColor: "#fff",
                            borderRadius: "40px"
                        }}
                    />

                </Stack>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                    <Button variant="contained" sx={{ backgroundColor: 'blue', color: "#fff", p: "0.8rem 1rem", borderRadius: "8px" }} onClick={handleNext}>
                        Create Workspace
                    </Button>
                </Box>

            </Box>
        </>
    )
}

export default Step1
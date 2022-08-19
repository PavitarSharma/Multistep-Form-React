import React from 'react'
import { Box, Stack, Button, TextField, Typography } from "@mui/material"

const Step2 = ({subTitle,title, data, handleChange, handleNext }) => {
    return (
        <>
            <Stack direction="column" textAlign="center" gap="10px" margin="4rem 0">
                <Typography variant="h4">{title}</Typography>
                <Typography variant="p">{subTitle}</Typography>
            </Stack>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Stack >
                    <label>Workspace Name</label>

                    <TextField
                        height="76px"
                        name="workspaceName"
                        value={data.workspaceName}
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
                    <label>Workspace Url <span>(optional)</span></label>
                    <Box direction="row">

                        <TextField
                            height="76px"
                            name="workspaceUrl"
                            value={data.workspaceUrl}
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
                    </Box>
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

export default Step2
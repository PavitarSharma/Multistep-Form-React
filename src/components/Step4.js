import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Stack, Button, Typography } from "@mui/material"

const Step4 = ({ data, handleNext }) => {
  return (
    <>
      <Box>
        <Stack direction="column" textAlign="center" gap="10px" sx={{ alignItems: 'center', justifyContent: 'center' }} margin="4rem 0">
          <CheckCircleIcon className="check__button"/>
          <Typography variant="h4">Congratulations, {data.fullName}</Typography>
          <Typography variant="p">You have completed onboarding, you can start using the Eden!</Typography>
        </Stack>

      </Box>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <Button variant="contained" sx={{ backgroundColor: 'blue', color: "#fff", p: "0.8rem 1rem", borderRadius: "8px" }} onClick={handleNext}>
          Launch Eden
        </Button>
      </Box>
    </>
  )
}

export default Step4
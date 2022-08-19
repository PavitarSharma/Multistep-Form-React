import React, { useState } from 'react'
import SpaIcon from '@mui/icons-material/Spa'
import { Box, Stepper, Step, StepLabel, Typography } from '@mui/material'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const steps = ['Step1', 'Step2', 'Step3', "Confirmation"];
const Form = () => {


    const [activeStep, setActiveStep] = useState(0);
    
    const [data, setData] = useState({
        fullName: "",
        displayName: "",
        workspaceName: "",
        workspaceUrl: "",
    })

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleSubmit = (e) => {

        e.preventDefault()

    }

    const handleChange = (event) => {
        setData((prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        })))
    }



    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Step1
                        data={data}
                        handleChange={handleChange}
                        handleNext={handleNext}
                        title="Welcome! First things first..."
                        subTitle="You can always change them laster"
                    />
                )
            case 1:
                return (
                    <Step2
                        data={data}
                        handleChange={handleChange}
                        handleNext={handleNext}
                        title="Let's set up a home for all your work"
                        subTitle="You can always change them laster"
                    />
                )
            case 2:
                return (
                    <Step3
                        handleNext={handleNext}
                        title="How are yoy planning to use Eden?"
                        subTitle="We'll streamine your setup experience accordingly"

                    />
                )

            default: return (
                <Step4
                    data={data}
                />
            )
        }
    }



    return (
        <>

            <Box sx={{ width: '100%', display: 'flex', gap:"1rem", flexDirection: "column", justifyContent: 'center', alignItems: 'center', height: "100vh" }}>
                <Typography variant="h5" sx={{display: "flex", alignItems: 'center', gap: "0.2rem", marginBottom: "2rem", fontWeight: "bold"}}><SpaIcon className="icon" /> Eden</Typography>
                <Box sx={{ width: '60%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {

                            return (
                                <Step key={label} >
                                    <StepLabel></StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>


                    <form style={{ position: "relative" }} onSubmit={handleSubmit}>
                        <Box my={2} sx={{ minHeight: "25vh" }}>
                            {getStepContent(activeStep)}
                        </Box>
                    </form>

                </Box>
            </Box>
        </>

    )
}

export default Form
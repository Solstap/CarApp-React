
import Button from '@mui/material/Button';
import React, { useContext, useEffect } from 'react';
import Typography from '@mui/material/Typography';

import { CarsContext } from "../components/context/car.context";
import { UIContext } from "./../components/context/UI.context";

import CarsList from "../components/CarsList";

function CarsListPage() {

    const { cars, fetchCars, deleteCar } = useContext(CarsContext)
    const { showMessage } = useContext(UIContext)

    useEffect(() => {
        fetchCars();
    }, [fetchCars])


    const deleteHandler = (id) => {
        deleteCar(id)
    }
    return (
        <>
            <Typography variant="h3" component="h2">
                Cool Cars
            </Typography>
            <Button 
            
            onClick={() => showMessage(
                {
                    type: 'warning',
                    string: "This is a warning",
                }
            )}
            > SHOW MESSAGE
            </Button>
            <CarsList cars={cars} deleteHandler={deleteHandler} />
        </>

    )
}

export default CarsListPage;


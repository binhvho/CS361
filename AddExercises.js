import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function AddExercises() {
    


    return (
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        <h2>List of Exercises</h2>
        <Table striped bordered hover variant="dark" size="sm">

        <thead>
        <tr>
            <th> Exercise </th>
            <th> Sets </th>
            <th> Rest Interval (minutes)</th>
            <th> Delete </th>
        </tr>
        </thead>


        <tbody>


        <tr>
            <td> Example exercise </td>
            <td> 5 </td>
            <td> 3 </td>
            <td><Button size="sm"> Delete </Button></td>
        </tr>


        </tbody>
        </Table>



        <div>
            <h2>Add Exercise</h2>
            <input
                type="text"
                placeholder="Enter name here"   
                />
            <input
                type="number"
                placeholder="Enter sets here"
                />
            <input
                type="number"
                placeholder="Enter rest interval here"

                />
            <Button

            >Add</Button>
        </div>
        <p style={{fontSize: "20px"}}>Note, rest intervals will create an additional countdown timer between sets to ensure proper resting intervals!</p>
        <br></br>
        <div>
        <Button size="lg" href="/timer">Create Timer</Button>
        </div>
        </>
    );
}

export default AddExercises
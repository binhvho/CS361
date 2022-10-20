import React from 'react';
import Button from 'react-bootstrap/Button';

function Timer() {
    
    window.onbeforeunload = function(){
        return 'Are you sure you want to leave?';
      };

    return (
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

        <h2>Total Time</h2>
        <p>0:00</p>
        <br></br>
        <h2>Rest Remaining</h2>
        <p>0:00</p>
        <br></br>

        <Button size="lg">Start</Button>
        <Button size="lg">Pause</Button>
        <Button size="lg">Rest</Button>
        <br></br>
        <br></br>
        <Button size="lg" href="/add-exercises">Return to Exercises</Button>
        
        


        </>
    );
}

export default Timer
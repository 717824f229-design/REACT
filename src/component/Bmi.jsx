import React from 'react'
import { useState } from 'react'
import underweight from '../assets/underweight.png'
import healthy from '../assets/healthy.png'
import overweight from '../assets/overweight.png'
import obese from '../assets/obese.png'

function Bmi() {
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState();
    
    // Kept your initial state as 'user'
    const [page, setPage] = useState('user');

    const handleCalculate = () => {
        const calculatedBmi = weight / ((height / 100) * (height / 100));
        setBmi(calculatedBmi);
        setPage('result');
    };

    const handleGoBack = () => {
        setBmi(undefined);
        
        setPage('user'); 
    };
    
  return (
    <div>
     
        {page === 'user' && (
            <div>
                <h2>BMI Calculator</h2>
                <p>Enter your weight (kg):</p>
                <input type='number' placeholder='weight' onChange={(e)=>setWeight(parseFloat(e.target.value) || 0)}/><br></br>
                
                <p>Enter your height (cm):</p>
                <input type='number' placeholder='height' onChange={(e)=>setHeight(parseFloat(e.target.value) || 0)}/><br></br>
                
                {weight > 0 && height > 0 ? (
                  <button onClick={handleCalculate}>Calculate BMI</button>
                ) : (
                  <h3>Please enter valid weight and height values.</h3>
                )}
            </div>
        )}

       
        {page === 'result' && (
            <div>
                <h3>Your BMI: {bmi.toFixed(2)}</h3>
                
                {bmi < 18.5 ? (
                    <div>
                        <h2>Underweight</h2>
                        <img src={underweight} alt="Underweight"/>
                    </div>
                ) : bmi >= 18.5 && bmi <= 24.9 ? (
                    <div>
                        <h2>Healthyweight</h2>
                        <img src={healthy} alt="Healthyweight"/>
                    </div>
                ) : bmi >= 25 && bmi <= 29.9 ? (
                    <div>
                        <h2>Overweight</h2>
                        <img src={overweight} alt="Overweight"/>
                    </div>
                ) : (
                    <div>
                        <h2>Obese</h2>
                        <img src={obese} alt="Obese"/>
                    </div>
                )}
                
                <br />
                <button onClick={handleGoBack}>Calculate Again</button>
            </div>
        )}
    </div>
  )
}

export default Bmi

import React from 'react'
import { useState } from 'react'

function bmi() {
    const [height, setHeight] = useState<number>(0)
    const [weight, setWeight] = useState<number>(0)

    const [bmi, setBmi] = useState<number>(0)

    const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault()
        setWeight(parseFloat(e.target.value))
        console.log("weight:", e.target.value)
    }

    const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault()
        setHeight(parseFloat(e.target.value))
        console.log("height:", e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const bmi = weight / (height /100) **2          
        setBmi(bmi)
        console.log("BMI:", bmi)

    }

    return (
        <>
          <div>This is BMI page</div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="weight">weight:</label>
            <input
              type="float"
              id="weight"
              name="weight"
              value={weight}
              onChange={handleWeight}
              required
            />
            <br />
            <label htmlFor="height">height:</label>
            <input
              type="float"
              id="height"
              name="height"
              value={height}
              onChange={handleHeight}
              required
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </>
      )
  
}

export default bmi
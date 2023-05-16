import React, { useState, useEffect } from "react"

const Breath = () => {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % 4)
    }, 4000) // Change interval as needed
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="breath-field border">
      <div className="circle"></div>
      <p>
        {step === 0 && "Inhale..."}
        {step === 1 && "Hold..."}
        {step === 2 && "Exhale..."}
        {step === 3 && "Hold..."}
      </p>
    </div>
  )
}

export default Breath

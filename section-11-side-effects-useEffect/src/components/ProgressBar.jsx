import {useEffect, useState} from "react";

const TIMER = 3000;

export default function ProgressBar() {
  console.log('ProgressBar RENDER');
  const [remainingTime, setRemainingTime] = useState(TIMER);
  
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('INTERVAL');
      setRemainingTime(prevTime => prevTime-10);
    }, 10)
    
    return () => {
      clearInterval(timer);
    }
  },[])
  
  return <progress value={remainingTime} max={TIMER} />
}
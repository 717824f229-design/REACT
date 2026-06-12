import React,{useState,useEffect } from 'react'

function CricketScore() {
  const [runs, setRuns] = useState(0);
  const [overs, setOvers] = useState(0);
  const [wickets, setWickets]= useState(0);
const [matchStatus, setMatchStatus]= useState("Match is Live")
useEffect(()=>{
    const intervalId= setInterval(() => {
        setRuns(prevRuns => prevRuns + Math.floor(Math.random() * 7));
        if(Math.random()>0.8){
            setWickets((prevWickets)=>prevWickets+1);
        }
       setOvers((prevOvers) => {
  const nextVal = (Number(prevOvers) + 0.1).toFixed(1);
  return nextVal.endsWith('.6') ? (Math.floor(nextVal) + 1.0).toFixed(1) : nextVal;
});

    }, 2000);
const timeoutId=setTimeout(()=>{
    clearInterval(intervalId);
    setMatchStatus("Match Finished!");
},16000);
return()=>{
    clearInterval(intervalId);
    clearTimeout(timeoutId);
};
}, []);

  return (
    <div>
        <h1>🏏Cricket Score Update</h1>
        <h2>Status:{matchStatus}</h2>
        <div>
        <h2>India vs Australia</h2>
        <h3>Runs: {runs} | Overs: {overs} | Wickets: {wickets}</h3>
        </div>
    </div>
  )
}

export default CricketScore

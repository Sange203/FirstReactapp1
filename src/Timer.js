 import {useEffect, useRef, useState} from "react";

 function Timer(){

    const[time,setTime]=useState(0)
    const[running,setRunning]=useState(true)

    const timer=useRef()

    useEffect(()=>{
        if(running){
            timer.current=setInterval(()=>{
                setTime(pre=>pre+1)
            },1000)
        }
        return ()=>clearInterval(timer.current)
    },[running])

    return(
      

        <div className="stopwatch">
            <p className="timer">{format(time)}</p>
            <div className="actions">
                <button style={{marginRight: '10px'}}  onClick={()=> setTime(0)}>Restart</button >
                <button onClick={()=>{
                    if(running) clearInterval(this.timer.current)
                    setRunning(!running)
                }}>{running ? 'Stop': 'Resume'}</button>
            </div>
        </div>
    )
}


const format = (time)=>{
    let hours=Math.floor(time/60/60%24)
    let mintues=Math.floor(time/60%60)
    let seconds=Math.floor(time%60)

    hours=hours<10 ?'0'+hours : hours
    mintues=mintues<10 ?'0'+mintues : mintues
    seconds=seconds<10 ?'0'+seconds : seconds

    return hours+ ": "+mintues+":"+seconds
}
export default Timer;
import { useState } from "react";

function useCounter({ initialValue = 0, interval = 1}) {
    const [counter, setCounter] =useState(initialValue)
    

    function handleCounterInc() {
        setCounter((prevCount) => prevCount + interval)
    }

    function handleCounterDec() {
        setCounter((prevCount) => prevCount - interval)
    }
    
    function handleCounterReset () {
        setCounter(initialValue)
    }

    return {
        counter: counter,
        onInc: handleCounterInc,
        onDec: handleCounterDec,
        onReset: handleCounterReset,   
    }
};

export default useCounter;
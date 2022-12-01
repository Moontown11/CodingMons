import React from 'react';
import axios from 'axios';

const test=()=>{
    const dbtest=async()=>{
        alert("Test!!");
        const result=await axios.get('/test_body')
        console.log(result)
    }

    return (
        <div>
            <h1>MySQL연결 테스트</h1>
            <button onClick={dbtest}>test버튼</button>
        </div>
    )
}
export default test;
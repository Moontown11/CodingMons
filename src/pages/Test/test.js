import React from 'react';
import axios from 'axios';

const test=()=>{
    const dbtest=()=>{
        alert("Test!!");
        axios.get('/test_body');
    }

    return (
        <div>
            <h1>MySQL연결 테스트</h1>
            <button onClick={dbtest}>test버튼</button>
        </div>
    )
}
export default test;
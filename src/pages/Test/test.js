import React from 'react';
import axios from 'axios';
import SelectBox from "../../components/SelectBox/SelectBox";

const OPTIONS = [
    { value: "option1", name : "행정동_A"  },
    { value: "option2", name : "행정동_B"  },
    { value: "option3", name : "행정동_C"  },
  ];

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
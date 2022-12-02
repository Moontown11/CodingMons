import React, { useEffect } from 'react';
import {useState} from 'react';
import './Collapse.css'
import SelectBox from '../SelectBox/SelectBox';
import axios from 'axios';

const [place_name, set_place] = useState([{place: ""}])

useEffect(async() => {
  try{
  // 데이터를 받아오는 동안 시간이 소요됨으로 await 로 대기
    const res = await axios.get('/cafe_info')
    // 받아온 데이터로 다음 작업을 진행하기 위해 await 로 대기
    // 받아온 데이터를 map 해주어 rowData 별로 _inputData 선언
    const _place_name = await res.data.map((rowData) => ({
            place: rowData.중심장소
          })
    )
    // 선언된 _inputData 를 최초 선언한 inputData 에 concat 으로 추가
    set_place(place_name.concat(_place_name))
  } catch(e){
    console.error(e.message)
  }
},[])

// const OPTIONS = [
//   { value: "option1", name : "행정동_A"  },
//   { value: "option2", name : "행정동_B"  },
//   { value: "option3", name : "행정동_C"  },
// ];

const Search = (props) => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <button onClick={toggle} className="content">{props.label}</button>
      {open && (
        <div className="collapse">
          <div className="selectBox"><SelectBox options={place_name} defaultValue="행정동_A" /></div>
          <div className={open ? "content-show" : "content-parent"} >
            <h2>구역별 정보1</h2>
            <h6>여기에 db내용 가져오기</h6>
            <hr />
              
            <h2>구역별 정보2</h2>
            <h6>여기에 db내용 가져오기</h6>
          </div>
        </div>
      )}
    </div>
  );
}



{/*const [visible, setVisible] = useState(false)
  return (  
  <>
    <CButton className="mb-3" onClick={() => setVisible(!visible)} aria-expanded={visible} aria-controls="collapseWidthExample">Button</CButton>
    <div style={{ minHeight: '120px'}}>
      <CCollapse id="collapseWidthExample" horizontal visible={visible}>
        <CCard style={{width: '300px'}}>
          <CCardBody>
            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
          </CCardBody>
        </CCard>
      </CCollapse>
    </div>
  </>
)*/}

const data = [
{

},
{

}

]

export default Search;
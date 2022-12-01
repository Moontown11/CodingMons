import React from 'react';
import {useState} from 'react';


const Search = (props) => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };
  
  return (
    <div>
      <button onClick={toggle}>{props.label}</button>
      {open && (
        <div className="toggle">
          <h4>구역별 정보1</h4>
          <h6>여기에 db내용 가져오기</h6>
          <hr />
            
          <h4>구역별 정보2</h4>
          <h6>여기에 db내용 가져오기</h6>
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
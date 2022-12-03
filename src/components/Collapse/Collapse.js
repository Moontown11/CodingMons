import React, { useEffect, useState, Component } from 'react';
import './Collapse.css'
import axios from 'axios';


function Search(props) {
  const [open, setOPen] = useState(false);
  
  //db에서 받아온 장소
  const [placeArr, setPlace] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const toggle = () => {
    setOPen(!open);
  };

  const getDetail = () => {


  }

  const getCafes = () => {

  }

  const fetchPlace = async () => {
    try {
      // 요청 처음에 초기화
      setError(null);
      setPlace([]);
      // loading 상태 true
      setLoading(true);

      const response = await axios.get('/cafe_info');
      setPlace(response.data);
      console.log('fetch Place');
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPlace();
  }, []);

  const [selectedPlace, setSelectedPlace] = useState(null);
  const Places = placeArr.map(place => place.중심장소);
  const selectPlace = (e) => {
    setSelectedPlace(e.target.value);
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <button onClick={toggle} className="content">{props.label}</button>
      {open && (
        <div className="collapse">
          <label>장소: </label>
          <select className="place-select" defaultValue="default" onClick={selectPlace}>
            <option value="default" disabled>
              Choose a Place ...
            </option>
            {[...new Set(Places)].map((mainPlace, key) => (
              <option value={mainPlace} key={key}>{mainPlace}</option>
            ))}
          </select>

          
          <button onClick={() => {
            getDetail()
            getCafes()
          }} className="searchButton"> 검색 </button>
          
          <br></br>
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


export default Search;
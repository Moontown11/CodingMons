import React, { useEffect, useRef } from "react";
import {useState} from 'react';
import axios from 'axios';
import './MapStyle.css'

const Map = () => {
  
  const mapElement = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const [selectedPlace, setSelectedPlace] = useState(null);
  const Places = placeArr.map(place => place.중심장소);
  const selectPlace = (e) => {
    setSelectedPlace(e.target.value);
  }
  
  useEffect(() => {
    const { naver } = window;
    fetchPlace();

    if (!mapElement.current || !naver) return;
    
    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.5656, 126.9769); //추후에 유저의 현재위치 기반으로 바꾸던가 함
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    
    {/*new naver.maps.Marker({
      position: location,
      map,
    });*/}
  }, []);


  return(
    <div className="MapScreen" style={{ display: 'flex', flexDirection: 'row'}}>
      <div ref={mapElement} style={{minWidth: '1200px', minHeight: '700px'}} /> 
      <div className="description" style={{ display: 'flex', flexDirection: 'row'}}>
        <button onClick={toggle} className="content">▶</button>
        {open && (
          <div className="collapse">
            <label>장소: </label>
            <select className="place-select" defaultValue="default" onClick={selectPlace}>
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
    </div>
  );
};

export default Map;
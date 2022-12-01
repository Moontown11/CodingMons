import React, { useEffect, useRef } from "react";
import {useState} from 'react';

const Map = () => {
  
  const mapElement = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const { naver } = window;
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
    
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);


  return( 
    <div ref={mapElement} style={{minWidth: '1200px', minHeight: '700px'}} />
  );
};

export default Map;
import React, { useEffect, useRef } from "react";
import { useState } from 'react';
import axios from 'axios';
import './MapStyle.css'


const Map = () => {

  const mapElement = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [detail, setDetail] = useState([]);

  const [open, setOPen] = useState(false);

  //db에서 받아온 정보
  const [placeArr, setPlace] = useState([]);//cafe_info
  const [gatherArr, setGather] = useState([]);//gather_info
  const [officeArr, setOffice] = useState([]);//office_info
  const [storeArr, setStore] = useState([]);//store_2030_info
  const [livingArr, setLiving] = useState([]);//living_info

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tempdong, settempDong] = useState([]);

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedDong, setSelectedDong] = useState(null);
  const [dongOption, setdongOption] = useState('');


  const tempMain = placeArr.map(place => place.중심장소); //중심장소
  const tempSub = placeArr.map(place => [place.중심장소, place.행정동]); // 중심장소별 행정동
  const tempCafes = placeArr.map(place => [place.행정동, place.주소, place.카페명, place.카페타입, place.별점]) //행정동별 카페
  const tempGather = gatherArr.map(dong => [dong.행정동명, dong.기준_년_코드, dong.집객시설_수]);
  const tempOffice = officeArr.map(dong => [dong.행정동명, dong.기준_년_코드, dong.총_직장_인구_수, dong.남성_직장_인구_수, dong.여성_직장_인구_수]);
  const tempStore = storeArr.map(dong => [dong.행정동명, dong.기준_년_코드, dong.점포_수]);
  const tempLiving = livingArr.map(dong => [dong.행정동명, dong.기준_년_코드, dong.남자_20대, dong.남자_30대, dong.여자_20대, dong.여자_30대]);

  //지도 위치 동적 변경
  const [{ lat, lng }, setGeometricData] = useState({
    lat: 37.5656,
    lng: 126.9769,
  });

  //const [locSet, setLocSet] = useState({
  //   lat,lng
  // });

  const [Markers,setMarkers] = useState([lat, lng]);

  const [gatherSum, setGatherSum] = useState(0);
  const [officeSum_total, setOfficeSum_total] = useState(0);
  const [officeSum_man, setOfficeSum_man] = useState(0);
  const [officeSum_woman, setOfficeSum_woman] = useState(0);
  const [storeSum, setStoreSum] = useState(0);
  var locStr = useState('');

  const Places = tempMain.filter((v, i) => tempMain.indexOf(v) === i); // 중심장소 중복제거
  const SubPlaces = tempSub.filter((element, index) => { //행정동 중복제거
    return (
      tempSub.findIndex(
        (item) => item[0] === element[0] && item[1] === element[1]
      ) === index
    );
  });

  const changeStr = () => {
    locStr = selectedDong.toString();

    return locStr
  }

  const toggle = () => {
    setOPen(!open);
  };

  const fetchDB = async () => {
    try {
      // 요청 처음에 초기화
      setError(null);
      setPlace([]);
      setGather([]);
      setOffice([]);
      setStore([]);
      setLiving([]);
      // loading 상태 true
      setLoading(true);

      const response1 = await axios.get('/cafe_info');
      setPlace(response1.data);
      console.log('fetch database');

      const response2 = await axios.get('/gather_info');
      setGather(response2.data);
      console.log('fetch gather');

      const response3 = await axios.get('/office_info');
      setOffice(response3.data);
      console.log('fetch office');

      const response4 = await axios.get('/store_2030_info');
      setStore(response4.data);
      console.log('fetch store');

      // const response5 = await axios.get('/living_info');
      // setLiving(response5.data);
      // console.log('fetch living');


    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  //구역별 정보 조회
  const getDetail = () => {
    var temp1 = tempGather.filter(name => name[0] === selectedDong && name[1] === 2022)
    var temp2 = tempOffice.filter(name => name[0] === selectedDong && name[1] === 2022)
    var temp3 = tempStore.filter(name => name[0] === selectedDong && name[1] === 2022)
    var temp4 = tempLiving.filter(name => name[0] === selectedDong && name[1] === 2022)

    var temp = [temp1, temp2, temp3, temp4]

    var sum = 0;
    temp1.map(name => sum += name[2])
    setGatherSum(sum)

    sum = 0;
    temp2.map(name => sum += name[2])
    setOfficeSum_total(sum)

    sum = 0;
    temp2.map(name => sum += name[3])
    setOfficeSum_man(sum)

    sum = 0;
    temp2.map(name => sum += name[4])
    setOfficeSum_woman(sum)

    sum = 0;
    temp3.map(name => sum += name[2])
    setStoreSum(sum)
    //console.log(temp);

    setDetail(temp);
  }

  //맵 위치 변경
  const setLoc = (address) => {
    naver.maps.Service.geocode(
      {
        query: address,
      },
      function (status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
          if (!address) {
            return alert('Geocode Error, Please check address');
          }
          return alert('Geocode Error, address:' + address);
        }

        if (response.v2.meta.totalCount === 0) {
          return alert('No result.');
        }

        let item = response.v2.addresses[0];
        setGeometricData({
          lng: item.x,
          lat: item.y,
        });
      },
    );
  };


  const selectPlace = (e) => {
    setSelectedPlace(e.target.value);
    const temp = SubPlaces.filter(name => name[0] == e.target.value)
    setdongOption(temp.map(name => name[1]));
  }

  const selectDong = (e) => {
    setSelectedDong(e.target.value);
  }

  //카페 위치 찾기
  const getCafeLoc = () => {
    var temp = tempCafes.filter(name => name[0] === selectedDong) // 카페들 정보 배열
    var temploc = temp.map(name => name[1].toString()) // 카페들 주소 배열
    var temploc2 = [];

    console.log(temploc)
    // temploc.map(name => getCafeLoc2(name))
    for(var i = 0; i<temploc.length; i++){
      temploc2[i] = getCafeLoc2(temploc[i])
    }
    console.log(temploc2);



  }

  const getCafeLoc2 = (address) => {
    naver.maps.Service.geocode(
      {
        query: address,
      },

      function (status, response) {
        console.log(address)
        if (status === naver.maps.Service.Status.ERROR) {
          if (!address) {
            return alert('Geocode Error, Please check address');
          }
          return alert('Geocode Error, address:' + address);
        }

        if (response.v2.meta.totalCount === 0) {
          return alert('No result.');
        }

        let item = response.v2.addresses[0];
        var temp = { lat: item.y, lng: item.x }

        return temp;
        // console.log(temp)
        //setMarkers([...Markers, temp])
        // Markers.concat(temp)
      },
    );

  }


  //구역별 카페 조회
  const getCafes = () => {

  }
  console.log(selectedDong)

  //DB fetch
  useEffect(() => {
    fetchDB();
  }, []);

  //Map Load
  useEffect(() => {

    const { naver } = window;

    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const mapOptions: naver.maps.MapOptions = {
      center: { lat: lat, lng: lng },
      zoom: 14,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    for (var i = 1, ii= Markers.length; i<ii; i++){
      console.log(i);
      new naver.maps.Marker({
        position: {lat: 37 + i/10, lng: 126 + i/10},
        map,
      })
      
    }
    console.log(Markers)

    // new naver.maps.Marker({
    //   position: { lat:37.5321534 , lng: 127.0756284 },
    //   map,
    // });

    new naver.maps.Marker({
    position: { lat: lat, lng: lng },
      map,
    });

    // var markerOptions = {
    //   position: new naver.maps.LatLng(Markers.lat, Markers.lng), //마커찍을 좌표
    //   map: map,
    //   icon: {
    //     url: '../../assets/img/mapmarker.png', //아이콘 경로
    //     size: new naver.maps.Size(22, 36), //아이콘 크기
    //     origin: new naver.maps.Point(0, 0),
    //     anchor: new naver.maps.Point(11, 35)
    //   }
    // };

    // var marker = new naver.maps.Marker(markerOptions);


  })


  return (
    <div className="MapScreen" style={{ display: 'flex', flexDirection: 'row' }}>
      <div ref={mapElement} style={{ minWidth: '1200px', minHeight: '700px' }} />
      <div className="description" style={{ display: 'flex', flexDirection: 'row' }}>
        {/*장소 선택*/}
        <button onClick={toggle} className="content">▶</button>
        {open && (
          <div className="collapse">
            <label>장소: </label>
            <select className="place-select" defaultValue="default" onChange={selectPlace}>
              <option value="">선택해주세요</option>
              {[...new Set(Places)].map((mainPlace, key) => (
                <option value={mainPlace} key={key}>{mainPlace}</option>
              ))}
            </select>
            <select id="dongselect" className="dong-select" defaultValue="default" onChange={selectDong}>
              <option value="">선택해주세요</option>
              {[...new Set(dongOption)].map((dongOption, key) => (
                <option value={dongOption} key={key}>{dongOption}</option>
              ))}
            </select>

            {/* 검색시 구역별 정보 가져오기*/}
            <button value={dongOption} onClick={() => {
              getDetail()
              setLoc(changeStr())
              getCafes()
              getCafeLoc()
            }} className="searchButton"> 검색 </button>

            <br></br>
            <div className={open ? "content-show" : "content-parent"} >
              <h2>집객 시설 수</h2>
              <h4>2022년 평균 : {gatherSum / 2}개</h4>
              <hr />

              <h2>점포수</h2>
              <h4>2022년 평균 : {storeSum / 2}개</h4>
              <hr />

              <h2>직장 인구수</h2>
              <h4>2022년 평균 직장인구수(총): {officeSum_total / 2} 명</h4>
              <h4>2022년 평균 직장인구수(남성): {officeSum_man / 2} 명</h4>
              <h4>2022년 평균 직장인구수(여성): {officeSum_woman / 2} 명</h4>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
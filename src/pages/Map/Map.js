import React from "react";
import NaverMap from "./NaverMap";
import Collapse from "../../components/Collapse/Collapse";
import './MapStyle.css';

const Map = () => (
    <div className="MapScreen" style={{ display: 'flex', flexDirection: 'row', position:"relative" }}>
        <NaverMap />
        <div className="description">
            <Collapse label = "▶"/>
        </div>
        
    </div>
);

export default Map;
import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";


export const NaverAPIMap = (props) => {
  return (
    <RenderAfterNavermapsLoaded clientId={"FgofAAYs0k1eQz4zu4QST7wjJwUVZJihefHs5cZJ"}>
      <NaverMap
        id={"map"}
        mapDivId={"react-naver-map"} // default name
        style={{width: '100%', height: '400px'}}
        defaultCenter={this.state.center}
        defaultZoom={10}
      />
    </RenderAfterNavermapsLoaded>
  );
};

export default NaverAPIMap;
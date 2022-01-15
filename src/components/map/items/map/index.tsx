import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { SearchMapApi } from "../../../../lib/api/searchMapApi";
import { CompanyType } from "../../../../lib/interface/CompanyType";
import { MapListState, MapMarkerState } from "../../../../module/atom/map";
import { listdata } from "../list/List";

interface resType {
  x: string;
  y: string;
  location: string;
}

const Map = () => {
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert("현재위치를 알수 없습니다.");
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== "string") {
      const currentPosition = [myLocation.latitude, myLocation.longitude]; // 현재 내 위치 추척

      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });

      // 내 장소 위치
      const test = new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map: map,
        icon: {
          url: "w7.pngwing.com/pngs/731/25/png-transparent-location-icon-computer-icons-google-map-maker-marker-pen-cartodb-map-marker-heart-logo-color-thumbnail.png",
          size: new naver.maps.Size(33, 44),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(11, 35),
        },
      });

      listdata.map((item: CompanyType, idx: number) => {
        SearchMapApi(item.location).then((res: any) => {
          console.log(res);

          new naver.maps.Marker({
            position: new naver.maps.LatLng(res.y, res.x),
            map: map,
          });
        });
      });
    }
  }, [myLocation]);

  return <div id="map" style={{ width: "70%", height: "100vh" }} />;
};

export default Map;

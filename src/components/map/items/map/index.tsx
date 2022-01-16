import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { SearchMapApi } from "../../../../lib/api/searchMapApi";
import { CompanyType, MapListType } from "../../../../lib/interface/CompanyType";
import { MapListState } from "../../../../module/atom/map";

interface resType {
  x: string;
  y: string;
  location: string;
}

const Map = () => {
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >("");
  const [company, setCompany] = useRecoilState(MapListState);

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
      new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map: map,
        icon: {
          url: "/assets/marker.svg",
          size: new naver.maps.Size(33, 44),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(11, 35),
        },
      });

      new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map: map,
        icon: {
          content: [`<span class="my">현재 나의 위치</span>`].join(""),
          size: new naver.maps.Size(38, 58),
          anchor: new naver.maps.Point(19, 58),
        },
      });

      new naver.maps.Marker({
        position: new naver.maps.LatLng(127.0255319999996, 37.5744931999997),
        map: map,
        icon: {
          url: "/assets/marker.svg",
          size: new naver.maps.Size(33, 44),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(11, 35),
        },
      });

      new naver.maps.Marker({
        position: new naver.maps.LatLng(127.0255319999996, 37.5744931999997),
        map: map,
        icon: {
          content: [`<span class="ico">오누이</span>`].join(""),
          size: new naver.maps.Size(38, 58),
          anchor: new naver.maps.Point(19, 58),
        },
      });

      new naver.maps.Marker({
        position: new naver.maps.LatLng(126.5706052, 33.4507313),
        map: map,
        icon: {
          url: "/assets/marker.svg",
          size: new naver.maps.Size(33, 44),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(11, 35),
        },
      });

      new naver.maps.Marker({
        position: new naver.maps.LatLng(126.5706052, 33.4507313),
        map: map,
        icon: {
          content: [`<span class="ico">카카오 본사</span>`].join(""),
          size: new naver.maps.Size(38, 58),
          anchor: new naver.maps.Point(19, 58),
        },
      });

      company.map((item: MapListType, idx: number) => {
        SearchMapApi(item?.location).then((res: any) => {
          console.log(res);

          new naver.maps.Marker({
            position: new naver.maps.LatLng(res?.y, res?.x),
            map: map,
            icon: {
              url: "/assets/marker.svg",
              size: new naver.maps.Size(33, 44),
              origin: new naver.maps.Point(0, 0),
              anchor: new naver.maps.Point(11, 35),
            },
          });

          new naver.maps.Marker({
            position: new naver.maps.LatLng(res.y, res.x),
            map: map,
            icon: {
              content: [`<span class="ico">${item.title}</span>`].join(""),
              size: new naver.maps.Size(38, 58),
              anchor: new naver.maps.Point(19, 58),
            },
          });
        });
      });
    }
  }, [myLocation]);

  return <div id="map" style={{ width: "70%", height: "100vh" }} />;
};

export default Map;

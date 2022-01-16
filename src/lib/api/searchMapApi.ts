import axios from "axios";

export const SearchMapApi = async (query: string | undefined) => {
  try {
    const data = await axios(
      `https://map.naver.com/v5/api/search?caller=pcweb&query=${query}&type=all&searchCoord=127.0255319999996;37.5744931999997&page=1&displayCount=20&isPlaceRecommendationReplace=true&lang=ko`
    );

    return data?.data?.result?.address === null
      ? {
          x: data?.data?.result.place.list[0].x,
          y: data?.data?.result.place.list[0].y,
          location: data?.data?.result.place.list[0].address,
        }
      : {
          x: data?.data?.result.address.roadAddress.list[0].x,
          y: data?.data?.result.address.roadAddress.list[0].y,
          location:
            data?.data?.result.address.roadAddress.list[0]?.siteSearchQuery,
        };
  } catch (e) {
    console.log(e);
  }
};

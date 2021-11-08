import Option from "./option.js"
import MapView from "./map-view.js"

const mapContainer = document.querySelector(".map")
const currentButton = document.querySelector(".current-position");


function main() {

    const option = new Option();
    const mapView = new MapView(option);

    option.getCurrentPosition();
    // const options = { //지도를 생성할 때 필요한 기본 옵션
    //     center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    //     level: 3 //지도의 레벨(확대, 축소 정도)
    // };

    // let map = new kakao.maps.Map(mapContainer, options);

    // currentButton.addEventListener("click", (e) => {
    //     getCurrentPosition();
    // })

}


window.addEventListener('DOMContentLoaded', () => {
    main();
})



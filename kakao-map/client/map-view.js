export default class MapView {
    mapContainer = document.querySelector(".map");
    infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    map = "";

    constructor(option) {
        this.option = option;
        this.option.subscribe((options) => { this.updateMap(options) });
    }

    updateMap(options) {
        this.map = new kakao.maps.Map(this.mapContainer, options);

        const ps = new kakao.maps.services.Places(this.map);

        ps.categorySearch('FD6', (data, status, pagination) => { this.placesSearchCB(data, status, pagination) }, { useMapBounds: true });
        ps.categorySearch('CE7', (data, status, pagination) => { this.placesSearchCB(data, status, pagination) }, { useMapBounds: true });
    }

    placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
            for (var i = 0; i < data.length; i++) {
                this.displayMarker(data[i]);
            }
        }
    }

    displayMarker(place) {
        // 마커를 생성하고 지도에 표시합니다
        const marker = new kakao.maps.Marker({
            map: this.map,
            position: new kakao.maps.LatLng(place.y, place.x)
        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', () => {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            this.infowindow.setContent(`<div style="padding:5px;font-size:12px;"> ${place.place_name}  </div>`);
            this.infowindow.open(this.map, marker);
        });
    }
}
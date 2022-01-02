import Observable from "./observable.js";

export default class Option extends Observable {
  options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: "", //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };
  prePosition = { latitude: 0, longitude: 0 };

  constructor() {
    super();
  }

  getCurrentPosition() {
    // setTimeout(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.options.center = new kakao.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        console.log(this.options.center, position);

        this.prePosition.latitude = position.coords.latitude;
        this.prePosition.longitude = position.coords.longitude;
        this.notify(this.options);
      },
      (error) => {
        console.log(error, "잘못됐음");
      },
      { enableHighAccuracy: true, maximumAge: 0 }
    );
    // }, 500);
  }

  watchPosition() {
    const id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          "버튼클릭:",
          position.coords.latitude,
          position.coords.longitude
        );

        if (
          this.options.center.La === position.coords.longitude &&
          this.options.center.Ma === position.coords.latitude
        ) {
          navigator.geolocation.clearWatch(id);
          return;
        }

        this.options.center = new kakao.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        this.notify(this.options);
      },
      (error) => {
        console.log(error, "잘못됐음");
      },
      { enableHighAccuracy: true, maximumAge: 0 }
    );
  }
}

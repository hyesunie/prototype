import Observable from "./observable.js"

export default class Option extends Observable {
  options = { //지도를 생성할 때 필요한 기본 옵션
    center: "", //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
  };
  constructor() {
    super();
  }

  getCurrentPosition() {
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        this.options.center = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude)
        this.notify(this.options)
      });
    }, 200);
  }
}


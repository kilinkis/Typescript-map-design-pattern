export class CustomMap {
  private googleMap : google.maps.Map;

  constructor(div: string) {
    this.googleMap = new google.maps.Map(document.querySelector( div ), {
      zoom: 4,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }
}
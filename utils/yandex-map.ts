let myMap: any;

declare let ymaps: any;

const INIT_MAP_COORDINATES = [55.75, 37.62];

ymaps.ready(init);

function init() {
  myMap = new ymaps.Map("map", {
    center: INIT_MAP_COORDINATES,
    zoom: 13,
  });

  let myPlacemark: any;
  myMap.events.add("click", function (e: any) {
    let coords = e.get("coords");

    if (myPlacemark) {
      myPlacemark.geometry.setCoordinates(coords);
    } else {
      myPlacemark = createPlacemark(coords);
      myMap.geoObjects.add(myPlacemark);
      myPlacemark.events.add("dragend", function () {
        getAddress(myPlacemark.geometry.getCoordinates());
      });
    }
    getAddress(coords);
  });

  function createPlacemark(coords: number[]) {
    return new ymaps.Placemark(
      coords,
      {
        iconCaption: "поиск...",
      },
      {
        preset: "islands#greenDotIconWithCaption",
        draggable: true,
      }
    );
  }

  function getAddress(coords: number[]) {
    myPlacemark.properties.set("iconCaption", "поиск...");
    ymaps.geocode(coords).then(function (res: any) {
      var firstGeoObject = res.geoObjects.get(0);

      myPlacemark.properties.set({
        iconCaption: [
          firstGeoObject.getLocalities().length
            ? firstGeoObject.getLocalities()
            : firstGeoObject.getAdministrativeAreas(),
          firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
        ]
          .filter(Boolean)
          .join(", "),
        balloonContent: firstGeoObject.getAddressLine(),
      });
    });
  }
}

function markLocation() {
  console.log("start");
  ymaps.geocode("Уфа зорге 52").then(function (res: any) {
    const firstGeoObject = res.geoObjects.get(0);
    const bounds = firstGeoObject.properties.get("boundedBy");

    firstGeoObject.options.set("preset", "islands#darkBlueDotIconWithCaption");
    firstGeoObject.properties.set("iconCaption", firstGeoObject.getAddressLine());

    myMap.geoObjects.add(firstGeoObject);
    myMap.setBounds(bounds, {
      checkZoomRange: true,
    });
  });
}

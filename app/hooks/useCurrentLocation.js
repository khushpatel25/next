/** @format */

import { useState, useEffect } from "react";
import axios from "axios";

export default function useOnScreen(ref) {
  const [isServiceble, setIsServiceble] = useState(true);

  useEffect(() => {
    let availableCities = ["Zürich", "Bern", "Argau", "Basel Stadt"];
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      let apiKey = "AIzaSyAuecGLrVABPhJXc235NQ2smQpO1VUe2oY";
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat}%2C${long}&result_type=locality&key=${apiKey}`;
      axios.get(url).then((a) => {
        let city = a.data.results[0].address_components[0].long_name;
        let obj = {
          city: city,
          isServiceble: false,
        };
        if (availableCities.includes(city)) {
          obj.isServiceble = true;
        } else {
          obj.isServiceble = false;
        }
        setIsServiceble(obj);
      });
    });
  }, []);

  return isServiceble;
}

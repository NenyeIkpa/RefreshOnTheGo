import React, { useState, useContext, useEffect } from "react";
import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restauraunts.context";
import { MapCallout } from "../components/map-callout.component";
const Map = styled(MapView)`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;

export const MapScreen = ({ navigation }) => {
  const [latitudeDelta, setLatitudeDelta] = useState(0); //latitude Delta used to set zoom level on map
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);
  const { lat, lng, viewport } = location;
  console.log(viewport);

  useEffect(() => {
    const northEastLat = viewport.northeast.lat;
    const southWestLat = viewport.southwest.lat;
    const latDelta = northEastLat - southWestLat;
    setLatitudeDelta(latDelta);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latitudeDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetailScreen", {
                    restaurant: restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};

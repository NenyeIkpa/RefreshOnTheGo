import React from "react";
import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";

const MapWrapper = styled(MapView)`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;

export const MapScreen = () => {
  return (
    <>
      <Search />
      <MapWrapper />
    </>
  );
};

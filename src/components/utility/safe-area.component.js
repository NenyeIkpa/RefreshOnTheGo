import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px`}; /*if Statusbar.current height has  a value then add margin top */
`;

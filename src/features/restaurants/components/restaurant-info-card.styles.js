import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
  },
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  //background-color: purple;
`;

export const RowEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  //background-color: red;
`;

export const Rating = styled.View`
  flex: 1;
  flex-direction: row;
  padding-vertical: ${(props) => props.theme.space[1]};
  //background-color: blue;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

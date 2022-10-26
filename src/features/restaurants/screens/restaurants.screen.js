import React, { useState, useContext, useEffect } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { RestaurantsContext } from "../../../services/restaurants/restauraunts.context";

const SearchContainer = styled.View`
  padding-horizontal: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  console.log(masterDataSource);
  useEffect(() => {
    setFilteredDataSource(restaurants);
    setMasterDataSource(restaurants);
  }, [restaurants]);

  const searchFilterFunction = (query) => {
    // Check if searched text is not blank
    if (query) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter((item) => {
        const itemName = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const queryText = query.toUpperCase();
        return itemName.indexOf(queryText > -1);
      });
      setFilteredDataSource(newData);
      setSearchQuery(query);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearchQuery(query);
    }
  };

  return (
    <SafeArea>
      {isLoading && <ActivityIndicator size="large" top="50%" />}
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={(query) => searchFilterFunction(query)}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={filteredDataSource}
        renderItem={({ item }) => {
          // console.log(item);
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

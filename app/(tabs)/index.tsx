import { View } from 'react-native';
import React, { useMemo, useState } from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler' ;
import listingsData from '@/assets/data/airbnb-listings.json';
import ListingsMap from '@/components/ListingsMap';
import listingsDataGeo from '@/assets/data/airbnb-listings.geo.json';
import Listings from '@/components/Listings';
import { Stack } from 'expo-router';
import ExploreHeader from '@/components/ExploreHeader';
import ListingsBottomSheet from '@/components/ListingsBottomSheet';



/*const Page = () => {

  const items = useMemo(() => listingsData as any, []);
  //const getoItems = useMemo(() => listingsDataGeo, []);
  const [category, setCategory] = useState<string>('Tiny homes');
  const onDataChanged = (category: string) => {
    setCategory(category);
  } ;*/

  const Page = () => {
    const items = useMemo(() => listingsData as any, []);
    const getoItems = useMemo(() => listingsDataGeo, []);
    const [category, setCategory] = useState<string>('Tiny homes');
  
    const onDataChanged = (category: string) => {
      setCategory(category);
    };


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={{flex: 1, marginTop: 80}}>
      <Stack.Screen
       options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged}/>,
      }}/>
     {/* <Listings listings={items} category={category} />*/}
      <ListingsMap listings={getoItems} />
      <ListingsBottomSheet listings={items} category={category}/>
    </View>
    </GestureHandlerRootView>
  )
}

export default Page  
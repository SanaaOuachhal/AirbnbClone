import { ScrollView  } from 'react-native'
import React, { useState,useEffect  } from 'react'
import localStorageService from '../services/localStorage.service'
import { Listing } from '@/interfaces/listings'
import { useIsFocused  } from '@react-navigation/native';
import ListingItem from '@/components/ListingItem';
import { defaultStyles } from '@/constants/Styles';

const Page = () => {

  const [items,setItems] = useState<Listing[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
      if (isFocused) {
        localStorageService.getData('trips').then((itemsData: any) => {
          const listings: Listing[] = JSON.parse(itemsData);
          setItems(listings);
      })
    }
  }, [isFocused]);

  return (
    <ScrollView  style={defaultStyles.container}>
      {items.map(item => <ListingItem key={item.id} listing={item}></ListingItem>)}

    </ScrollView >
  )
}

export default Page;
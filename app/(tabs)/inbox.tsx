import { View, Button } from 'react-native'
import React from 'react'
import localStorageService from '../services/localStorage.service'
import Toast from 'react-native-simple-toast';

const Page = () => {

  const cleanCache =  ()=> {
      localStorageService.removeData('trips');
      Toast.show('Cache vidé !!', Toast.TOP);
  }

  return (
    <View>
      <Button title="Vider le cache" onPress={() => cleanCache()}/>
    </View>
  )
}

export default Page
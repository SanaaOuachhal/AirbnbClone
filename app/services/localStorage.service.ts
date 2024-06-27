import AsyncStorage from '@react-native-async-storage/async-storage';


export default{

     storeData : async (key: string, value: any) => {
        try {
          await AsyncStorage.setItem(key, value);
          console.log('Data stored successfully');
        } catch (error) {
          console.error('Failed to store data', error);
        }
      },
      
      removeData: (key : string) => {
        AsyncStorage.removeItem(key);
      },
    
     getData: async (key: string) => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          return value;
        }
      } catch (error) {
        console.error('Failed to retrieve data', error);
      }
    }
}
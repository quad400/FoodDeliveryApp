import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import {useFonts} from 'expo-font';
import { useNavigation } from '@react-navigation/native'



import * as SplashScreen from 'expo-splash-screen';
import Tabs from '../navigation/tabs';
import { FoodDetail, Search, SearchResult } from '../screens';


SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const App = () => {
        
    const [fontLoaded] = useFonts({
        PoppinsBlack: require('../assets/fonts/Poppins-ExtraBold.ttf'),
        PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
        PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
        PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
        PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
        PoppinsThin: require('../assets/fonts/Poppins-Thin.ttf'),
        PoppinsLight: require('../assets/fonts/Poppins-Light.ttf'),
    })
  
  const onLayoutRootView = useCallback(async ()=> {
    if (fontLoaded){
        await SplashScreen.hideAsync();
      }
  }, [fontLoaded])
  if (!fontLoaded) return null

  return (
          <Stack.Navigator onLayoutRootView={onLayoutRootView}>
              <Stack.Screen name="MainLayout" component={Tabs} />
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="SearchResult" component={SearchResult} />
              <Stack.Screen name="FoodDetail" component={FoodDetail} />
          </Stack.Navigator>
  )
}

export default App
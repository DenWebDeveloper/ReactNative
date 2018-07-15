import { createStackNavigator } from 'react-navigation';
import ListCardClothesScreen from './screen/ListCardClothesScreen'

const AppNavigator = createStackNavigator({
    Home: {
        screen: ListCardClothesScreen
    },
});


export default AppNavigator
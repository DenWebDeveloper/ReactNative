import { createStackNavigator } from 'react-navigation'
import ListCardClothesScreen from './screen/ListCardClothesScreen'
import ComparisonClothesScreen from './screen/ComparisonClothesScreen'

const AppNavigator = createStackNavigator({
    comparisonClothes: {
        screen: ComparisonClothesScreen
    },
    Home: {
        screen: ListCardClothesScreen
    }
});


export default AppNavigator
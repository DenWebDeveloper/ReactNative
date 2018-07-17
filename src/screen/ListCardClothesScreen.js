import React, {Component} from 'react'
import {ScrollView,StyleSheet} from 'react-native'
import NavigationBarLayout from '../components/NavigationBarLayout'
import ClothesCards from '../components/ClothesCards'

class ListCardClothesScreen extends Component {
    static navigationOptions = {
        headerTitle: <NavigationBarLayout title='Список'/>,
    };

    render() {
        return (
            <ScrollView  contentContainerStyle={styles.container}>
                <ClothesCards/>
                <ClothesCards/>
                <ClothesCards/>
                <ClothesCards/>
                <ClothesCards/>
                <ClothesCards/>
                <ClothesCards/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'center'
    }
});

export default ListCardClothesScreen;

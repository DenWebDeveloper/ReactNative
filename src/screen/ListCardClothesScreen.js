import React, {Component} from 'react'
import {ScrollView,StyleSheet} from 'react-native'
import Navigation from '../components/Navigation'
import ClothesCards from '../components/ClothesCards'

class ListCardClothesScreen extends Component {
    static navigationOptions = {
        headerTitle: <Navigation title='Список'/>,
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
        flex:1,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'space-between',
    }
});

export default ListCardClothesScreen;

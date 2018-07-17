import React, {Component,Fragment} from 'react';
import {ScrollView} from 'react-native';

import NavigationBarLayout from '../components/NavigationBarLayout'
import ComparisonClothes from '../components/ComparisonClothes'

class comparisonClothesScreen extends Component {

    static navigationOptions = {
        headerTitle: <NavigationBarLayout title='Сравнения'/>,
    };

    render() {
        return (
            <ScrollView>
                <ComparisonClothes/>
                <ComparisonClothes/>
                <ComparisonClothes/>
            </ScrollView>
        );
    }
}

export default comparisonClothesScreen;

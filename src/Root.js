import React, {Component} from 'react';
import {DrawerLayoutAndroid} from 'react-native';
import {Font, AppLoading} from 'expo'

import AppNavigator from './AppNavigator'
import DrawerLayout from './components/DrawerLayout'

class Root extends Component {

    state = {
        fontsAreLoaded: false,
    };

    render() {
        if (!this.state.fontsAreLoaded) return <AppLoading/>;
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={()=><DrawerLayout/>}>
                <AppNavigator/>
            </DrawerLayoutAndroid>
        )
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Rubik-Black': require('../node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
            'Rubik-BlackItalic': require('../node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
            'Rubik-Bold': require('../node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
            'Rubik-BoldItalic': require('../node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
            'Rubik-Italic': require('../node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
            'Rubik-Light': require('../node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
            'Rubik-LightItalic': require('../node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
            'Rubik-Medium': require('../node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
            'Rubik-MediumItalic': require('../node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
            'Rubik-Regular': require('../node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
            'rubicon-icon-font': require('../node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
        });
        this.setState({fontsAreLoaded: true})
    }
}

export default Root
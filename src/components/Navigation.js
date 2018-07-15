import React, {Component} from 'react'
import {View} from 'react-native'
import {NavigationBar, ImageBackground, Title, Icon} from '@shoutem/ui'

class Navigation extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <ImageBackground
                    source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}
                    style={{width: '100%', height: 70}}
                >
                    <NavigationBar
                        styleName="clear"
                        leftComponent={<Icon name="sidebar"/>}
                        centerComponent={<Title>{this.props.title}</Title>}
                        rightComponent={(
                            <Icon name="add-event"/>
                        )}/>
                </ImageBackground>
            </View>
        )
    }
}

export default Navigation;

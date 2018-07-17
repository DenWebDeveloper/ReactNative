import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Row, Icon, Title} from '@shoutem/ui'

class DrawerLayout extends Component {
    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={styles.imageBackground}>
                    <Image
                        style={styles.imageBackgroundImage}
                        source={{uri: 'https://n-w.tv/wp-content/uploads/2017/07/selfi.jpg'}}
                    />
                    <View style={styles.content}>
                        <Title style={styles.title} styleName="md-gutter-bottom">Kyoto Amber Upper East</Title>
                    </View>
                </View>
                <View>
                    <Row styleName="small">
                        <Icon name="web"/>
                        <Text>About1</Text>
                        <Icon styleName="disclosure" name="right-arrow"/>
                    </Row>
                    <Row styleName="small">
                        <Icon name="web"/>
                        <Text>Pages Pages</Text>
                        <Icon styleName="disclosure" name="right-arrow"/>
                    </Row>
                    <Row styleName="small">
                        <Icon name="web"/>
                        <Text>Pages Pages</Text>
                        <Icon styleName="disclosure" name="right-arrow"/>
                    </Row>
                    <Row styleName="small">
                        <Icon name="web"/>
                        <Text>Pages Pages</Text>
                        <Icon styleName="disclosure" name="right-arrow"/>
                    </Row>
                    <Row styleName="small">
                        <Icon name="about"/>
                        <Text>About</Text>
                        <Icon styleName="disclosure" name="right-arrow"/>
                    </Row>
                    <Row styleName="small">
                        <Icon name="exit-to-app"/>
                        <Text>Exit</Text>
                        <Icon styleName="disclosure" name="right-arrow"/>
                    </Row>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.flatten({
    imageBackground: {
        width: '100%',
        flex: 1,
        height: 300,
        position: 'relative',
        justifyContent: 'flex-end',
    },
    imageBackgroundImage: {
        position: 'absolute',
        height: 300,
        width: '100%',
    },
    content: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        bottom: 0,
        padding: 20
    },
    title: {
        textAlign: 'center',
        flex: 1,
        alignItems: 'center',
        color: '#fff',
        marginBottom: 0
    }
});

export default DrawerLayout;

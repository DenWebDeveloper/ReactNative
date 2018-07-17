import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {InlineGallery, Tile, Title,Caption} from '@shoutem/ui';

class comparisonClothes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos:
                [
                    {"source": {"uri": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg"}},
                    {"source": {"uri": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg"}},
                    {"source": {"uri": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"}}
                ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Title style={styles.title}>Что лутше???)00</Title>
                <InlineGallery
                    styleName="large-wide"
                    data={this.state.photos}
                />
                <View styleName="content">
                    <View styleName="horizontal space-between">
                        <Caption>1 hour ago</Caption>
                        <Caption>15:34</Caption>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.flatten({
    container: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor:'#fff'
    },
    title: {
        padding: 10
    }
});

export default comparisonClothes;

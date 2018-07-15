import React, {Component, Fragment} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {
    Card,
    Image,
    Subtitle,
    Caption,
    ListView,
    GridRow,
    ImageBackground,
    Divider,
    Tile,
    Title,
    Button,
    Icon
} from '@shoutem/ui'

class ClothesCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [
                {
                    "name": "Gaspar Brasserie",
                    "address": "185 Sutter St, San Francisco, CA 94109",
                    "image": {"url": "https://unifashion.ru/wp-content/uploads/2015/05/w_tolstovka_grey.jpg"},
                },
                {
                    "name": "Chalk Point Kitchen",
                    "address": "527 Broome St, New York, NY 10013",
                    "image": {"url": "https://www.splav.ru/img/g20100715150836775365t3n1.jpg"},
                },
                {
                    "name": "Kyoto Amber Upper East",
                    "address": "225 Mulberry St, New York, NY 10012",
                    "image": {"url": "https://unifashion.ru/wp-content/uploads/2015/05/w_tolstovka_grey.jpg"},
                },
                {
                    "name": "Kyoto Amber Upper East",
                    "address": "225 Mulberry St, New York, NY 10012",
                    "image": {"url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"},
                },
                {
                    "name": "Kyoto Amber Upper East",
                    "address": "225 Mulberry St, New York, NY 10012",
                    "image": {"url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"},
                },
                {
                    "name": "Kyoto Amber Upper East",
                    "address": "225 Mulberry St, New York, NY 10012",
                    "image": {"url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"},
                },
                {
                    "name": "Kyoto Amber Upper East",
                    "address": "225 Mulberry St, New York, NY 10012",
                    "image": {"url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"},
                },
                {
                    "name": "Kyoto Amber Upper East",
                    "address": "225 Mulberry St, New York, NY 10012",
                    "image": {"url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"},
                },
                {
                    "name": "Kyoto Amber Upper East",
                    "address": "225 Mulberry St, New York, NY 10012",
                    "image": {"url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"},
                }
            ],
        }
    }

    render() {
        return (
            <Card style={styles.card}>
                <Image
                    styleName="medium-wide"
                    source={{uri: 'https://unifashion.ru/wp-content/uploads/2015/05/w_tolstovka_grey.jpg'}}
                />
                <View styleName="content">
                    <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
                    <View styleName="horizontal v-center space-between">
                        <Caption>21 hours ago</Caption>
                        <Button styleName="tight clear"><Icon name="add-event" /></Button>
                    </View>
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'red',
        marginBottom: 30,
        minWidth: 300,
        maxWidth: 500,
        width: '100%'
    }
});

export default ClothesCards;

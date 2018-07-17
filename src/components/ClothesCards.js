import React, {Component, Fragment} from 'react';
import {View, StyleSheet} from 'react-native';
import {
    Image,
    Button,
    Icon,
    Subtitle,
    Caption
} from '@shoutem/ui'

class ClothesCards extends Component {

    render() {
        return (
            <View style={styles.cardWrapper}>
                    <Image
                        source={{uri: 'https://unifashion.ru/wp-content/uploads/2015/05/w_tolstovka_grey.jpg'}}
                        style={styles.img}
                    />
                    <View style={styles.text}>
                        <Subtitle>The Right Boutique Hotel dFor You Boutique Boutique Boutique </Subtitle>
                        <View style={styles.userInfo}>
                            <Caption>2s1.15.2010</Caption>
                            <Button styleName="tight clear"><Icon name="add-event"/></Button>
                        </View>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.flatten({
    img: {
        width: '100%',
        height: 360,
        borderTopLeftRadius: 10,
        borderTopRightRadius:10
    },
    cardWrapper: {
        minWidth: 200,
        maxWidth: 360,
        width: '100%',
        marginBottom: 30,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius:10
    },
    text: {
        padding: 10,
    },
    userInfo: {
        marginTop: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    }
});

export default ClothesCards;

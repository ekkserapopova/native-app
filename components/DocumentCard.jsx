import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Platform } from 'react-native';
import React from 'react';

export default function DocumentCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Подробности', { document_id: props.document_id });
    };

    return (
        <View style={styles.card}>
            <View style={styles.betw}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{ uri: props.document_image }}></Image>
                    <View style={styles.row}>
                        <Text style={styles.text_title}>{props.document_title}</Text>
                        <Text style={styles.text_overview}>{props.document_overview}</Text>
                        
                    </View>
                </View>
                <View style={styles.container_pricebtn}>
                    <Text style={styles.text_price}>{props.document_price}{'руб.'}</Text>
                    <TouchableOpacity style={styles.btn} onPress={handlePress}>
                        <Text style={styles.btn_text}>Подробнее</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        width: 175,
        height: 265,
        backgroundColor: '#35525A',
        justifyContent:'space-between',
        borderRadius: 8,
        paddingTop: 6,
        padding: 12,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 8,
        marginTop: 8
    },
    text_title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'aliceblue',
    },
    text_overview: {
        fontSize: 10,
        marginTop: 5,
        color: 'aliceblue',
    },
    image: { height: 100, width:158 },
    container: { display: 'flex', width: '100%', margin: 0 },
    text_price: { 
        color: 'aliceblue', 
        fontSize: 14,

    },
    btn: {
        backgroundColor: 'aliceblue',
        padding: 5,
        width:70,
        height:20,
        borderRadius: 5,
        marginTop: 0,
    },
    btn_text: {
        color: '#35525A',
        textAlign: 'center',
        fontSize: 8,
    },
    container_pricebtn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        width: 150,
        alignItems: 'center'
    },
    betw:{
        display:'flex',
        height:244,
        justifyContent:'space-between'
    }

});

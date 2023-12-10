import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Platform } from 'react-native';
import React from 'react';

export default function OneDocument({ ...props }) {

    return (
        <View style={styles.card}>
            <View style={styles.betw}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{ uri: props.document_image }}></Image>
                    <View style={styles.row}>
                        <Text style={styles.text_title}>{props.document_title}</Text>
                        <Text style={styles.text_description}>{props.document_description}</Text>
                        
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center', // Добавлено свойство для центрирования по горизонтали
        display: 'flex',
        flexDirection: 'column',
        width: 350,
        backgroundColor: '#35525A',
        justifyContent: 'space-between',
        borderRadius: 8,
        paddingTop: 12,
        padding: 24,
        marginBottom: 8,
        marginTop: 8
    },
    text_title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'aliceblue',
    },
    text_description: {
        fontSize: 18,
        marginTop: 5,
        color: 'aliceblue',
    },
    image: { height: 200, width:314 },
    container: { display: 'flex', width: '100%', margin: 0 },
});

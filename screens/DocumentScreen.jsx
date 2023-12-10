import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from '../api';
import { setDocument } from '../store/documentSlice';
import OneDocument from '../components/OneDocument';

export default function DocumentScreen() {
    const route = useRoute();
    const documentId = route.params?.document_id || 'No ID';
    const dispatch = useDispatch();
    const { document } = useSelector((store) => store.document);
    
    useEffect(() => {
        async function getDocument() {
            const response = await axiosInstance.get(`/documents/${documentId}`);
            dispatch(setDocument(response?.data));
        }
        getDocument();
    }, [dispatch]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.page}>
                {!!document && <OneDocument key={document.id} {...document} />}
            </View>        
        </ScrollView>

        
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1F3E47'
    },
    page: {
        display: 'flex',
        width: '100%',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#1F3E47',
    }
});
import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../api';
import { setDocuments } from '../store/documentSlice';
import DocumentCard from '../components/DocumentCard';


export default function DocumentsScreen({ navigation }) {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [searchValueMin, setSearchValueMin] = useState(0);
    const [searchValueMax, setSearchValueMax] = useState(10000000);
    const { documents } = useSelector((store) => store.document);
  
    const handleSearch = async () => {
      try {
        const response = await axiosInstance.get(
          `/documents?title=${searchValue}&minprice=${searchValueMin}&maxprice=${searchValueMax}`
        );
        dispatch(setDocuments(response?.data));
      } catch (error) {
        console.error('Error during search:', error);
      }
    };
  
    useEffect(() => {
      async function getAllDocuments() {
        try {
          const response = await axiosInstance.get('/documents');
          dispatch(setDocuments(response?.data));
        } catch (error) {
          console.error('Error fetching documents:', error);
        }
      }
      getAllDocuments();
    }, [dispatch]);
  
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Название документа"
            placeholderTextColor="grey"
            onChangeText={setSearchValue}
            value={searchValue}
          />
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text>Найти</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_price}>
          <TextInput
            style={styles.input_from}
            placeholderTextColor="grey"
            placeholder="от"
            keyboardType="numeric"
            onChangeText={(text) => setSearchValueMin(text)}
            value={searchValueMin !== 0 ? String(searchValueMin) : ''}
          />
          <TextInput
            style={styles.input_from}
            placeholderTextColor="grey"
            placeholder="до"
            keyboardType="numeric"
            onChangeText={(text) => setSearchValueMax(text)}
            value={searchValueMax !== 10000000 ? String(searchValueMax) : ''}
          />
          <TouchableOpacity
            onPress={handleSearch}
            style={styles.button_price}
          >
            <Text>Поиск</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.page}>
          {!!documents &&
            documents.map((document) => (
              <DocumentCard key={document.document_id} {...document} navigation={navigation} />
            ))}
        </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1F3E47'
    },
    container_price: {
        display: 'flex',
        flexDirection: 'row',

    },
    button_price: {
        marginLeft: 8,
        padding: 5,
        backgroundColor: 'aliceblue',
        borderRadius: 8,
        height:30,
        color:'#1F3E47',
        marginBottom: 16,
    },
    input_from: {
        height:30,
        color: 'aliceblue',
        borderRadius:8,
        width: 100,
        borderWidth: 1,
        borderColor: 'gray',
        marginLeft: 10,
        paddingLeft: 8,
        paddingRight: 8,
    },
    page: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#1F3E47',
        
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        width: 370,
        justifyContent: 'center',
        marginLeft: 10
      },
    input: {
        height: 30,
        color: 'aliceblue',
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 16,
        paddingLeft: 8,
        paddingRight: 8,
        borderEndStartRadius: 8,
        borderStartStartRadius:8,
        flex: 1, 
      },
    button: {
        marginLeft: 8,
        padding: 5,
        backgroundColor: 'aliceblue',
        borderRadius: 8,
        borderEndStartRadius: 0,
        borderStartStartRadius:0,
        height:30,
        color:'#1F3E47',
        marginBottom: 16,
        marginLeft: -7
      },
});
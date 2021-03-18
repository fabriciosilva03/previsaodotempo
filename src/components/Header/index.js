import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import{LinearGradient} from 'expo-linear-gradient';
import {Ionicons} from '@expo/vector-icons';

export default function Header(){
    return(
      <LinearGradient style={styles.header}
      colors={['#1ed6ff', '#97c1ff']}
      >
        <Text style={styles.date}> 10/02/2021</Text>
        <Text style={styles.city}> Campo Grande</Text> 
        <Ionicons
            name="cloud"
            color="#FFF"
            size={100}
        />
        <Text style={styles.temp}> 30° </Text>

      </LinearGradient>
    )  
}

const styles = StyleSheet.create({
    header:{
        width: '95%',
        height: '50%', 
        alignItems: 'center',
        borderRadius: 8,
        
    },
    date:{
        color: '#FFF',
        fontSize: 15
    },
    city:{
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
    },
    temp:{
        color: '#FFF',
        fontSize: 50,
        fontWeight: 'bold'
    }
});
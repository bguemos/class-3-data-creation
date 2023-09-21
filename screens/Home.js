import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import MyNav from '../data/components/card';
import MyCard from '../data/components/card';


export default function Home({navigation}) {
    const [number,setNumber] = useState(1);


    const check = () => {
        if(number == 1){
        console.log("ONE")
     
        
       } else if (number == 2){
        console.log("TWO:");
        
    
        } else if (number === 3){
         navigation.push('About');
        }
        setNumber(number + 1);
     
       }
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                   
            <MyCard/>
            </View>
            <TouchableOpacity onPress={() => check()}
                               style={ number === 1 ? styles.btnBlue :
                                       number === 2 ? styles.btnRed :  styles. btnGreen}>
                              
                <Text>Click Me</Text>
           
            </TouchableOpacity>
         
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#301934',
        opacity: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnBlue: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        padding: 10
    },
    btnRed: {
        alignItems: 'center',
        backgroundColor: 'gray',
        borderColor: 'gray',
        borderRadius: 20,
        borderWidth: 1,
        padding: 10
    },
    btnGreen: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        padding: 10
    },

    card: {
     paddingBottom: 50,
     objectFit: 'cover'
    }
   
    
});

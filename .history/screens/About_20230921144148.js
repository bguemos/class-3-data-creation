import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { bookStore } from '../data/books';
import MySearch from '../data/components/searchbar';

export default function About({navigation}) {
    const[data, setData] = useState();

    const addingData = () => {
        console.log("started");
        setData(bookStore);
    }
    return (
     <>

<View>
        <MySearch/>
</View>
        <View style={styles.container}>
         
            <Text>Welcome to the Dashbard</Text>

            
           
            <Button style={styles.databutton} title="Show Data" onPress={() => addingData()}/>
            {
            data && data.books.map((b, index) => {

                if(b.category.toLowerCase() == 'java') {
                    return(
                        <View key={index}>
                            <Text>{b.title}</Text>
                            {
                                b.authors && b.authors.map((a, ind) =>{
                                    return(
                                        <View key={ind}>
                                            <Text>{a}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    )

                }

             


            })
    
            
        }
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        marginTop:30
        
    },
   
    
});

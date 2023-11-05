import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react"


export default function Screen01({navigation}) {
    const [name, setName] = useState('')

   
    return ( 
        
        <View style = { styles.container } >
        
        <View style ={{alignItems:'center', justifyContent:'center'}}>
        
            <Image source={require("../assets/Image.png")} 
            style={{height:250, width:250}}></Image>

            <Text style ={{color: '#8353E2', fontSize:25, fontWeight:'800', margin:10}}
            >MANAGE YOUR TASK</Text>

            <View style={{flexDirection:'row', justifyContent:"center", alignContent:"center",
            alignItems:'center', borderWidth:1, borderRadius:10,marginTop:80}}>
                <Image source={require("../assets/email.png")}
                    style={{height:30, width:30}}></Image>
                <TextInput style ={{height:50, width:350, borderWidth:"none",outlineStyle:"none"}}
                    placeholder='Enter your name'
                    onChangeText={setName}
                    value={name}
                ></TextInput> 
            </View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Screen02", {name})}>
                    <View style ={{height:50, width:200, backgroundColor:'#00BDD6', 
                    marginTop:40, borderRadius:30,  alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize:20, color:'white'}}>Get Starts</Text>
                    </View>
            </TouchableOpacity>
        </View>
        
        </View>
    );

    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
});
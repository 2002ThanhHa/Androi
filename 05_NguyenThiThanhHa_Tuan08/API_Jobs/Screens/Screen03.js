// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Image, TextInput, Pressable, FlatList } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';

// function Screen03({ navigation, route }) {
//     const { name, item, data, update } = route.params;
//     console.log(item)
//     const [toDoNew, setToDoNew] = useState(item ? item : '');

//     function addTextToUserById(userId, newText) {
//         fetch(`https://6544afab5a0b4b04436cbf0a.mockapi.io/API_1${userId}`, {
//           method: "PUT", 
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             text: [...data.text,newText],
//           }),
//         })
//           .then(response => response.json())
//           .then(updatedData => {
//             console.log("Dữ liệu đã được cập nhật:", updatedData);
//             update=1;
//           })
//           .catch(error => {
//             console.error("Đã xảy ra lỗi khi cập nhật dữ liệu:", error);
//           });
//       }      
//       const handleHome = () => {
//         navigation.navigate("Home", {name, data, update})
//       }

//     return (
//         <View style={styles.container}>
//             <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 15, width: "100%" }}>
//                 <View style={{ marginLeft: 30, flexDirection: "row", alignItems: "center" }}>
//                     <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={require("../assets/avatar.png")} />
//                     <View style={{ marginLeft: 10 }}>
//                         <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
//                         <Text style={{ fontSize: 18 }}>Have a agrete day a head</Text>
//                     </View>
//                 </View>
//                 <Pressable onPress={() => { navigation.navigate("Home", { name }) }}>
//                     <AntDesign name="arrowleft" size={24} color="black" />
//                 </Pressable>
//             </View>
//             <View style={{ marginTop: 20 }}>
//                 <Text style={{ fontSize: 30, fontWeight: "bold" }}>{item ? "EDIT TO JOB" : "ADD TO JOB"}</Text>
//             </View>
//             <View style={{ width: '300px', height: '50px', borderColor: "#111", borderWidth: 1, borderRadius: 10, flexDirection: "row", alignItems: "center", marginTop: 30 }}>
//                 <FontAwesome style={{ marginLeft: 20 }} name="sticky-note-o" size={24} color="green" />
//                 <TextInput style={{ marginLeft: 10, width: "80%", height: "100%", fontSize: 20, outlineStyle: 'none' }} value={toDoNew} onChangeText={setToDoNew} placeholder="Enter your job" />
//             </View>
//             <Pressable onPress={addTextToUserById(data.id,toDoNew)} style={{ marginTop: 20, width: 200, height: 45, backgroundColor: "#00bdd5", borderRadius: 10, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
//                 <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>FINISH</Text>
//                 <AntDesign name="arrowright" size={24} color="#fff" />
//             </Pressable>
//             <Pressable onPress={()=>{navigation.navigate("Screen02", {email, data, update})}} style={{ marginTop: 20, width: 100, height: 45, backgroundColor: "#00bdd5", borderRadius: 10, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
//                 <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>HOME</Text>
//                 <AntDesign name="arrowright" size={24} color="#fff" />
//             </Pressable>
//             <Image style={{ width: '200px', height: '200px' }} resizeMode="contain" source={require("../assets/Image.png")} />
//         </View>
//     )
// }
// export default Screen03
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: "center",
//         justifyContent: "space-between"
//     },
// });

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useEffect, useState } from "react"
import { AntDesign,MaterialIcons } from '@expo/vector-icons';

export default function Screen03({navigation, route}) {
    const { name } = route.params;
  

   
    return ( 
        
        <View style = { styles.container } >
          <View style ={{flexDirection:'row', justifyContent:'space-between'}}>
          <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={require("../assets/avatar.png")} />
        <View >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}> Hi {name}</Text>
            <Text style={{ fontSize: 18 }}>Have a agrete day a head</Text>
         </View>
        <Pressable onPress={() => { navigation.navigate("Screen01") }}>
            <AntDesign name="arrowleft" size={35} color="black" />
        </Pressable>
        
    </View>
        <View style ={{alignItems:'center', justifyContent:'center'}}>
        
           

            <Text style ={{color: '#171A1F', fontSize:40, fontWeight:'800', margin:30}}
            >ADD YOUR JOB</Text>

            <View style={{flexDirection:'row', justifyContent:"center", alignContent:"center",
            alignItems:'center', borderWidth:1, borderRadius:10,marginTop:30}}>
                <MaterialIcons name="list-alt" size={24} color="green" />
                <TextInput style ={{height:50, width:350, borderWidth:"none",outlineStyle:"none"}}
                    placeholder='Input your job'
                 ></TextInput> 
            </View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Screen01")}>
                    <View style ={{height:50, width:200, backgroundColor:'#00BDD6', 
                    marginTop:40, borderRadius:30,  alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize:20, color:'white'}}>FINISH</Text>
                    </View>
            </TouchableOpacity>

            <Image source={require("../assets/Image.png")} 
            style={{height:250, width:250}}></Image>
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
<<<<<<< HEAD
import { StyleSheet, Text, View, Pressable, FlatList, Image, TextInput} from 'react-native'
import React, { useState } from 'react'

const Screen1 = ({navigation}) => {

    const array = [
    {
        image: require('../assets/donut_yellow 1.png'),
        name: 'Tasty Donut',
        price: '$10.00',
        type: 'Tasty',
        decription: 'Spicy tasty donut family'
    },
    {
        image: require('../assets/pink_donut 1.png'),
        name: 'Pink Donut',
        price: '$20.00',
        type: 'Pink',
        decription: 'Spicy tasty donut family'
    },
    {
        image: require('../assets/tasty_donut 1.png'),
        name: 'Pink Donut',
        price: '$20.00',
        type: 'Pink',
        decription: 'Spicy tasty donut family'
    },
    {
        image: require('../assets/green_donut 1.png'),
        name: 'Floating Donut',
        price: '$30.00',
        type: 'Floating',
        decription: 'Spicy tasty donut family'
    },
    {
        image: require('../assets/donut_red 1.png'),
        name: 'Tasty Donut',
        price: '$40.00',
        type: 'Tasty',
        decription: 'Spicy tasty donut family'
    }]
    
    const [selection, setSelection] = useState(1);
    const [state, setState] = useState(array);

  return (
    <View style={styles.component}>
      <Text style={{fontSize: 16,fontWeight: 700,color: '#000000A6',marginTop: 10,marginLeft: 15,}}>Welcome , Jala!</Text>
      <Text style={{fontSize: 25,fontWeight: 700,marginLeft: 15,}}>Choice you Best food</Text>
      <TextInput placeholder='Search food' style={{width:265, height: 50, marginLeft:40,marginTop:10,backgroundColor: '#C4C4C41A', borderWidth:2, borderColor:'border: 1px solid #C4C4C4', borderRadius:5, paddingLeft:15 }}></TextInput>
      <View style={{display: 'flex',flexDirection: 'row',marginTop: 20}}>
        <Pressable style={[styles.btn, selection === 1 ? {backgroundColor: '#F1B000'} : null,]} onPress={() => 
            {setSelection(1); setState([...array])}}>Donut</Pressable>

        <Pressable style={[styles.btn, selection === 2 ? {backgroundColor: '#F1B000'} : null,]} onPress={() => 
            {setSelection(2); setState([...array.filter((item) => item.type == 'Pink')])}}>Pink Donut</Pressable>

        <Pressable style={[styles.btn, selection === 3 ? {backgroundColor: '#F1B000'} : null,]} onPress={() => 
            {setSelection(3); setState([...array.filter((item) => item.type == 'Floating')])}}>Floating</Pressable>
      </View>
      
      <FlatList numColumns={1} data={state} renderItem={({item}) => {
        return (
            <Pressable style={styles.listComponent} onPress = {() => {navigation.navigate({name: 'Screen2', params: {item}})}}> 
                <Image source={item.image} style={{ width: 120,height: 100,resizeMode: 'contain', margin:8}}></Image>
                <View style={{position:'absolute',flexDirection:'column', marginLeft:140, marginTop:10 }}>
                    <Text style={{fontSize: 20, fontWeight: 700, marginBottom:5}}>{item.name}</Text>
                    <Text style ={{fontSize:19, fontWeight:300,marginBottom:5}}>{item.decription}</Text>
                    <Text style={{fontSize: 20, fontWeight: 700}}>{item.price}</Text>
                    
                </View>
                
            </Pressable>
        )
        }}>
      </FlatList>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    component: {
        flex: 1,
    },
    btn: {
        width: 100,
        height: 30,
        borderRadius: 5,
        borderColor: '#00000033',
        borderWidth: 1,
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
    },
    listComponent: {
        width: '93%',
        height: 120,
        backgroundColor: '#F4DDDD',
        margin: 12,
        flexDirection:'row',
        justifyContent: 'flex-start',
        borderRadius: 10,
    },
   
})
=======
import { useState } from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text,View,ScrollView,TextInput,Pressable,Image,} from "react-native";

const array = [
  {
    id: 1,
    img: require("../assets/donut_yellow 1.png"),
    name: "Tasty Donut",
    description: "Spicy tasty donut family",
    price: 10.0,
    type: "T",
  },
  {
    id: 2,
    img: require("../assets/tasty_donut 1.png"),
    name: "Pink Donut",
    description: "Spicy tasty donut family",
    price: 20.0,
    type: "P",
  },
  {
    id: 3,
    img: require("../assets/green_donut 1.png"),
    name: "Floating Donut",
    description: "Spicy tasty donut family",
    price: 30.0,
    type: "F",
  },
  {
    id: 4,
    img: require("../assets/donut_red 1.png"),
    name: "Tasty Donut",
    description: "Spicy tasty donut family",
    price: 40.0,
    type: "T",
  },
];

export default function Master({navigation}) {
  const [data, setData] = useState(arr);
  const [state, setState] = useState(1);
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "10%" }}>
        <Text style={{fontSize: 16,fontWeight: "700",color: " #000000A6"}}> Welcome, Jala!</Text>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>
          Choice you Best food
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "10%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholder="Search food"
          style={{
            width: 266,
            height: 46,
            backgroundColor: "rgba(196, 196, 196, 0.1)",
            borderWidth: 1,
            borderColor: "rgba(196, 196, 196, 1)",
            borderRadius: 3,
            padding: 10,
          }}
        />
        <Pressable
          style={{
            width: 49,
            height: 47,
            borderRadius: 5,
            backgroundColor: "rgba(241, 176, 0, 1)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/Vector.png")}
            style={{ width: 27, height: 28 }}
          />
        </Pressable>
      </View>
      <View
        style={{
          width: "100%",
          height: "10%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => {
            setData(arr);
            setState(1);
          }}
          style={{
            width: 101,
            height: 35,
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
              state == 1 ? "rgba(241, 176, 0, 1)" : "rgba(196, 196, 196, 0.12)",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "700" }}>Donut</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setData([
              ...arr.filter((x) => {
                return x.type == "P";
              }),
            ]);
            setState(2);
          }}
          style={{
            width: 101,
            height: 35,
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
              state == 2 ? "rgba(241, 176, 0, 1)" : "rgba(196, 196, 196, 0.12)",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "700" }}>Pink Donut</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setData([
              ...arr.filter((x) => {
                return x.type == "F";
              }),
            ]);
            setState(3);
          }}
          style={{
            width: 101,
            height: 35,
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
              state == 3 ? "rgba(241, 176, 0, 1)" : "rgba(196, 196, 196, 0.12)",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "700" }}>Floating</Text>
        </Pressable>
      </View>
      <ScrollView>
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: 337,
                    height: 115,
                    backgroundColor: "rgba(244, 221, 221, 1)",
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    margin: 10,
                  }}
                >
                  <Image
                    source={item.img}
                    style={{ width: 111, height: 101 }}
                  />
                  <View>
                    <Text style={{ fontSize: 20, fontWeight: "700" }}>
                      {item.name}{" "}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "700",
                        color: "rgba(0, 0, 0, 0.54)",
                      }}
                    >
                      {item.description}{" "}
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: "700" }}>
                      $ {item.price}{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      height: "100%",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Pressable
                    onPress={()=>{
                        navigation.navigate('Detail',item)
                    }}
                      style={styles.btnAdd}
                    >
                      <Image
                        source={require("../assets/plus.png")}
                        style={{ width: 15, height: 15,position:'absolute',top:20,left:-20}}
                      />
                    </Pressable>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 360,
    height: 640,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  btnAdd: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 45,
    borderRightWidth:0,
    borderBottomWidth: 45,
    borderLeftColor: "transparent",
    borderBottomColor: "rgba(241, 176, 0, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10
  },

});
>>>>>>> 7b8d4c58840678304c3b0e4b2f604adb4fe9e475

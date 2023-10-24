import { StyleSheet, Text, View, Image, Pressable, Button, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Screen3 = ({navigation, route}) => {

    const [item, setItem] = useState(
        route.params?.item || {
        image: require('../assets/tasty_donut 1.png'),
        name: 'Pink Donut',
        price: '$20.00',
        type: 'Pink',
        decription: 'Spicy tasty donut family'
    });
  return (
    <View style={styles.component}>
       
        <View style={styles.imageComponenet}>
            <Image source={item.image} style={styles.image}></Image>
        </View>
        
        <Text style={{fontSize: 22,fontWeight: 'bold',marginLeft: 15}}>{item.name}</Text>
        
        <View style={{display: 'flex',flexDirection: 'row', marginTop:10}}>
            <Text style={{fontSize: 20,fontWeight: 600,color: '#00000096',marginLeft: 20}}>{item.decription}</Text>
            <Text style={{fontSize: 20,fontWeight:"bold",marginLeft: 50}}>{item.price}</Text>
        </View>
        <View style={{marginTop:40, flexDirection:'row'}}>
            <Image source={require('../assets/Vector.png')} style={{height:20, width:20, marginLeft:20}}></Image>
            <Text style={{fontSize: 18,fontWeight: 500,color: '#00000096',marginLeft:10}}>Delivery in </Text>
        </View>
        <View style={{ marginLeft:30,flexDirection:'row',marginTop:5}}>
            <Text style={{fontSize: 20,fontWeight:"bold"}}>30 min  </Text>
            <TouchableOpacity >
                
                    <View style={{backgroundColor:'#F1B000', width:20, height:20, borderRadius:2, marginTop:5, marginLeft: 240}}>
                        <Text style={{ marginTop:-13,fontWeight:'bold',alignItems:'center', color:'white', fontSize:30}}>+</Text>
                    </View>
                    <View style={{backgroundColor:'#F1B000', width:20, height:20, borderRadius:2, marginTop:-20, marginLeft: 170}}>
                        <Text style={{ marginTop:-22,fontWeight:'bold',alignItems:'center', color:'white', fontSize:40}}>-</Text>
                    </View>

            </TouchableOpacity>

            <Text style={{marginLeft:290, position:'absolute', fontSize: 20, fontWeight: 'bold'}}>1</Text>
        </View>
        <View style={{marginLeft:10, marginTop:10}}>
            <Text style={{fontSize: 22,fontWeight: 'bold',marginLeft: 15}}> Restaurants info</Text>
            <Text style={{fontSize: 20,fontWeight: 600,color: '#00000096'}}>Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
        </View>
        
        <View style={{display: 'flex',flexDirection: 'row',alignItems: 'center',marginTop: 20,}}>
            
            <Pressable style={styles.add}>Add to card</Pressable>
        </View>
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({
    component: {
        flex: 1,
        backgroundColor:'white'
    },
    imageComponenet: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 350,
        height: 350,
        resizeMode: 'contain' 
    },
    add: {
        width: 350,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1B000',
        borderRadius: 10,
        marginLeft:20,
        fontSize: 25,
        fontWeight: 500,
        color: '#FFFDFD'
    }
})

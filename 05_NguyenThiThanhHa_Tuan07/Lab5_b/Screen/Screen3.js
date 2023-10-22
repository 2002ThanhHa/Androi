import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'

const Screen3 = ({navigation, route}) => {

    const [item, setItem] = useState(
        route.params?.item || {
            image: require('../assets/xanh.png'),
            name: 'Pinarello',
            price: '$1800',
            type: 'Mountain',
            decription: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
    });
  return (
    <View style={styles.component}>
       
        <View style={styles.imageComponenet}>
            <Image source={item.image} style={styles.imageBike}></Image>
        </View>
        
        <Text style={{fontSize: 30,fontWeight: 500,marginLeft: 15,marginTop: 15,}}>{item.name}</Text>
        
        <View style={{display: 'flex',flexDirection: 'row'}}>
            <Text style={{fontSize: 25,fontWeight: 400,color: '#00000096',marginLeft: 15,}}>15% OFF | 350$</Text>
            <Text style={{fontSize: 25,fontWeight: 400,marginLeft: 40,textDecorationLine: 'line-through' }}>{item.price}</Text>
        </View>
        
        <Text style={{fontSize: 25,fontWeight: 400, marginLeft: 15,marginTop: 15,}}>Description</Text>
        
        <Text style={{fontSize: 20,fontWeight: 400,color: '#00000091',marginLeft: 15,marginTop: 15,}}>{item.decription}</Text>
        
        <View style={{display: 'flex',flexDirection: 'row',alignItems: 'center',marginTop: 20,}}>
            <Image source={require('../assets/heart.png')} style= {{width: 35,height: 35,marginLeft: 20,}}></Image>
            <Pressable style={styles.add}>Add to card</Pressable>
        </View>
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({
    component: {
        flex: 1,
    },
    imageComponenet: {
        width: 360,
        height: 350,
        backgroundColor: '#E941411A',
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
    },
    imageBike: {
        width: 300,
        height: 340,
        resizeMode: 'contain' 
    },
    add: {
        width: 270,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E94141',
        borderRadius: 30,
        marginLeft: 40,
        fontSize: 25,
        fontWeight: 400,
        color: '#FFFAFA'
    }
})

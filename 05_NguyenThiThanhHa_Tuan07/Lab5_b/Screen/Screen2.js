import { StyleSheet, Text, View, Pressable, FlatList, Image} from 'react-native'
import React, { useState } from 'react'

const Screen2 = ({navigation}) => {

    const array = [
    {
        image: require('../assets/xanh.png'),
        name: 'Pinarello',
        price: '$1800',
        type: 'Mountain',
        decription: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
    },
    {
        image: require('../assets/do lon.png'),
        name: 'Pina MounTain',
        price: '$1700',
        type: 'Mountain',
        decription: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
    },
    {
        image: require('../assets/tim.png'),
        name: 'Pina Bike',
        price: '$1500',
        type: 'RoadBike',
        decription: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
    },
    {
        image: require('../assets/do nho.png'),
        name: 'Pinarello',
        price: '$1900',
        type: 'RoadBike',
        decription: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
    },
    {
        image: require('../assets/tim.png'),
        name: 'Pinarello',
        price: '$2700',
        type: 'RoadBike',
        decription: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
    },
    {
        image: require('../assets/do nho.png'),
        name: 'Pinarello',
        price: '$1350',
        type: 'RoadBike',
        decription: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
    }]
    
    const [selection, setSelection] = useState(1);
    const [state, setState] = useState(array);

  return (
    <View style={styles.component}>
      <Text style={{fontSize: 25,fontWeight: 700,color: '#E94141',marginTop: 20,marginLeft: 15,}}>The world's Best Bike</Text>
      
      <View style={{display: 'flex',flexDirection: 'row',marginTop: 30,}}>
        <Pressable style={[styles.btn, selection === 1 ? {color: '#E94141'} : null,]} onPress={() => 
            {setSelection(1); setState([...array])}}>All</Pressable>

        <Pressable style={[styles.btn, selection === 2 ? {color: '#E94141'} : null,]} onPress={() => 
            {setSelection(2); setState([...array.filter((item) => item.type == 'RoadBike')])}}>RoadBike</Pressable>

        <Pressable style={[styles.btn, selection === 3 ? {color: '#E94141'} : null,]} onPress={() => 
            {setSelection(3); setState([...array.filter((item) => item.type == 'Mountain')])}}>Mountain</Pressable>
      </View>
      
      <FlatList numColumns={2} data={state} renderItem={({item}) => {
        return (
            <Pressable style={styles.listComponent} onPress = {() => {navigation.navigate({name: 'Screen3', params: {item}})}}> 
                <Image source={item.image} style={{ width: 135,height: 127,resizeMode: 'contain'}}></Image>
                <Image source={require('../assets/Vector.png')} style={{width: 18,height: 15,position: 'absolute',top: 10,left: 10}}></Image>       
                <Text style={{fontSize: 20, fontWeight: 400}}>{item.name}</Text>
                <Text style={{fontSize: 20, fontWeight: 400}}>{item.price}</Text>
            </Pressable>
        )
        }}>
      </FlatList>
      
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
    component: {
        flex: 1,
    },
    btn: {
        width: 100,
        height: 30,
        borderRadius: 5,
        borderColor: '#E9414187',
        borderWidth: 1,
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#BEB6B6',
    },
    listComponent: {
        width: 170,
        height: 200,
        backgroundColor: '#F7BA8326',
        margin: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
   
})

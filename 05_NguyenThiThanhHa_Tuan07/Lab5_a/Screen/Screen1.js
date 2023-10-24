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

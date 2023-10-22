import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const Screen1 = ({navigation}) => {
  return (
    <View style={styles.component}>
      <Text style={{fontSize: 26,fontWeight: 500,textAlign: 'center',marginTop: 30, marginLeft: 12,}}>
        A premium online store for sporter and their stylish choice</Text>
      
      <View style={{ width: 360,height: 390,borderRadius: 50,backgroundColor: '#E941411A',
        marginTop: 10,alignItems: 'center',justifyContent: 'center'}}>
        <Image source={require('../assets/xanh.png')} style={{ width: 290,height: 270,resizeMode: 'contain'}}></Image>
      </View>
      
      <Text style={{fontSize: 26,fontWeight: 700,textAlign: 'center', marginTop: 21,}}>POWER BIKE SHOP</Text>
      
      <Pressable style={styles.btnGet} onPress={() => {navigation.navigate('Screen2')}}>Get Started</Pressable>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    component: {
        flex: 1,
        alignItems: 'center',
    },
    btnGet: {
        width: 340,
        height: 61,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 17,
        marginTop: 30,
        backgroundColor: '#E94141',
        borderRadius: 30,
        fontSize: 27,
        fontWeight: 400,
        color: '#FEFEFE',
    }
})
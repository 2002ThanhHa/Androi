import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View , Image, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export default function Screen1({navigation, route}) {
  return (
    <View >
       { <Image source={route.params?.image || require('../assets/vs_blue.png')} style={{width: 320,height: 361, marginTop: 20,resizeMode: 'contain',marginLeft: 29}}></Image> }
     
      <Text style={{fontSize:19, fontWeight:'bold'}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

      <View style = {{flexDirection:'row',display: 'flex',marginLeft:10 }}>
            <Image style={styles.starImage} source={require('../assets/star.png')}></Image>
            <Image style={styles.starImage} source={require('../assets/star.png')}></Image>
            <Image style={styles.starImage} source={require('../assets/star.png')}></Image>
            <Image style={styles.starImage} source={require('../assets/star.png')}></Image>
            <Image style={styles.starImage} source={require('../assets/star.png')}></Image>
            <Text style={{fontSize: 19, marginTop: 5,marginLeft: 20,}}>(Xem 828 đánh giá)</Text>
      </View >

      <View style={{display: 'flex',flexDirection: 'row',alignItems: 'center', marginTop:10}}>
            <Text style={{ fontSize: 22,fontWeight: 'bold', marginLeft: 30}}>1.790.000 đ</Text>
            <Text style={{fontSize: 18,fontWeight: 'bold', marginLeft: 40,  marginTop: 2,color: 'gray',textDecorationLine: 'line-through',}}>1.790.000 đ</Text>
      </View>

       <View style = {{ marginTop:20,marginLeft:10, display: 'flex', flexDirection: 'row',}}>
        <Text style={{ fontWeight:'bold', color:'red', fontSize:18}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source={require('../assets/Group 1.png')} style={{width: 20, height: 20, marginLeft: 20, marginTop:2}}></Image>
       </View >

        <Pressable style= {{ marginLeft: 25, marginTop: 15, borderWidth: 1, borderRadius: '10px',
        width: 332,height: 50,alignItems: 'center',justifyContent: 'center',display: 'flex',flexDirection: 'row',fontWeight: 'bold',  fontSize: 18}}

        onPress={() => navigation.navigate('Screen2')}
        >
             4 MÀU-CHỌN MÀU
        <Image source={require('../assets/Vector.png')} style={{width: 12, height: 14, resizeMode: 'contain', marginLeft: 20}}></Image>
        </Pressable>
        <Pressable style={{marginTop: 30,marginLeft:25,borderRadius: '10px', width: 340, height: 44, backgroundColor: 'red',
        alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 20, fontWeight: 'bold'}}>CHỌN MUA</Pressable>
      
 </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    

    starImage: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginTop: 5,
        marginRight: 10,
    },
   
});

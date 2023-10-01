import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ImageBackground, Button, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/backround.png')} style={styles.image}>

        <View style={styles.viewTitle} >
          <Text style={styles.title1}>LOGIN</Text>
        </View>

        <View style = {styles.viewFrame1}>
        <View style={ styles.input1}>
          <Image source={require("./img/avatar.png")}style ={styles.icon}></Image>
          <TextInput style={styles.input} placeholder='Name'/>
        </View>
        <View style={ styles.input2}>
          <Image source={require("./img/lock-152879 1.png")}style ={styles.icon}></Image>
          <TextInput style={styles.input} placeholder='Password'/>
          <TouchableOpacity>
             <Image source={require("./img/eye 1.png") } style ={styles.icon2}></Image>
          </TouchableOpacity>
          
        </View>

        </View>

        <TouchableOpacity>
          <Text style={styles.textLogin}>LOGIN</Text>
          
        </TouchableOpacity>
        <TouchableOpacity>
      
          <Text style={styles.textCreate}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
        
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      //alignItems: 'center',
     // justifyContent: 'center',
    },
    viewTitle: {
      marginTop: 80,
      marginLeft:40,
    },
    title1: {
      fontSize: 40,
      justifyContent: 'flex-start',
      fontWeight: 'bold',
    },
    viewFrame1:{
      marginTop:80,
      marginLeft:10,
      justifyContent:'space-around',
      display:'flex',
      
    },
    input:{
      width:365,
      height:60,
      fontSize: 20,
      paddingLeft:80,
      paddingBottom:5,
    },
    input1:{
      width: 365,
      height: 60,
      display: "flex",
      flexDirection: "row",
      backgroundColor: "rgba(196, 196, 196, 0.3)",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#fff"
    },
    input2:{
      top:20,
      width: 365,
      height: 60,
      display: "flex",
      flexDirection: "row",
      backgroundColor: "rgba(196, 196, 196, 0.3)",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#fff"
    },
    icon:{
      position: 'absolute',
      //top:5,
      left:15,
      width:40,
      height:40,
    },
    icon2:{
      top:-20,
      width:40,
      height:40,
      position: "absolute",
      right: 20,
    },  
    textLogin: {
      top:100,
      left:10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 365,
      height: 50,
      backgroundColor: "rgba(6, 0, 0, 1)",
      color:"#FFF",
      fontSize:25,
      fontWeight:'bold',
    },
    textCreate:{
      top:100,
      left:10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 365,
      height: 50,
      fontSize:20,
      
    }
});

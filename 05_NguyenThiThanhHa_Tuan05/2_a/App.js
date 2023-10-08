import { useState } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { TextInput} from 'react-native-paper';
import { StyleSheet, Text, View ,  TouchableOpacity} from 'react-native';

var account ={name:'abc', password:'1234'}

var validAccount = (name, password)=>{
  if (name ===account.name && password === account.password){
    alert('dang nhap thanh cong!!!')
  }
  else 
    alert('dang nhap that bai')
}

export default function App() {
  var[name, password]= useState('')
  var[password, setPassword] = useState('')
  return (
    <View style={styles.container}>
     

        <View style={styles.viewTitle} >
          <Text style={styles.title1}>LOGIN</Text>
        </View>

        <View style = {styles.viewFrame1}>
        <View style={ styles.rowInput}>
          
          <TextInput style={styles.input} placeholder='Name' onChange={setName}
          left={<TextInput.Icon icon='account'/>}
          />
        </View>
        <View style={ styles.rowInput}>
          
          <TextInput style={styles.input} placeholder='Password'
          onChange={setPassword} secureTextEntry 
          left ={< TextInput.Icon icon ='lock'/>}
          right= {< TextInput.Icon icon ='eye'/>}
          />
          
          
        </View>

        </View>

        <TouchableOpacity style ={styles.btn} onPress={()=>validAccount(name, password)}>
          <Text style={styles.textLogin}>LOGIN</Text>
          
        </TouchableOpacity>
        <TouchableOpacity>
      
          <Text style={styles.textCreate}>Forgot your Password</Text>
        </TouchableOpacity>
        
    

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      width: 360,
      height: 640,
      flex: 1,
      //alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'linear-gradient(rgba(251, 203, 0, 1),rgba(191, 154, 0, 1))',
      alignItems: "center",
    justifyContent: "space-evenly",
  
    },
    
    viewTitle: {
      marginTop: -150,
      marginLeft:30,
    },
    title1: {
      fontSize: 40,
      justifyContent: 'flex-start',
      fontWeight: 'bold',
    },
    viewFrame1:{
      width: 330,
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
      marginTop:80,
      marginLeft:10,
     // justifyContent:'space-around',
      //display:'flex',
      
    },
    rowInput: {
      width: 330,
      height: 54,
    },
    input:{
      borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    },
    
    btn: {
      width: 330,
      height: 45,
      backgroundColor: "rgba(6, 0, 0, 1)",
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
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
      fontWeight:700,
    }
});

import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';


export default function App() {
    return ( 
        <View style = { styles.container } >
        
        <Image source ={require('./assets/circle.png')} style={{width:140,height:140}} />
        
        <Text style={styles.title}> Grow Your Bussiness </Text>
        <Text style={styles.title2}> We will help you to  grow your bussiness using online server </Text>
        
        <View style = {styles.containerBtn}>
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:20,fontWeight:'700'}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:20,fontWeight:'700'}}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
        
        <View>
          <Text style={styles.title3}>
            HOW WE WORK?
          </Text>
        </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(to bottom, rgba(199, 244, 246, 1),rgba(209, 244, 246, 1),rgba(229, 244, 245, 1),rgba(0, 204, 249, 1))',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    
    containerBtn:{
        flex:0,
        height:48,
        width:360,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    title:{
        width:169,
        height:58,
        textAlign:'center',
        fontSize:25,
        fontWeight:'700',
        lineHeight:29.3,
    },
    title2:{
        width:302,
        height:36,
        textAlign:'center',
        fontSize:15,
        fontWeight:'700',
        lineHeight:17.58
    },
    title3:{
      textAlign:'center',
      fontSize:18,
      fontWeight:'700',
    },
    btn:{
        display:'flex',
        width:119,
        height:48,
        backgroundColor:'rgba(227, 192, 0, 1)',
        alignItems:'center',
        justifyContent:'center',
    }
});
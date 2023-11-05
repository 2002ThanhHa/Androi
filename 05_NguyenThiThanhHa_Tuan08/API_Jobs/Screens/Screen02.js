import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useEffect, useState } from "react"
import { AntDesign,FontAwesome,Entypo  } from '@expo/vector-icons';

export default function Screen01({navigation, route}) {
   // const [name, setName] = useState('')
    const [toDo, setToDo] = useState([]);
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState(0);
    const { name } = route.params;
    const [search, setSearch] = useState('');
   // const  [List, setList]= useState(list)
    // const list = [
    //     {title: 'To check email'},
    //     {title: 'UI task web page'},
    //     {title: 'Learn javascrip basic'},
    //     {title: 'Learn HTLM Advance'},
    //     {title: 'Medical AP UI'},
    //     {title: 'Learn Java'}
    // ]
    useEffect(() => {
        fetch("https://6544afab5a0b4b04436cbf0a.mockapi.io/API_1")
            .then(response => response.json())
            .then(data => {
                const usernameData = data.find(item => item.name === name);
                setToDo(usernameData.text);
                setData(usernameData);
                if (usernameData) {
                    const textArray = usernameData.text;
                    console.log(textArray);
                    update = 0;
                } else {
                    console.log("Không tìm thấy dữ liệu cho 'username'");
                }
            })
            .catch(error => {
                console.error("Đã xảy ra lỗi khi lấy dữ liệu:", error);
            });
    }, [route.params.update]);

    useEffect(() => {
        if (search === "") {
            setToDo(toDo)
        } else {
            const filtered = toDo.filter(item => item.text.toLowerCase().includes(search.toLowerCase()));
            setToDo(filtered);
        }
    }, [search]);


    console.log(toDo)
   
    return ( 
        
    <View style = { styles.container } >
        
    <View style ={{flexDirection:'row', justifyContent:'space-between'}}>
        
        <Pressable onPress={() => { navigation.navigate("Screen01") }}>
            <AntDesign name="arrowleft" size={35} color="black" />
        </Pressable>
        <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={require("../assets/avatar.png")} />
        <View >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}> Hi {name}</Text>
            <Text style={{ fontSize: 18 }}>Have a agrete day a head</Text>
         </View>
    </View>
    <View style={{ marginLeft:30,marginTop: 30, width: 320, height: 50, borderColor: "#111", borderWidth: 1, borderRadius: 10, flexDirection: "row", alignItems: "center" }}>
                <AntDesign style={{ marginLeft: 10 }} name="search1" size={24} color="black" />
                <TextInput style={{ outlineStyle: 'none', marginLeft: 10, width: "80%", height: "100%", fontSize: 20 }} 
                value={search} onChangeText={text => setSearch(text)} placeholder="Search" />
    </View>

    <View>
                {toDo.map((item, index) => (
                    <Pressable  onPress={() => { navigation.navigate("Screen03", { name, data }); }} 
                    style={{ backgroundColor: "#e4e8ea", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, marginTop: 20, flexDirection: "row", width: 300, justifyContent: "space-between", height: 50, alignItems: "center" }}>
                        <AntDesign name="checksquareo" size={24} color="#4faa71" />
                        <Text style={{ fontSize: 17 }}>{item}</Text>
                        <FontAwesome name="pencil" size={24} color="#de7d80" />
                    </Pressable>

                ))}
    </View>
    <View style={{marginTop: 30,  alignItems:'center', }}>
        <Text style ={{  height:40, width: 350, backgroundColor:'#9095A0',marginBottom: 20, borderRadius:10}}>To check email </Text>
        <Text style ={{ height:40, width: 350, backgroundColor:'#9095A0'}}>To check email </Text>
    </View>
                <Pressable onPress={() => { navigation.navigate("Screen03", { name, data, update }) }} 
                style={{marginTop: 15, backgroundColor: "#24c3d9", width: 60, height: 60, borderRadius: 50, justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                    <Entypo name="plus" size={40} color="#fff" />
                </Pressable>
            </View>
       
        
       
    );

    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
});
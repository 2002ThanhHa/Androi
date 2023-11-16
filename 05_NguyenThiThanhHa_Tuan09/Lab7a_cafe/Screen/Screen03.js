//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native';
import { useState } from 'react'
import { Ionicons, AntDesign, Foundation, Octicons } from '@expo/vector-icons';


export default function Screen03({ navigation }) {


    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Pressable onPress={() => navigation.navigate("Screen02")}>
                    <AntDesign name="left" size={24} color="black" /> </Pressable>

                <Text style={{ fontSize: 24, fontWeight: '700', paddingLeft: 20 }}>Drinks</Text>
                <Ionicons name="md-search" size={20} color="green" style={{ paddingLeft: 30 }} />

            </View>
            <View style={{ marginTop: 10, marginLeft: 20, width: 350, height: 64, borderRadius: 6, borderColor: '#BCC1CA', borderWidth: 1, flexDirection: 'row' }}>
                <Image source={require("../assets/trong.png")} style={{ height: 60, width: 60, borderRadius: 4 }} />
                <Text style={{ fontSize: 16, fontWeight: '500', paddingLeft: 10 }}> Milk</Text>
                <Ionicons name="ios-play-outline" size={20} color="black" style={{ position: 'absolute', marginLeft: 70, marginTop: 40 }} />
                <Text style={{ position: 'absolute', marginLeft: 80, marginTop: 40 }}>  $20</Text>
                <AntDesign name="minuscircle" size={24} color="green" style={{ marginLeft: 120, marginTop: 20 }} />
                <AntDesign name="pluscircle" size={24} color="green" style={{ marginLeft: 30, marginTop: 20 }} />
            </View>

            <View style={{ marginTop: 10, marginLeft: 20, width: 350, height: 64, borderRadius: 6, borderColor: '#BCC1CA', borderWidth: 1, flexDirection: 'row' }}>
                <Image source={require("../assets/origin.png")} style={{ height: 60, width: 60, borderRadius: 4 }} />
                <Text style={{ fontSize: 16, fontWeight: '500', paddingLeft: 10 }}> Origin</Text>
                <Ionicons name="ios-play-outline" size={20} color="black" style={{ position: 'absolute', marginLeft: 70, marginTop: 40 }} />
                <Text style={{ position: 'absolute', marginLeft: 80, marginTop: 40 }}>  $68</Text>
                <AntDesign name="minuscircle" size={24} color="green" style={{ marginLeft: 120, marginTop: 20 }} />
                <AntDesign name="pluscircle" size={24} color="green" style={{ marginLeft: 30, marginTop: 20 }} />
            </View>
            <View style={{ marginTop: 10, marginLeft: 20, width: 350, height: 64, borderRadius: 6, borderColor: '#BCC1CA', borderWidth: 1, flexDirection: 'row' }}>
                <Image source={require("../assets/trong.png")} style={{ height: 60, width: 60, borderRadius: 4 }} />
                <Text style={{ fontSize: 16, fontWeight: '500', paddingLeft: 10 }}> Salt</Text>
                <Ionicons name="ios-play-outline" size={20} color="black" style={{ position: 'absolute', marginLeft: 70, marginTop: 40 }} />
                <Text style={{ position: 'absolute', marginLeft: 80, marginTop: 40 }}>  $5</Text>
                <AntDesign name="minuscircle" size={24} color="green" style={{ marginLeft: 120, marginTop: 20 }} />
                <AntDesign name="pluscircle" size={24} color="green" style={{ marginLeft: 30, marginTop: 20 }} />
            </View>
            <View style={{ marginTop: 10, marginLeft: 20, width: 350, height: 64, borderRadius: 6, borderColor: '#BCC1CA', borderWidth: 1, flexDirection: 'row' }}>
                <Image source={require("../assets/trong.png")} style={{ height: 60, width: 60, borderRadius: 4 }} />
                <Text style={{ fontSize: 16, fontWeight: '500', paddingLeft: 10 }}> Espresso</Text>
                <Ionicons name="ios-play-outline" size={20} color="black" style={{ position: 'absolute', marginLeft: 70, marginTop: 40 }} />
                <Text style={{ position: 'absolute', marginLeft: 80, marginTop: 40 }}>  $9</Text>
                <AntDesign name="minuscircle" size={24} color="green" style={{ marginLeft: 120, marginTop: 20 }} />
                <AntDesign name="pluscircle" size={24} color="green" style={{ marginLeft: 30, marginTop: 20 }} />
            </View>
            <View style={{ marginTop: 10, marginLeft: 20, width: 350, height: 64, borderRadius: 6, borderColor: '#BCC1CA', borderWidth: 1, flexDirection: 'row' }}>
                <Image source={require("../assets/trong.png")} style={{ height: 60, width: 60, borderRadius: 4 }} />
                <Text style={{ fontSize: 16, fontWeight: '500', paddingLeft: 10 }}> Capuchino</Text>
                <Ionicons name="ios-play-outline" size={20} color="black" style={{ position: 'absolute', marginLeft: 70, marginTop: 40 }} />
                <Text style={{ position: 'absolute', marginLeft: 80, marginTop: 40 }}>  $23</Text>
                <AntDesign name="minuscircle" size={24} color="green" style={{ marginLeft: 120, marginTop: 20 }} />
                <AntDesign name="pluscircle" size={24} color="green" style={{ marginLeft: 30, marginTop: 20 }} />
            </View>
            <View style={{ marginTop: 10, marginLeft: 20, width: 350, height: 64, borderRadius: 6, borderColor: '#BCC1CA', borderWidth: 1, flexDirection: 'row' }}>
                <Image source={require("../assets/trong.png")} style={{ height: 60, width: 60, borderRadius: 4 }} />
                <Text style={{ fontSize: 16, fontWeight: '500', paddingLeft: 10 }}> Weasel</Text>
                <Ionicons name="ios-play-outline" size={20} color="black" style={{ position: 'absolute', marginLeft: 70, marginTop: 40 }} />
                <Text style={{ position: 'absolute', marginLeft: 80, marginTop: 40 }}>  $20</Text>
                <AntDesign name="minuscircle" size={24} color="green" style={{ marginLeft: 120, marginTop: 20 }} />
                <AntDesign name="pluscircle" size={24} color="green" style={{ marginLeft: 30, marginTop: 20 }} />
            </View>
            <View style={{ marginTop: 10, marginLeft: 20, width: 350, height: 64, borderRadius: 6, borderColor: '#BCC1CA', borderWidth: 1, flexDirection: 'row' }}>
                <Image source={require("../assets/trong.png")} style={{ height: 60, width: 60, borderRadius: 4 }} />
                <Text style={{ fontSize: 16, fontWeight: '500', paddingLeft: 10 }}> Culi</Text>
                <Ionicons name="ios-play-outline" size={20} color="black" style={{ position: 'absolute', marginLeft: 70, marginTop: 40 }} />
                <Text style={{ position: 'absolute', marginLeft: 80, marginTop: 40 }}>  $0</Text>
                <AntDesign name="minuscircle" size={24} color="green" style={{ marginLeft: 120, marginTop: 20 }} />
                <AntDesign name="pluscircle" size={24} color="green" style={{ marginLeft: 30, marginTop: 20 }} />
            </View>
            <View style={{ marginTop: 10, marginLeft: 20, width: 350, height: 64, borderRadius: 6, borderColor: '#BCC1CA', borderWidth: 1, flexDirection: 'row' }}>
                <Image source={require("../assets/catimor.png")} style={{ height: 60, width: 60, borderRadius: 4 }} />
                <Text style={{ fontSize: 16, fontWeight: '500', paddingLeft: 10 }}> Catimor</Text>
                <Ionicons name="ios-play-outline" size={20} color="black" style={{ position: 'absolute', marginLeft: 70, marginTop: 40 }} />
                <Text style={{ position: 'absolute', marginLeft: 80, marginTop: 40 }}>  $9</Text>
                <AntDesign name="minuscircle" size={24} color="green" style={{ marginLeft: 120, marginTop: 20 }} />
                <AntDesign name="pluscircle" size={24} color="green" style={{ marginLeft: 30, marginTop: 20 }} />
            </View>
            <Pressable onPress={() => navigation.navigate("Screen04")}> <View style={{ width: 347, height: 44, marginLeft: 19, marginTop: 10, backgroundColor: "#EFB034", color: "white", alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>  Go to Cart</View></Pressable>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },

});

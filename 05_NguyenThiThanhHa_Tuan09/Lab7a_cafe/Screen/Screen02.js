import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function Screen02({ navigation, route }) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Pressable onPress={() => navigation.navigate("Screen01")}>
                    <AntDesign name="left" size={24} color="black" /> </Pressable>

                <Text style={{ fontSize: 24, fontWeight: '700', paddingLeft: 20 }}> Shops Near Me</Text>
                <Ionicons name="md-search" size={20} color="green" style={{ paddingLeft: 30 }} />


            </View>
            <Pressable onPress={() => navigation.navigate("Screen03")}>
                <View style={{ marginLeft: 27, backgroundColor: '#fff', width: 347, height: 200, borderRadius: 6 }}>
                    <Image source={require("../assets/trong.png")} style={{ height: 114, width: 347, resizeMode: 'contain' }} />
                    <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 5, backgroundColor: '#F3F4F6' }}>
                        <Foundation name="check" size={24} color="green" />
                        <Text style={{ color: "green", fontSize: 14, fontWeight: '400' }}>  Accepting Orders</Text>
                        <AntDesign name="clockcircleo" size={24} color="green" style={{ paddingLeft: 20 }} />
                        <Text style={{ color: "red" }}> 5-10 minutes</Text>
                        <Octicons name="location" size={24} color="green" style={{ paddingLeft: 30 }} />
                    </View>
                    <Text style={{ marginLeft: 7, fontSize: 16, fontWeight: '700', }}> Kitanda Espresso & Acai-U District</Text>
                    <Text style={{ marginLeft: 7, fontSize: 14, fontWeight: '400', color: '#171A1F' }}>1121 NE 45 St</Text>
                </View>

            </Pressable>
            <View style={{ marginLeft: 27, backgroundColor: '#fff', width: 347, height: 200, borderRadius: 6 }}>
                <Image source={require("../assets/Jewel.png")} style={{ height: 114, width: 347, resizeMode: 'contain' }} />
                <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 5, backgroundColor: '#F3F4F6' }}>
                    <Foundation name="lock" size={24} color="red" />
                    <Text style={{ color: "red", fontSize: 14, fontWeight: '400' }}> Tempory Unavailable</Text>
                    <AntDesign name="clockcircleo" size={24} color="green" style={{ paddingLeft: 20 }} />
                    <Text style={{ color: "red" }}> 5-10 minutes</Text>
                    <Octicons name="location" size={24} color="green" style={{ paddingLeft: 30 }} />
                </View>
                <Text style={{ marginLeft: 7, fontSize: 16, fontWeight: '700', }}> Jewel Box Cafe</Text>
                <Text style={{ marginLeft: 7, fontSize: 14, fontWeight: '400', color: '#171A1F' }}>1145 GE 54 St</Text>
            </View>

            <View style={{ marginLeft: 27, backgroundColor: '#fff', width: 347, height: 200, borderRadius: 6 }}>
                <Image source={require("../assets/càe.png")} style={{ height: 114, width: 347, resizeMode: 'contain' }} />
                <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 5, backgroundColor: '#F3F4F6' }}>
                    <Foundation name="lock" size={24} color="red" />
                    <Text style={{ color: "red", fontSize: 14, fontWeight: '400' }}> Tempory Unavailable</Text>
                    <AntDesign name="clockcircleo" size={24} color="green" style={{ paddingLeft: 20 }} />
                    <Text style={{ color: "red" }}> 5-10 minutes</Text>
                    <Octicons name="location" size={24} color="green" style={{ paddingLeft: 30 }} />
                </View>
                <Text style={{ marginLeft: 7, fontSize: 16, fontWeight: '700', }}> Javasti Cafe</Text>
                <Text style={{ marginLeft: 7, fontSize: 14, fontWeight: '400', color: '#171A1F' }}>1167 GE 54 St</Text>
            </View>

            <View style={{ marginLeft: 27, backgroundColor: '#fff', width: 347, height: 200, borderRadius: 6 }}>
                <Image source={require("../assets/Legend.png")} style={{ height: 114, width: 347, resizeMode: 'contain' }} />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'linear-gradient(0deg, #BCC1CA, #BCC1CA),linear-gradient(0deg, rgba(222, 225, 230, 0), rgba(222, 225, 230, 0))',


    },
});

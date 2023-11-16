import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Screen01({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, fontWeight: "700", marginLeft: 58, marginTop: 89 }}> Welcom to Cafe world</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>

                <Image source={require("../assets/Jewel.png")}
                    style={{ height: 62, width: 200, marginTop: 50 }}></Image>


                <Image source={require("../assets/càe.png")}
                    style={{ height: 62, width: 200, marginTop: 50 }}></Image>

                <Image source={require("../assets/trong.png")}
                    style={{ height: 62, width: 200, marginTop: 50 }}></Image>

            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Screen02")}>
                <View style={{
                    height: 50, width: 312, backgroundColor: '#00BDD6',marginLeft: 39,
                    marginTop: 40, borderRadius: 6, alignItems: 'center', justifyContent: 'center'
                }}>
                    <Text style={{ fontSize: 14,fontWeight:'400', color: 'white' }}>Get Starts</Text>
                </View>
            </TouchableOpacity>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DEE1E6',
        flex: 1


    },
});

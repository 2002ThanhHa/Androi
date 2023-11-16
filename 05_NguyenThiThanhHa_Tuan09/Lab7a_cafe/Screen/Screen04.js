import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { Ionicons, AntDesign, Foundation, Octicons } from '@expo/vector-icons';
export default function Screen04() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Pressable onPress={() => navigation.navigate("Screen03")}>
          <AntDesign name="left" size={24} color="black" /> </Pressable>

        <Text style={{ fontSize: 24, fontWeight: '700', paddingLeft: 20 }}>Yours Orders</Text>
        <Ionicons name="md-search" size={20} color="green" style={{ paddingLeft: 30 }} />

      </View>
      <View style={{ backgroundColor: '#00BDD6', height: 100, width: 347, borderRadius: 4, marginLeft: 24, marginTop: 10 }}>

        <Text style={{ color: 'white', fontWeight: '700', fontSize: 16, marginLeft: 16, marginTop: 24 }}>CAFE DELIVERY</Text>
        <Text style={{ color: 'white', fontWeight: '700', fontSize: 16, marginLeft: 16, marginTop: 24 }}>Order #18</Text>
        <Text style={{ color: 'white', fontWeight: '700', fontSize: 20, marginLeft: 290, marginTop: -50 }}> $5</Text>
      </View>
      <View style={{ backgroundColor: '#8353E2', height: 100, width: 347, borderRadius: 4, marginLeft: 24, marginTop: 10 }}>

        <Text style={{ color: 'white', fontWeight: '700', fontSize: 16, marginLeft: 16, marginTop: 24 }}>CAFE </Text>
        <Text style={{ color: 'white', fontWeight: '700', fontSize: 16, marginLeft: 16, marginTop: 24 }}>Order #18</Text>
        <Text style={{ color: 'white', fontWeight: '700', fontSize: 20, marginLeft: 290, marginTop: -50 }}> $25</Text>
      </View>
      <View style={{ marginTop: 10, marginLeft: 20, width: 350, height: 64, borderRadius: 6, borderColor: '#BCC1CA', borderWidth: 1, flexDirection: 'row' }}>
        <Image source={require("../assets/salt.png")} style={{ height: 60, width: 60, borderRadius: 4 }} />
        <Text style={{ fontSize: 16, fontWeight: '500', paddingLeft: 10 }}> Salt</Text>
        <Ionicons name="ios-play-outline" size={20} color="black" style={{ position: 'absolute', marginLeft: 70, marginTop: 40 }} />
        <Text style={{ position: 'absolute', marginLeft: 80, marginTop: 40 }}>  $5</Text>
        <AntDesign name="minuscircle" size={24} color="green" style={{ marginLeft: 120, marginTop: 20 }} />
        <AntDesign name="pluscircle" size={24} color="green" style={{ marginLeft: 30, marginTop: 20 }} />
      </View>

      <View style={{ marginTop: 10, marginLeft: 20, width: 350, height: 64, borderRadius: 6, borderColor: '#BCC1CA', borderWidth: 1, flexDirection: 'row' }}>
        <Image source={require("../assets/weasel.png")} style={{ height: 60, width: 60, borderRadius: 4 }} />
        <Text style={{ fontSize: 16, fontWeight: '500', paddingLeft: 10 }}> Weasel</Text>
        <Ionicons name="ios-play-outline" size={20} color="black" style={{ position: 'absolute', marginLeft: 70, marginTop: 40 }} />
        <Text style={{ position: 'absolute', marginLeft: 80, marginTop: 40 }}>  $20</Text>
        <AntDesign name="minuscircle" size={24} color="green" style={{ marginLeft: 120, marginTop: 20 }} />
        <AntDesign name="pluscircle" size={24} color="green" style={{ marginLeft: 30, marginTop: 20 }} />
      </View>

      <Pressable onPress={() => navigation.navigate("Screen01")}> <View style={{ width: 347, height: 44, marginLeft: 19, marginTop: 10, backgroundColor: "#EFB034", color: "white", alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
        PAY NOW</View></Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});

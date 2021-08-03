import React, {useState, useEffect} from "react"
import { 
 Text, 
 View, 
 TouchableOpacity, 
 StyleSheet, 
 Dimensions, 
 FlatList, 
 SafeAreaView 
} from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import API from "../services/api"

const Tab = createMaterialTopTabNavigator()
const totalWidth = Dimensions.get("window").width - 30;

export default () => {
 return (
  <Tab.Navigator tabBar={props => <MyTabBar {...props} />} initialRouteName="AII" swipeEnabled={false}>
   <Tab.Screen name="Tecnologia" component={EmAlta} />
   <Tab.Screen name="Noticias" component={Inscricoes} />
   <Tab.Screen name="Musica" component={AAA} />
   <Tab.Screen name="Todos" component={BB} />
  </Tab.Navigator>
 )
}

function MyTabBar({ state, descriptors, navigation, position }) {
 return (
  <View style={styles.TabContainer}>
   {state.routes.map((route, index) => {
    const { options } = descriptors[route.key];
    const label =
     options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;

    const isFocused = state.index === index;

    const onPress = () => {
     const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
     });

     if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
     }
    };

    const onLongPress = () => {
     navigation.emit({
      type: 'tabLongPress',
      target: route.key,
     });
    };

    return (
     <TouchableOpacity
      key={index}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
     >
      <TabMenuItem isFocused={isFocused} index={index} name={route.name.toString()} />
     </TouchableOpacity>
    );
   })}
  </View>
 );
}

export const EmAlta = () => {

 const [vamos, Setvamos] = useState([])


 const Item = ({ title }) => (
  <View style={styles.item}>
   <Text style={styles.title}>{title}</Text>
  </View>
 );

 const renderItem = ({ item }) => (
  <Item title={item.id} />
 );
useEffect( async () => {
 Setvamos(await API.videoCategory("28"))
},[])

console.log("conseguimosrrr" + vamos)
 return (
  <SafeAreaView style={styles.container}>
   <FlatList
    data={vamos}
    renderItem={renderItem}
    keyExtractor={item => item.id}
   />
  </SafeAreaView>
 );
}
export const Inscricoes = () => {
 return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

  </View>
 )
}

export const AAA = () => {
 return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   <Text>ALLLL</Text>
  </View>
 )
}
export const BB = () => {
 return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   <Text>UIIII</Text>
  </View>
 )
}

const TabMenuItem = ({ isFocused, index, name }) => {

 return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}>
   <View style={{ borderColor: "#CF1312", borderWidth: 1, padding: 6, paddingLeft: 13, paddingRight: 13, borderRadius: 25, backgroundColor: isFocused ? "#CF1312" : "white" }}>
    <Text style={{ color: isFocused ? "white" : "#CF1312", fontWeight: "bold", fontSize: 16, textAlign: "center", padding: 0 }}>{name}</Text>
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
 TabContainer: {
  alignItems: "center",
  justifyContent: "space-between",
  width: totalWidth,
  height: 45,
  flexDirection: "row",
  marginLeft: 15,
  marginRight: 15,
 }
})
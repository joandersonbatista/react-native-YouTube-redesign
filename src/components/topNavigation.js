import React from "react"
import {
 View,
 TouchableOpacity,
 StyleSheet,
 Dimensions,
 Text
} from "react-native"


export default ({ state, descriptors, navigation }) => {
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
      <TabMenuItem isFocused={isFocused} name={route.name.toString()} />
     </TouchableOpacity>
    );
   })}
  </View>
 );
}

const TabMenuItem = ({ isFocused, name }) => {

 return (
  <View style={styles.TabMenu}>
   <View style={[styles.ActiveTab, {backgroundColor: isFocused ? "#CF1312" : "white"}]}>
    <Text style={[styles.Text, {color: isFocused ? "white" : "#CF1312",}]}>{name}</Text>
   </View>
  </View>
 )
}

const totalWidth = Dimensions.get("window").width - 30;

const styles = StyleSheet.create({
 TabContainer: {
  alignItems: "center",
  justifyContent: "space-between",
  width: totalWidth,
  height: 45,
  flexDirection: "row",
  marginLeft: 15,
  marginRight: 15,
 },
 TabMenu: {
  flex: 1, 
  alignItems: "center", 
  justifyContent: "space-around"
 },
 ActiveTab: {
  borderColor: "#CF1312", 
  borderWidth: 1, 
  padding: 6, 
  paddingLeft: 13, 
  paddingRight: 13, 
  borderRadius: 25, 
 },
 Text: {
  fontWeight: "bold", 
  fontSize: 16, 
  textAlign: "center", 
  padding: 0
 }
})
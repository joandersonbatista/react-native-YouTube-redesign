import React, { useState, useEffect } from "react"
import Feather from "react-native-vector-icons/Feather"
import Antdesign from "react-native-vector-icons/AntDesign"
import {
 Text,
 View,
 Dimensions,
 StyleSheet,
 Animated,
 TouchableOpacity,
 Platform
} from "react-native"

const TabBarHeight = Dimensions.get('window').height * 0.09;
const totalWidth = Dimensions.get("window").width - 30;

export default function MyTabBar({ state, descriptors, navigation }) {

 useEffect(() => {
  animateSlider(state.index);
 }, [state.index]);

 const [translateValue] = useState(new Animated.Value(0));
 const tabWidth = totalWidth / state.routes.length ;

 const animateSlider = (index) => {
  Animated.spring(translateValue, {
   toValue: tabWidth * index,
   useNativeDriver: true,
   bounciness: 0
 }).start();
 }

 const focusedOptions = descriptors[state.routes[state.index].key].options;

 if (focusedOptions.tabBarVisible === false) {
  return null;
 }

 return (
  <View style={[styles.TabContainer, { width: totalWidth  }]}>
   <View style={{ flexDirection: 'row' }}>
    <Animated.View
     style={[
      styles.slider,
      {
       transform: [{ translateX: translateValue }],
       width: tabWidth - 40,
       marginRight: 20,
       marginLeft: 20
      },
     ]}
    />
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
       canPreventDefault: true,
       
      });

      if (!isFocused && !event.defaultPrevented) {
       navigation.navigate(route.name);
      }
      animateSlider(index)
     }

     const onLongPress = () => {
      navigation.emit({
       type: 'tabLongPress',
       target: route.key,
      });
     };

     return (
      <TouchableOpacity
       accessibilityRole="button"
       accessibilityState={isFocused ? { selected: true } : {}}
       accessibilityLabel={options.tabBarAccessibilityLabel}
       testID={options.tabBarTestID}
       onPress={onPress}
       onLongPress={onLongPress}
       style={{ flex: 1 }}
       key={index}
      >
       <BottomMenuItem
        iconName={label.toString()}
        isCurrent={isFocused}
        title={
         index == 0 ? "Início" :
         index == 1 ? "Em alta" : 
         index == 2 ? "Inscrições" :
         index == 3 ? "Inbox" : "Biblioteca"
        }
       />
      </TouchableOpacity>
     );
    })}
   </View>
  </View>
 );
}

const BottomMenuItem = ({ iconName, isCurrent, title }) => {
 return (
  <View
   style={{
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
   }}
  >
   {iconName == "folder"
    ?
    <Feather name="folder" size={TabBarHeight / 3} color={isCurrent ? "#CF1312" : "#808080"} />
    :
    <Antdesign name={iconName} size={TabBarHeight / 3} color={isCurrent ? "#CF1312" : "#808080"} />
   }
   <Text style={{ fontSize: 12, color: isCurrent ? "#CF1312" : "#808080" }}>{title}</Text>
  </View>
 );
};

const styles = StyleSheet.create({
 TabContainer: {
  position: "absolute",
  bottom: Platform.OS === "ios" ? 33 : 13,
  marginLeft: 15,
  marginRight: 15,
  height: TabBarHeight,
  borderRadius: 12.5,
  backgroundColor: "white",
  shadowColor: "#000",
  shadowOffset: {
   width: 0,
   height: 7,
  },
  shadowOpacity: 0.41,
  shadowRadius: 9.11,
  elevation: 14,
  alignItems: "center"
 },
 slider: {
  height: 3.5,
  position: "absolute",
  top: "94.5%",
  left: 0,
  bottom: 0,
  backgroundColor: "#C4302B",
  borderRadius: 10,
 },
})
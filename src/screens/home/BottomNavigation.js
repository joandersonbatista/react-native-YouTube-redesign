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
const totalWidth = Dimensions.get("window").width - 40;

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
       width: tabWidth - 20,
       marginRight: 10,
       marginLeft: 10
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
       />
      </TouchableOpacity>
     );
    })}
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 TabContainer: {
  position: "absolute",
  bottom: Platform.OS === "ios" ? 33 : 20,
  marginLeft: 20,
  marginRight: 20,
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
  height: 5,
  position: "absolute",
  top: "92.9%",
  left: 0,
  bottom: 0,
  backgroundColor: "red",
  borderRadius: 10,
  overflow: "hidden"
 },
})

const BottomMenuItem = ({ iconName, isCurrent }) => {
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
    <Feather name="folder" size={TabBarHeight / 3} color={isCurrent ? "red" : "#808080"} />
    :
    <Antdesign name={iconName} size={TabBarHeight / 3} color={isCurrent ? "red" : "#808080"} />
   }
   <Text style={{ fontSize: 12, color: isCurrent ? "red" : "#808080" }}>{iconName}</Text>
  </View>
 );
};

export const Home = () => {
 return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   <Text>Home</Text>
  </View>
 )
}
export const EmAlta = () => {
 return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   <Text>Em Alta</Text>

  </View>
 )
}
export const Inscricoes = () => {
 return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   <Text>Inscrições</Text>

  </View>
 )
}
export const Inbox = () => {
 return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   <Text>Inbox</Text>

  </View>
 )
}
export const Library = () => {
 return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   <Text>Livraria</Text>
  </View>
 )
}
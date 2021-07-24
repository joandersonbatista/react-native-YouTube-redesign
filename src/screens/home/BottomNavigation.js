import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {
    Text,
    View,
    Dimensions
} from "react-native"

const Tab = createBottomTabNavigator()
const windowHeight = Dimensions.get('window').height * 0.08;

export default () => {
    return (
        <Tab.Navigator tabBarOptions={{
            style: {
                bottom: 20,
                marginLeft: 20,
                marginRight: 20,
                height: windowHeight,
                borderRadius: 20
            }
        }}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Alta" component={EmAlta}/>
        </Tab.Navigator>
    )
}

const Home = () => {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>Home</Text>
        </View>
    )
}
const EmAlta = () => {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>Em Alta</Text>
        </View>
    )
}
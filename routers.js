import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./componentes/home";
import Login from "./componentes/login";



const Pilha = createStackNavigator()


export default function Routers({navigation}){
    return(
        <NavigationContainer>
            <Pilha.Navigator>

                <Pilha.Screen
                name='Home'
                component={Home}
                options={{ title: 'Home Akimi :) '}}
                />

                </Pilha.Screen>


            </Pilha.Navigator>
        </NavigationContainer>
    )
}
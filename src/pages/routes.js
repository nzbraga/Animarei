import { createNativeStackNavigator} from "@react-navigation/native-stack";

import Login from "./Login";
import Home from "./Home";
import Favorites from "./Favorites";

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Favoritos' component={Favorites}/>
        </Stack.Navigator>
    )
}

export default Routes;
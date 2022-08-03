import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {Home} from '../screens/Home';
import {CarDetails} from '../screens/CarDetails';
import {Scheduting} from '../screens/Scheduting';
import {SchedutingDetails} from '../screens/SchedutingDetails';
import {SchedutingComplete} from '../screens/SchedutingComplete';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="CarDetails"
                component={CarDetails}
            />
            <Screen 
                name="Scheduting"
                component={Scheduting}
            />
            <Screen 
                name="SchedutingDetails"
                component={SchedutingDetails}
            />
            <Screen 
                name="SchedutingComplete"
                component={SchedutingComplete}
            />
        </Navigator>
    )
}
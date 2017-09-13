import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Introduce extends Component {
    static navigationOptions = ({navigation})=>({
        title: 'Giới Thiệu',
        headerTitleStyle : {
            color: '#FF3864'
        },
        headerStyle: {
            backgroundColor: '#F7EA03'
        },
       
        // tabBarIcon:  <Icon name='store' size={30} color='#FFB900'/>,
        // headerLeft:  <TouchableOpacity
        //         onPress={()=>{navigation.navigate('DrawerOpen')}}
        //             >
        //             < Icon name='menu' size={30} color='#FF0000'/>
        //             </TouchableOpacity>
                   
                
});
    render(){
        return(
            <View style={{ 
                backgroundColor: '#FFFFFF',
            
             }}>
                <Text>
                    Introduce
                </Text>
            </View>
        );
    }
}
import React, { Component } from 'react';
import { View, Text,Icon,TouchableOpacity } from 'react-native';

export default class Account extends Component {
    static navigationOptions = ({navigation})=>({
        title: 'Quản Lí Tài Khoản',
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
                    Account
                </Text>
            </View>
        );
    }
}
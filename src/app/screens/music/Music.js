import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default class Music extends Component {
    static navigationOptions = ({navigation})=>({
        title: 'THE COFFEE APP',
        headerTitleStyle : {
            color: '#FFF'
        },
        headerStyle: {
            backgroundColor: '#600082'
        },
       
        tabBarIcon:  <Icon name='library-music' size={30} color='#560C7E'/>,
        headerLeft:  <TouchableOpacity
                onPress={()=>{navigation.navigate('DrawerOpen')}}
                    >
                    < Icon name='menu' size={30} color='#FFF' style={{ marginLeft: 10 }}/>
                    </TouchableOpacity>
                   
                
});
    render(){
        return(
            <View style={{ 
                backgroundColor: '#FFFFFF',
            
             }}>
                <Text>
                    Music
                </Text>
            </View>
        );
    }
}
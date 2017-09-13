import React, { Component } from 'react';
import { View, Text,
    FlatList,TouchableOpacity,StatusBar
 } from 'react-native';
 import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const mang = [
    {
        key: 1,
        title: 'Quản Lí Tài Khoản',
        icon: 'person',
        route: 'AccountScreen'
    },
    {
        key: 2,
        title: 'Hỗ Trợ',
        icon: 'phone',
        route: 'SupportScreen'
    },
    {
        key: 3,
        title: 'Giới Thiệu',
        icon: 'help',
        route: 'IntroduceScreen'
    },
    {
        key: 4,
        title: 'Đăng Xuất',
        icon: 'power-settings-new'
    }

];

export default class Menu extends Component {
    render(){
     
        return(
          
              <View style={{ justifyContent: 'center',alignContent: 'center'}}>
                  <StatusBar hidden={true}/>
               <FlatList
               data={mang}
               renderItem={({item}) => <TouchableOpacity onPress={()=>{
                   this.props.navigation.navigate(item.route);
               }}
               ><View
               style={{height: 50,alignContent: 'center',
               flexDirection: 'row',
               margin: 5,borderBottomWidth: 1,borderBottomColor: '#909090'
               }}
              >
                   <Icon name={item.icon} size={30} color='#ED4600'   />
                   <Text style={{paddingTop: 10,paddingLeft: 10}}>{item.title}</Text>
                   </View>
                   </TouchableOpacity>}
               />
              
               </View>
          
        );
    }
}
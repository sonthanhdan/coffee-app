import React, { Component } from 'react';
import { View, Text,TouchableOpacity,FlatList,

} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const mang = [
    {
        key: 1,
        title: '/The.Coffe.House.2017',
        icon: 'facebook'
    },
    {
        key: 2,
        title: '/thecoofeehouse.vn',
        icon: 'instatgram'
    },
    {
        key: 3,
        title: '0962 010 214',
        icon: 'phone'
    },
    {
        key: 4,
        title: 'thanhdan1995@outlook.com',
        icon: 'mail'
    },
];
export default class Support extends Component {
    static navigationOptions = ({navigation})=>({
        title: 'Hỗ Trợ',
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
           < FlatList
           data={mang}
           renderItem={({item})=>
           <TouchableOpacity>
               <View
               style={{ flexDirection:'row',borderBottomWidth: 1 }}
               >
                   <Icon name={item.icon} size={30} color='#000'/>
                    <Text>{item.title}</Text>
               </View>
           </TouchableOpacity>
           }
            />
        );
    }
}
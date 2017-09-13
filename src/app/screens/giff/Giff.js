import React, { Component } from 'react';
import { View, Text,
    TouchableOpacity,Image

} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default class Giff extends Component {
    static navigationOptions = ({navigation})=>({
        title: 'THE COFFEE APP',
        headerTitleStyle : {
            color: '#FFF'
        },
        headerStyle: {
            backgroundColor: '#00C3FF'
        },
       
        tabBarIcon:  <Icon name='card-giftcard' size={30} color='#00C4FF'/>,
        headerLeft:  <TouchableOpacity
                onPress={()=>{navigation.navigate('DrawerOpen')}}
                    >
                    < Icon name='menu' size={30} color='#FFF' style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                   
                
});
    render(){
        return(
            <View >
                <Image 
                style={{ width: 400,height: 300}}
                source={{ uri: 'https://s.inyourpocket.com/gallery/15478.jpg'}}/>
                <Text>
                Albeit a cookie cutter coffee house chain, the mood here is unexpectedly relaxing. This is due in large part to the attentive service that is in no way intrusive; a great venue to meet with colleagues or hang out with friends. The menu has a substantial offering of coffee, coffee cocktails, soups, salads, light breakfasts and business lunches. Also at A-3, B. Khmel’nyts’koho 30/10, 00:00 - 24:00; D-2, Sahaidachnoho 41, 00:00 - 24:00; B-3, Yaroslaviv Val 13/2, 08:00 - 23:00 and many others.
                </Text>
            </View>
        );
    }
}
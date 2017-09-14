import React, { Component } from 'react';
import { 
    View, Text,
    TouchableOpacity,
    ScrollView,Image,FlatList

} from 'react-native';
//import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const mang = [
    {
        key: 1,
        baihat: 'Duyên Kiếp',
        casi: 'Đan Nguyên',
        hinh: 'https://i.ytimg.com/vi/U34ETZlegNo/maxresdefault.jpg',
        luotnghe: '123456',
        link: 'http://download.f9.stream.nixcdn.com/781247b0a348e9f9669add5d4089761f/59ba48ae/NhacCuaTui837/DuyenKiep-DanNguyenBangTam-2669461.mp3'
    },
    {
        key: 2,
        baihat: 'Lại Nhớ Người Yêu',
        casi: 'Đan Nguyên',
        hinh: 'https://i.ytimg.com/vi/U34ETZlegNo/maxresdefault.jpg',
        luotnghe: '123456',
        link: ''
    },
    {
        key: 3,
        baihat: 'Hai Lối Mộng',
        casi: 'Đan Nguyên',
        hinh: 'https://i.ytimg.com/vi/U34ETZlegNo/maxresdefault.jpg',
        luotnghe: '123456',
        link: ''
    },
    {
        key: 4,
        baihat: 'Xin Được Làm Người Xa Lạ',
        casi: 'Đan Nguyên',
        hinh: 'https://i.ytimg.com/vi/U34ETZlegNo/maxresdefault.jpg',
        luotnghe: '123456',
        link: ''
    },
    {
        key: 5,
        baihat: 'Cám Ơn',
        casi: 'Đan Nguyên',
        hinh: 'https://i.ytimg.com/vi/U34ETZlegNo/maxresdefault.jpg',
        luotnghe: '123456',
        link: ''
    },
];

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
              
            
             }}>
               <View>
                <View>
                    <Image
                    source={{uri: 'https://i.ytimg.com/vi/U34ETZlegNo/maxresdefault.jpg'}}
                    style={{
                        width: 350,
                        height: 200
                    }}
                    />
                </View>
                <View
                style={{flexDirection: 'row',
                marginTop:40
                }}
                >
                    <TouchableOpacity>
                    <Icon name='play-circle-outline' size={70} color='#000'/>
                    </TouchableOpacity>
                  
                    <TouchableOpacity>
                    <Icon name='pause-circle-outline' size={70} color='#000'/>
                    </TouchableOpacity>
                   
                    <TouchableOpacity>
                    <Icon name='skip-next-circle-outline' size={70} color='#000'/>
                    </TouchableOpacity>
                  
                    <TouchableOpacity>
                    <Icon name='skip-previous-circle-outline' size={70} color='#000'/>
                    </TouchableOpacity>
                   
                    <TouchableOpacity>
                    <Icon name='speaker-wireless' size={70} color='#000'/>
                    </TouchableOpacity>
                   
                
                </View>
               </View>
             
               <ScrollView>
                   
                    <FlatList
                    data={mang}
                    renderItem={({item}) => 
                    <TouchableOpacity>
                    <View
                    style={{

                     
                        borderTopWidth: 0.5,
                        padding: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingBottom: 0
                    }}
                    >
                      
                       <Image
                        source={{uri: item.hinh}}
                        style={{
                            width: 70,
                            height:70,
                            borderRadius: 40
                        }}
                        />
                   
                     
                        <View style={{

                            margin: 10
                        }} >
                            <Text
                            style={{
                                fontSize: 20
                            }}
                            >{item.baihat}</Text>
                            <Text
                            style={{
                                fontSize: 14
                            }}
                            >{item.casi}</Text>
                            <Text
                            style={{
                                fontSize: 14,
                                color: '#FB8A04'
                            }}
                            >{item.luotnghe}</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    }
                    style={{
                        marginBottom: 50,
                        height: 1000
                    }}
                    />
               </ScrollView>
             
            </View>
        );
    }
}
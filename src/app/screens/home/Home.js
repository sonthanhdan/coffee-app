import React, { Component } from 'react';
import { View, Text,TouchableOpacity,
    FlatList,ScrollView,Image
 } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const mang = [
    {
        key: 1,
        image: 'https://facebook.github.io/react/img/logo_og.png',
        title: 'Khởi Đầu Tháng 9 Cùng Trà Đen ',
        tomtat: 'Albeit a cookie cutter coffee house chain, the mood here is unexpectedly relaxing. This is due in large part to the attentive service that is in no way intrusive; a great venue to meet with colleagues or hang out with friends.',
        dathang:'OrderScreen',
        chitiet:'DetailScreen'
    
    },
    {
        key: 2,
        image: 'https://facebook.github.io/react/img/logo_og.png',
        title: 'Khởi Đầu Tháng 9 Cùng Trà Đen ',
        tomtat: 'Albeit a cookie cutter coffee house chain, the mood here is unexpectedly relaxing. This is due in large part to the attentive service that is in no way intrusive; a great venue to meet with colleagues or hang out with friends.',
        dathang:'OrderScreen',
        chitiet:'DetailScreen'
    
    },
    {
        key: 3,
        image: 'https://facebook.github.io/react/img/logo_og.png',
        title: 'Khởi Đầu Tháng 9 Cùng Trà Đen ',
        tomtat: 'Albeit a cookie cutter coffee house chain, the mood here is unexpectedly relaxing. This is due in large part to the attentive service that is in no way intrusive; a great venue to meet with colleagues or hang out with friends.',
        dathang:'OrderScreen',
        chitiet:'DetailScreen'
    
    },
    {
        key: 4,
        image: 'https://facebook.github.io/react/img/logo_og.png',
        title: 'Khởi Đầu Tháng 9 Cùng Trà Đen ',
        tomtat: 'Albeit a cookie cutter coffee house chain, the mood here is unexpectedly relaxing. This is due in large part to the attentive service that is in no way intrusive; a great venue to meet with colleagues or hang out with friends.',
        dathang:'OrderScreen',
        chitiet:'DetailScreen'
    
    },
];

export default class Home extends Component {

    static navigationOptions = ({navigation})=>({
        title: 'THE COFFEE APP',
        headerTitleStyle : {
            color: '#FF3864'
        },
        headerStyle: {
            backgroundColor: '#F7EA03'
        },
       
        tabBarIcon:  <Icon name='store' size={30} color='#FFB900' style={{ margin: 0 }}/>,
        headerLeft:  <TouchableOpacity
                onPress={()=>{navigation.navigate('DrawerOpen')}}
                    >
                    < Icon name='menu' size={30} color='#FF0000' style={{ marginLeft: 10 }}/>
                    </TouchableOpacity>
                   
                
});
    render(){
        return(
           
              
            <ScrollView
            style={{ height: 2000 }}
            >
            <View> 
                <View
                style={{ flexDirection: 'row' }}
                >
                    <Image
                    style={{width: 60, height: 60,borderRadius: 30,margin: 10}}
                    source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                    />
                    <View
                    style={{
                        marginTop: 10
                    }}
                    >
                        <Text
                        style={{ 
                            fontSize: 20,color: '#F13300',fontFamily: 'avenir'
                         }}
                        >Thanh Dân</Text>
                        <Text style={{ 
                            fontSize: 13
                         }}>Thành Viên Mới</Text>
                        <Text style={{ 
                            fontSize: 13
                         }}>Sao</Text>
                    </View>
                </View>
                <View
                style={{ flexDirection: 'row', justifyContent: 'space-between',
                
                margin: 10 }}
                >
                    <Text>Thành viên mới</Text>
                    <Text>Vàng</Text>
                    <Text>Kim Cương</Text>
                </View>
                <View
                style={{ 
                    flexDirection: 'row', 
                    justifyContent: 'space-between',
                    margin: 10
                    
                     }}
                >
                    <TouchableOpacity>
                    <Text>Tìm Hiểu Chương Trình Thành Viên</Text>
                    </TouchableOpacity>
                    <Icon name='help' size={30} color='#000' />
                </View>
                <View>
                    <Text></Text>
                </View>
            </View>
            <FlatList
             data={mang}
             renderItem={({item}) => <View style={{ margin: 10 }}>
             <Image
             style={{width: 390, height: 200}}
                    source={{uri: item.image}}
            />
            <Text
            style={{ 

                fontFamily: 'avenir',
                color: '#F9511E',
                fontSize: 18,
                marginTop: 5,
                marginBottom: 5
             }}
            >{item.title}</Text>
            <Text
            style={{ 

                fontFamily: 'avenir',
                marginTop: 5,
                marginBottom: 5
             }}
            >{item.tomtat}</Text>
              <View
               style={{ flexDirection: 'row' }}
              >
              <TouchableOpacity
              onPress={()=>{
                  this.props.navigation.navigate(item.dathang);
              }}
              >
                    <View style={{ 
                        height: 30, width: 100,
                        margin: 5,
                        borderWidth: 1,
                        borderColor: '#FF00B1',
                        justifyContent: 'center',
                        alignItems: 'center'
                         }} >
                        <Text>Đặt Hàng</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                  this.props.navigation.navigate(item.chitiet);
                }}
                >
                    <View style={{ 
                        height: 30, width: 100,
                        margin: 5,
                        borderWidth: 1,
                        borderColor: '#FF00B1',
                        justifyContent: 'center',
                        alignItems: 'center'
                         }} >
                        <Text>Chi Tiết</Text>
                    </View>
                </TouchableOpacity>
              </View>
             </View>}
             />
           
            </ScrollView>
             
            
        );
    }
}
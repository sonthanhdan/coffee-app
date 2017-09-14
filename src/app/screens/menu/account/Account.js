import React, { Component } from 'react';
import { 
    View, Text,Icon,TouchableOpacity,
    ScrollView,Image,TextInput

} from 'react-native';

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
           <ScrollView>
               <View
               style={{height: 200, backgroundColor: '#EB3A00',
               justifyContent: 'center',alignItems: 'center'
               }}
               >
                   <Image source={{uri: 'https://cdn3.dualshockers.com/wp-content/uploads/2017/02/neytiri-avatar-5824.jpg'}}
                   style={{
                       width:120,
                       height: 120,
                       borderRadius: 60
                   }}
                   />
               </View>
               <View
               style={{justifyContent: 'center',alignItems: 'center'}}
               >
               
                  <View
                  style={{
                      margin: 10,width: 300
                  }}
                  >
                    <Text>Họ Tên</Text>
                    <TextInput
                     style={{height: 40, borderColor: 'gray', borderWidth: 1,
                     paddingLeft: 10,
                     backgroundColor: '#F4FCFF'
                     }}
                     onChangeText={(text) => console.log(text)}
                     value='Sơn Thanh Dân'
                     underlineColorAndroid='#F4FCFF'
                    />
                  </View>
                  
                  <View
                  style={{
                      margin: 10,width: 300
                  }}
                  >
                    <Text>Giới Tính</Text>
                    <TextInput
                     style={{height: 40, borderColor: 'gray', borderWidth: 1,
                     paddingLeft: 10,
                     backgroundColor: '#F4FCFF'
                     }}
                     onChangeText={(text) => console.log(text)}
                     value='Nam'
                     underlineColorAndroid='#F4FCFF'
                    />
                  </View>

                  <View
                  style={{
                      margin: 10,width: 300
                  }}
                  >
                    <Text>Ngày Sinh</Text>
                    <TextInput
                     style={{height: 40, borderColor: 'gray', borderWidth: 1,
                     paddingLeft: 10,
                     backgroundColor: '#F4FCFF'
                     }}
                     onChangeText={(text) => console.log(text)}
                     value='25/10/1995'
                     underlineColorAndroid='#F4FCFF'
                    />
                  </View>
                  <View
                  style={{
                      margin: 10,width: 300
                  }}
                  >
                    <Text>Khu Vực</Text>
                    <TextInput
                     style={{height: 40, borderColor: 'gray', borderWidth: 1,
                     paddingLeft: 10,
                     backgroundColor: '#F4FCFF'
                     }}
                     onChangeText={(text) => console.log(text)}
                     value='Cần Thơ'
                     underlineColorAndroid='#F4FCFF'
                    />
                  </View>

                  <View
                  style={{
                      margin: 10,width: 300
                  }}
                  >
                    <Text>Số Điện Thoại</Text>
                    <TextInput
                     style={{height: 40, borderColor: 'gray', borderWidth: 1,
                     paddingLeft: 10,
                     backgroundColor: '#F4FCFF'
                     }}
                     onChangeText={(text) => console.log(text)}
                     value='0962 010 214'
                     underlineColorAndroid='#F4FCFF'
                    />
                  </View>

                  <View
                  style={{
                      margin: 10,width: 300
                  }}
                  >
                    <Text>Email</Text>
                    <TextInput
                     style={{height: 40, borderColor: 'gray', borderWidth: 1,
                     paddingLeft: 10,
                     backgroundColor: '#F4FCFF'
                     }}
                     onChangeText={(text) => console.log(text)}
                     value='thanhdan1995@outlook.com'
                     underlineColorAndroid='#F4FCFF'
                    />
                  </View>
                  <TouchableOpacity>
                      <View 
                      style={{
                          height: 40,width: 300,backgroundColor: '#FC5522',
                          justifyContent: 'center',alignItems: 'center',
                          marginTop: 10,
                          marginBottom: 30,borderRadius: 4
                          }}
                      >
                          <Text>Lưu Lại</Text>
                      </View>
                  </TouchableOpacity>

               </View>
           </ScrollView>
        );
    }
}
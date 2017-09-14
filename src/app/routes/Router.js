import React, { Component } from 'react';
import { TouchableOpacity,
    ScrollView,Platform
} from 'react-native';
import {
    StackNavigator,TabNavigator,DrawerNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import Home from './../screens/home/Home';
import Cart from './../screens/cart/Cart';
import Giff from './../screens/giff/Giff';
import Contact from './../screens/contact/Contact';
import Music from './../screens/music/Music';
import Menu from './../screens/menu/Menu';
import Account from './../screens//menu/account/Account';
import Support from './../screens/menu/support/Support';
import Introduce from './../screens/menu/introduce/Introduce';
import Order from './../screens/home/order/Order';
import Detail from './../screens/home/detail/Detail';

const HomeStack = StackNavigator({
    HomeScreen: {
        screen: Home
    },
    AccountScreen: {
        screen: Account
    },
    SupportScreen: {
        screen: Support
    },
    IntroduceScreen: {
        screen: Introduce
    },
    OrderScreen: {
        screen: Order
    },
    DetailScreen: {
        screen: Detail
    }
});

const CartStack = StackNavigator({
    CartScreen: {
        screen: Cart
    }
});

const GiffStack = StackNavigator({
    GiffStack: {
        screen: Giff
    }
});

const ContactStack = StackNavigator({
    ContactScreen: {
        screen: Contact
    }
});

const MusicStack = StackNavigator({
    MusicScreen: {
        screen: Music
    }
});

const MenuStack = StackNavigator({
    MenuScreen: {
        screen: Menu
    },
    AccountScreen: {
        screen: Account
    },
    SupportScreen: {
        screen: Support
    },
    IntroduceScreen: {
        screen: Introduce
    }

});

/**
 * Tab bar navigation
 */

 const MyTab = TabNavigator({
     HomeTab: {
         screen: HomeStack
     },
     CartTab: {
         screen: CartStack
     },
     GiffTab: {
         screen: GiffStack
     },
     ContactTab: {
         screen: ContactStack
     },
     MusicTab: {
         screen: MusicStack
     }
 },
 {
    ...Platform.select({
        ios: {
            tabBarPosition: 'bottom'
        },
        android: {
            tabBarPosition: 'bottom'
        },
      }),
   
    tabBarOptions: {
      activeTintColor: '#e91e63',
      showLabel:false,
      showIcon: true,
      activeBackgroundColor : (Platform.OS === 'ios') ? '#616180' : '#616180',// active color
      style: {
        backgroundColor: '#FFFFFF'
      },
      tabStyle: {
        //backgroundColor: '#FFFFFF'
      }

    },
  }
);

 const Router = DrawerNavigator({
     Menu: {
         screen: MyTab
     }
 },
 {
    // drawerWidth: 200,
    // drawerPosition: 'right',
    contentComponent: props => <Menu {...props} />
  }
);

 module.exports = Router;



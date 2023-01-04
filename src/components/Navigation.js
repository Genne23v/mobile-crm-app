import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="People"
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#80cbc4',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#26a69a',
          },
        }}>
        <Tab.Screen
          name="People"
          component={PeopleList}
          options={{
            tabBarLabel: 'People',
            tabBarIcon: ({color}) => (
              <Icon name="user" size={50} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddPerson}
          options={{
            tabBarLabel: 'Add',
            tabBarIcon: ({color}) => (
              <Icon name="plus" size={50} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Company"
          component={CompanyList}
          options={{
            tabBarLabel: 'Company',
            tabBarIcon: ({color}) => (
              <Icon name="archive" size={50} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

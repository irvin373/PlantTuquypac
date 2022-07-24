import * as React from 'react';
import { NavigationContainer,  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AppRegistry, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {name as appName} from './app.json';
import TQImage from './src/components/TQImage';
import DataBase from './src/utils/DataBase';
import Camera from './src/screens/Camera.screen';
import PlantScreen from './src/screens/Plants.screen';
import PlantDetail from './src/screens/PlantDetail.screen';
import RecipeDetail from './src/screens/RecipeDetail.screen';
import RecipeScreen from './src/screens/Recipes.screen';
import InformationScreen from './src/screens/Info.screen';
import color from './src/utils/color';

const headerStyle = {
  headerStyle: {
    backgroundColor: color.greenHeader,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 21
  },
};

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen options={headerStyle} name="Plantas" component={PlantScreen} />
      <HomeStack.Screen options={headerStyle} name="PlantDetail" component={PlantDetail} />
    </HomeStack.Navigator>
  );
}

const CameraStack = createStackNavigator();
function CameraStackScreen() {
  return (
    <CameraStack.Navigator>
      <HomeStack.Screen options={headerStyle} name="Camara" component={Camera} />
    </CameraStack.Navigator>
  );
}

const InformationStack = createStackNavigator();
function InformationStackScreen() {
  return (
    <CameraStack.Navigator>
      <HomeStack.Screen options={headerStyle} name="EL SISTEMA TUKUYPAQ" component={InformationScreen} />
    </CameraStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen options={headerStyle} name="Recetas" component={RecipeScreen} />
      <SettingsStack.Screen options={headerStyle} name="RecipeDetails" component={RecipeDetail} />
    </SettingsStack.Navigator>
  );
}

function TabOption(name, icon) {
  return ({
    tabBarLabel: name,
    tabBarIcon: ({ color, size }) => (<TQImage iconSize={24} name={icon} color={color} />)
  })
}

const Tab = createBottomTabNavigator();
class HomeApp extends React.Component {
  state = {
    ready: false
  };
  async componentDidMount() {
    await DataBase.populateDB();
    // const data = await DataBase.getQuery("SELECT p.name, m.name as medicalGroup FROM Plant p INNER JOIN MedicalGroup m on p.MedicalGroupId = m.id;");
    this.setState({ready: true});
  }

  render() {
    if (!this.state.ready) {
      return(<View />)
    }
    return (
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
            activeTintColor: color.greenHeader,
          }}>
          <Tab.Screen options={TabOption('Plantas', 'plant')} name="Plantas" component={HomeStackScreen} />
          <Tab.Screen options={TabOption('Camara', 'camara')} name="Camara" component={CameraStackScreen} />
          <Tab.Screen options={TabOption('Recetas', 'tea')} name="Recetas" component={SettingsStackScreen} />
          <Tab.Screen options={TabOption('Informacion', 'plant')} name="Informacion" component={InformationStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

AppRegistry.registerComponent(appName, () => HomeApp);

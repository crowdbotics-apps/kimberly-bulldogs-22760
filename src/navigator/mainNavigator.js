import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList175621Navigator from '../features/ArticleList175621/navigator';
import ArticleList175620Navigator from '../features/ArticleList175620/navigator';
import ArticleList175619Navigator from '../features/ArticleList175619/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList175621: { screen: ArticleList175621Navigator },
ArticleList175620: { screen: ArticleList175620Navigator },
ArticleList175619: { screen: ArticleList175619Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

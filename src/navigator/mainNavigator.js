import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings175688Navigator from '../features/Settings175688/navigator';
import Settings175680Navigator from '../features/Settings175680/navigator';
import UserProfile175678Navigator from '../features/UserProfile175678/navigator';
import ArticleList175640Navigator from '../features/ArticleList175640/navigator';
import ArticleList175639Navigator from '../features/ArticleList175639/navigator';
import ArticleList175638Navigator from '../features/ArticleList175638/navigator';
import ArticleList175621Navigator from '../features/ArticleList175621/navigator';
import ArticleList175620Navigator from '../features/ArticleList175620/navigator';
import ArticleList175619Navigator from '../features/ArticleList175619/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings175688: { screen: Settings175688Navigator },
Settings175680: { screen: Settings175680Navigator },
UserProfile175678: { screen: UserProfile175678Navigator },
ArticleList175640: { screen: ArticleList175640Navigator },
ArticleList175639: { screen: ArticleList175639Navigator },
ArticleList175638: { screen: ArticleList175638Navigator },
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

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList175750Navigator from '../features/ArticleList175750/navigator';
import ArticleList175749Navigator from '../features/ArticleList175749/navigator';
import ArticleList175748Navigator from '../features/ArticleList175748/navigator';
import BlankScreen128175747Navigator from '../features/BlankScreen128175747/navigator';
import ArticleList175730Navigator from '../features/ArticleList175730/navigator';
import ArticleList175729Navigator from '../features/ArticleList175729/navigator';
import ArticleList175728Navigator from '../features/ArticleList175728/navigator';
import UserProfile175718Navigator from '../features/UserProfile175718/navigator';
import Tutorial175717Navigator from '../features/Tutorial175717/navigator';
import NotificationList175689Navigator from '../features/NotificationList175689/navigator';
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
ArticleList175750: { screen: ArticleList175750Navigator },
ArticleList175749: { screen: ArticleList175749Navigator },
ArticleList175748: { screen: ArticleList175748Navigator },
BlankScreen128175747: { screen: BlankScreen128175747Navigator },
ArticleList175730: { screen: ArticleList175730Navigator },
ArticleList175729: { screen: ArticleList175729Navigator },
ArticleList175728: { screen: ArticleList175728Navigator },
UserProfile175718: { screen: UserProfile175718Navigator },
Tutorial175717: { screen: Tutorial175717Navigator },
NotificationList175689: { screen: NotificationList175689Navigator },
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

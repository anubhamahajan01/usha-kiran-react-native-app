import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';
import LoginScreen from 'App/Containers/LoginScreen/LoginScreen';
import SignupScreen from 'App/Containers/Signup/SignupScreen';
import DashboardScreen from 'App/Containers/Dashboard/DashboardScreen';
import SubjectSelectionScreen from 'App/Containers/SubjectSelection/SubjectSelectionScreen';
import ClassSelectScreen from 'App/Containers/ClassSelect/ClassSelectScreen';
import NotificationScreen from 'App/Containers/Notification/NotificationScreen';
import DonationCategoriesScreen from 'App/Containers/DonationCategoriesScreen/DonationCategoriesScreen';
import DonationDetailsScreen from 'App/Containers/DonationDetailsScreen/DonationDetailsScreen';
import RequestSuccessScreen from 'App/Containers/RequestSuccessScreen/RequestSuccessScreen';
import EnterEmailScreen from 'App/Containers/EnterEmailScreen/EnterEmailScreen';
import CheckEmailScreen from 'App/Containers/CheckEmailScreen/CheckEmailScreen';
import BlogListingScreen from 'App/Containers/BlogListingScreen/BlogListingScreen';
import BlogDetailScreen from 'App/Containers/BlogDetailScreen/BlogDetailScreen';
import ProductListingScreen from 'App/Containers/ProductListingScreen/ProductListingScreen';

const AuthNavigator = createSwitchNavigator(
  {
    LoginScreen: LoginScreen,
    SignupScreen: SignupScreen,
    EnterEmailScreen: EnterEmailScreen,
    CheckEmailScreen: CheckEmailScreen,
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
);

// const ProductsNavigator = createStackNavigator(
//   {
//     ProductListingScreen: ProductListingScreen,
//   },
//   {
//     initialRouteName: 'ProductListingScreen',
//     headerMode: 'none',
//   }
// );

// const NewsNavigator = createStackNavigator(
//   {
//     BlogListingScreen: BlogListingScreen,
//     BlogDetailScreen: BlogDetailScreen,
//   },
//   {
//     initialRouteName: 'BlogListingScreen',
//     headerMode: 'none',
//   }
// );

const DonationNavigator = createStackNavigator(
  {
    DonationCategoriesScreen: DonationCategoriesScreen,
    DonationDetailsScreen: DonationDetailsScreen,
  },
  {
    initialRouteName: 'DonationCategoriesScreen',
    headerMode: 'none',
  }
);

const EducateNavigator = createStackNavigator(
  {
    SubjectSelectionScreen: SubjectSelectionScreen,
    ClassSelectScreen: ClassSelectScreen,
  },
  {
    initialRouteName: 'SubjectSelectionScreen',
    headerMode: 'none',
  }
);

const RequestSuccessNavigator = createSwitchNavigator(
  {
    RequestSuccessScreen: RequestSuccessScreen,
  },
  {
    initialRouteName: 'RequestSuccessScreen',
    headerMode: 'none',
  }
);

const MainNavigator = createStackNavigator(
  {
    DashboardScreen: DashboardScreen,
    DonationNavigator,
    EducateNavigator,
    // NewsNavigator,
    // ProductsNavigator,
  },
  {
    initialRouteName: 'DashboardScreen',
    headerMode: 'none',
  }
);

const StackNavigator = createSwitchNavigator(
  {
    AuthNavigator,
    MainNavigator,
    RequestSuccessNavigator,
    MainScreen: SplashScreen,
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(StackNavigator);

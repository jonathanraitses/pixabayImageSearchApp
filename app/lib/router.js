import { createMaterialTopTabNavigator } from 'react-navigation';
import SearchScreen from '../views/search/SearchScreen';
import ResultsScreen from '../views/results/ResultsScreen';
import DetailsScreen from '../views/details/DetailsScreen';

const AppNavigator = createMaterialTopTabNavigator(
  {
    Search: SearchScreen,
    Results: ResultsScreen,
    Details: DetailsScreen,
  },
);

export default AppNavigator;

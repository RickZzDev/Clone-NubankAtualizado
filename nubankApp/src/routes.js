import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main/index';

const Routes = createAppContainer(createSwitchNavigator({ Main }));

export default Routes;

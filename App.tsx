import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigatorWrapper from './src/navigators/NavigatorWrapper'


class App extends React.Component {
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {

    return (
      <NavigationContainer>
        <NavigatorWrapper />
      </NavigationContainer>
    )
  }
}

export default App
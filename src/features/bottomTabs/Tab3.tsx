import React from 'react'
import {
    Dimensions,
    Image,
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native'

import COLORS from '../../constants/colors'
import Style from "../../constants/styles";
import { FONT_FAMILIES } from '../../constants/fonts'
import localizedStrings from '../../localization'
import { NAVIGATORS } from '../../constants/navigators'

import { DefaultButton } from '../../components/DefaultButton'
import ColorButton  from '../../components/ColorButton'

interface Props {

}

const { width: SCREEN_WIDTH } = Dimensions.get('screen')


class Tab3 extends React.Component<Props> {

    componentDidMount() {
        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
            <View style={Style.container}>
                <Text>{localizedStrings.welcome.welcomeText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

  
})

export default Tab3

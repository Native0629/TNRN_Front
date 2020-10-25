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
import { getScreenOptions } from '../../utils/navigation'

interface Props {

}

const { width: SCREEN_WIDTH } = Dimensions.get('screen')


class Tab1 extends React.Component<Props> {

    componentDidMount() {
        const options = {
            title: localizedStrings.home.title,
            showMenuButton: true,
            showSearchButton: true,
        }
        this.props.navigation.setOptions(getScreenOptions(options, this.props.navigation))
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

export default Tab1

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


class Welcome extends React.Component<Props> {

    componentDidMount() {
        StatusBar.setBarStyle('light-content')
    }

    onLoginButtonPress = () => {
        this.props.navigation.navigate(NAVIGATORS.LOGIN.name)
    }

    onSignUpButtonPress = () => {
        this.props.navigation.navigate(NAVIGATORS.REGISTER.name)
    }

    render() {
        return (
            <View style={Style.container}>
                <ImageBackground
                    style={styles.background}
                    source={require('../../assets/images/splash.png')}>
                    
                    <View style={styles.backgroundOverlay} />

                    <View style={styles.topContent}>
                        <Image
                            source={require('../../assets/images/s_logo.png')}
                            resizeMode={'cover'}
                            style={styles.logo}
                        />
                        <Text style={styles.welcomeText}>
                            {localizedStrings.welcome.welcomeText}
                        </Text>
                    </View>

                    <View style={styles.bottomContent}>
                        <DefaultButton
                            style={styles.loginButton}
                            text={localizedStrings.welcome.login}
                            onPress={this.onLoginButtonPress}
                        />
                        <ColorButton
                            style={styles.signUpButton}
                            text={localizedStrings.welcome.signUp}
                            onPress={this.onSignUpButtonPress}
                        />
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    backgroundOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: COLORS.black,
        opacity: 0.23,
    },
    topContent: {
        alignItems: 'stretch',
        marginTop: '14%',
    },
    logo: {
        width: SCREEN_WIDTH,
    },
    welcomeText: {
        color: COLORS.white,
        textAlign: 'center',
        fontFamily: FONT_FAMILIES.Bold,
        fontSize: 12,
    },
    bottomContent: {
        alignItems: 'stretch',
        marginBottom: 23,
        paddingHorizontal: 37,
    },
    loginButton: {
        marginBottom: 22,
    },
    signUpButton: {},
})

export default Welcome

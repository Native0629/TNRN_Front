import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { get, isEmpty } from 'lodash'

import Style from "../../constants/styles";
import COLORS from '../../constants/colors'
import { NAVIGATORS } from '../../constants/navigators'
import localizedStrings from '../../localization'
import { getScreenOptions } from '../../utils/navigation'

import { IconType } from '../../components/Icon/Icon'
import { DefaultButton } from '../../components/DefaultButton'
import DefaultInput from '../../components/DefaultInput'
import ErrorsList from '../../components/ErrorsList'
import LoginWithFacebookButton from '../../components/LoginWithFacebookButton'

export const openUrl = async (url = '') => {
    try {
      const canOpenUrl = await Linking.canOpenURL(url)
      if (canOpenUrl) {
        let urlToOpen = url
        if (!urlToOpen.startsWith('http') && !urlToOpen.startsWith('https')) {
          urlToOpen = `http://${urlToOpen}`
        }
        await Linking.openURL(urlToOpen)
      }
    } catch (error) {}
  }
  

interface Props {
    navigation: any
    success: boolean
    error: string
}

interface State {
    email: string
    password: string
    name: string
    emailError: boolean
    passwordError: boolean
    nameError: boolean
    generalErrors: string[]
    showRegisterSuccessModal: boolean
}

class Register extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            email: get(props.route, 'params.email', ''),
            password: '',
            name: get(props.route, 'params.name', ''),
            emailError: false,
            passwordError: false,
            nameError: false,
            generalErrors: [],
            showRegisterSuccessModal: false,
        }

    }


    componentDidMount() {

        const options = {
            showLogo: false,
            showBackButton: true,
            onBackButtonPress: this.props.navigation.goBack,
            title: localizedStrings.register.title,
        }
        this.props.navigation.setOptions(getScreenOptions(options, this.props.navigation))
    }

    componentDidUpdate(prevProps: Props) {

    }

    onRegisterAccountSuccess = () => {
        this.setState({
            showRegisterSuccessModal: true,
        })
    }

    onEmailTextChange = (text: string) => {
        this.setState({
            email: text,
            emailError: false,
        })
    }

    onPasswordTextChange = (text: string) => {
        this.setState({
            password: text,
            passwordError: false,
        })
    }

    onNameTextChange = (text: string) => {
        this.setState({
            name: text,
            nameError: false,
        })
    }

    validateAll = () => {
        const { email, password, name } = this.state
        const emailError = isEmpty(email)
        const passwordError = isEmpty(password) || password.length < 6
        const nameError = isEmpty(name)

        this.setState({
            emailError,
            passwordError,
            nameError,
            generalErrors: [],
        })

        return !emailError && !passwordError && !nameError
    }

    onSignUpButtonPress = () => {
        const { registerAccount } = this.props
        const { email, password, name } = this.state
        const data = { email, password, name }
        if (this.validateAll()) {

        }
    }

    onSignUpWithFacebookButtonPress = () => {

    }

    onPrivacyLinkPress = () => {
        openUrl('http://melaninpeople.com/html/privacy-policy.html')
    }

    render() {
        const {
            email,
            name,
            password,
            emailError,
            passwordError,
            nameError,
            generalErrors,
        } = this.state

        return (
            <KeyboardAwareScrollView
                style={Style.background}
                contentContainerStyle={Style.container}
                scrollEnabled={false}
                keyboardShouldPersistTaps={'handled'}>

                <View style={styles.content}>
                    <View style={styles.topContent}>
                        <DefaultInput
                            containerStyle={Style.mb_20}
                            placeholder={localizedStrings.register.emailInput.placeholder}
                            iconType={IconType.MaterialIcons}
                            iconName={'email'}
                            autoFocus={true}
                            keyboardType={'email-address'}
                            onChangeText={this.onEmailTextChange}
                            autoCapitalize={'none'}
                            hasError={emailError}
                            value={email}
                        />

                        <DefaultInput
                            containerStyle={Style.mb_20}
                            placeholder={localizedStrings.register.passwordInput.placeholder}
                            iconType={IconType.MaterialIcons}
                            iconName={'lock'}
                            onChangeText={this.onPasswordTextChange}
                            autoCapitalize={'none'}
                            secureTextEntry={true}
                            hasError={passwordError}
                            value={password}
                        />

                        <DefaultInput
                            containerStyle={Style.mb_20}
                            placeholder={localizedStrings.register.nameInput.placeholder}
                            iconType={IconType.MaterialIcons}
                            iconName={'person'}
                            onChangeText={this.onNameTextChange}
                            autoCapitalize={'words'}
                            hasError={nameError}
                            value={name}
                        />

                        <ErrorsList errors={generalErrors} style={styles.errorsList} />
                    </View>

                    <View style={styles.bottomContent}>
                        <DefaultButton
                            style={styles.signUpButton}
                            text={localizedStrings.register.signUpButton}
                            onPress={this.onSignUpButtonPress}
                        />
                        <LoginWithFacebookButton
                            style={styles.signUpWithFacebookButton}
                            text={localizedStrings.register.signUpWithFacebookButton}
                            onPress={this.onSignUpWithFacebookButtonPress}
                        />
                        <TouchableOpacity onPress={this.onPrivacyLinkPress}>
                            <Text style={styles.privacyText}>
                                By signing up, you agree to our{' '}
                                <Text style={styles.privacyLink}>
                                    Terms, Privacy Policy and End User Agreement
                            </Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: 37,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        paddingTop: 22,
    },

    topContent: {
        alignItems: 'stretch',
    },

    forgotPasswordButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotPasswordText: {
        color: COLORS.silver,
        fontSize: 14,
    },
    bottomContent: {
        alignItems: 'stretch',
        marginBottom: 28,
    },
    signUpButton: {
        marginBottom: 22,
    },
    signUpWithFacebookButton: {
        marginBottom: 20
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        color: COLORS.silver,
    },
    signUpButtonText: {
        textDecorationLine: 'underline',
    },
    radioButton: {
        marginBottom: 10,
    },
    radioButtonInput: {
        marginRight: 10,
    },
    radioButtonLabel: {
        fontSize: 15,
        color: COLORS.black,
    },
    accountTypesText: {
        fontSize: 15,
        color: COLORS.black,
        marginTop: 20,
        marginBottom: 10,
    },
    errorsList: {
        marginTop: 22,
    },
    privacyTextContainer: {
        flexDirection: 'row',
    },
    privacyText: {
        fontSize: 15,
        lineHeight: 25,
    },
    privacyLink: {
        fontSize: 15,
        color: COLORS.cornFlowerBlue,
    },
})

export default Register
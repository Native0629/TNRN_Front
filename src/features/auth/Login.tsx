import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { isEmpty } from 'lodash'

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

interface Props {
    navigation: any
    success: boolean
    error: string
}

interface State {
    email: string
    password: string
    emailError: boolean
    passwordError: boolean
    generalErrors: string[]
}

class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            emailError: false,
            passwordError: false,
            generalErrors: [],
        }
    }

    componentDidMount() {
        const options = {
            showLogo: false,
            showBackButton: true,
            onBackButtonPress: this.props.navigation.goBack,
            title: localizedStrings.login.title,
        }
        this.props.navigation.setOptions(getScreenOptions(options, this.props.navigation))
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

    validateAll = () => {
        const { email, password } = this.state
        const emailError = isEmpty(email)
        const passwordError = isEmpty(password) || password.length < 6

        this.setState({
            emailError,
            passwordError,
            generalErrors: [],
        })

        return !emailError && !passwordError
    }

    onLoginButtonPress = () => {
        const { email, password } = this.state
        if (this.validateAll()) {
            this.props.navigation.navigate(NAVIGATORS.MAIN.name)
        }
    }

    onForgotPasswordButtonPress = () => {
        this.props.navigation.navigate(NAVIGATORS.FORGOT_PASSWORD.name)
    }

    onSignUpPasswordButtonPress = () => {
        this.props.navigation.navigate(NAVIGATORS.REGISTER.name)
    }

    onLoginWithFacebookButtonPress = () => {

    }

    render() {
        const {
            email,
            password,
            emailError,
            passwordError,
            generalErrors,
        } = this.state

        return (
            <KeyboardAwareScrollView
                style={Style.background}
                contentContainerStyle={Style.container}
                keyboardShouldPersistTaps={'handled'}
                scrollEnabled={false}>
                <View style={styles.content}>
                    <View style={styles.topContent}>
                        <DefaultInput
                            containerStyle={styles.emailInputContainer}
                            placeholder={localizedStrings.login.emailInput.placeholder}
                            iconType={IconType.MaterialIcons}
                            iconName={'email'}
                            autoFocus={true}
                            keyboardType={'email-address'}
                            autoCapitalize={'none'}
                            value={email}
                            hasError={emailError}
                            onChangeText={this.onEmailTextChange}
                        />

                        <DefaultInput
                            containerStyle={styles.passwordInputContainer}
                            placeholder={localizedStrings.login.passwordInput.placeholder}
                            iconType={IconType.MaterialIcons}
                            iconName={'lock'}
                            secureTextEntry={true}
                            value={password}
                            hasError={passwordError}
                            onChangeText={this.onPasswordTextChange}
                            onSubmitEditing={this.onLoginButtonPress}
                        />

                        <TouchableOpacity
                            style={styles.forgotPasswordButton}
                            hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
                            onPress={this.onForgotPasswordButtonPress}>
                            <Text style={styles.forgotPasswordText}>
                                {localizedStrings.login.forgotPasswordButton}
                            </Text>
                        </TouchableOpacity>

                        <ErrorsList errors={generalErrors} style={styles.errorsList} />
                    </View>

                    <View style={styles.bottomContent}>
                        <DefaultButton
                            style={styles.loginButton}
                            text={localizedStrings.login.loginButton}
                            onPress={this.onLoginButtonPress}
                        />
                        <LoginWithFacebookButton
                            style={styles.loginWithFacebookButton}
                            text={localizedStrings.login.loginWithFacebookButton}
                            onPress={this.onLoginWithFacebookButtonPress}
                        />
                        <View style={styles.signUpContainer}>
                            <Text style={styles.signUpText}>
                                {localizedStrings.login.signUpNote}
                            </Text>
                            <TouchableOpacity
                                style={styles.signUpButton}
                                hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
                                onPress={this.onSignUpPasswordButtonPress}>
                                <Text style={[styles.signUpText, styles.signUpButtonText]}>
                                    {localizedStrings.login.signUpButton}
                                </Text>
                            </TouchableOpacity>
                        </View>
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

    emailInputContainer: {
        marginBottom: 20,
    },
    passwordInputContainer: {
        marginBottom: 22,
    },
    forgotPasswordButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotPasswordText: {
        color: COLORS.silver,
        fontSize: 14,
        textDecorationLine: 'underline',
    },
    bottomContent: {
        alignItems: 'stretch',
        marginBottom: 28,
    },
    loginButton: {
        marginBottom: 22,
    },
    loginWithFacebookButton: {
        marginBottom: 22,
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        color: COLORS.silver,
    },
    signUpButton: {
        marginLeft: 10,
    },
    signUpButtonText: {
        textDecorationLine: 'underline',
    },
    errorsList: {
        marginTop: 22,
    },
})

export default Login

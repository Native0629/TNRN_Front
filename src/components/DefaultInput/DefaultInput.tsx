import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native'
import Icon, { IconType } from '../Icon/Icon'
import COLORS from '../../constants/colors'
import { isEmpty } from 'lodash'
import { FONT_FAMILIES } from '../../constants/fonts'

export interface DefaultInputProps extends TextInputProps {
  containerStyle?: ViewStyle
  iconType?: IconType
  iconName?: string
  hasError?: boolean
  rightText?: string
}

interface State {
  isFocusing: boolean
}

class DefaultInput extends React.PureComponent<DefaultInputProps, State> {
  constructor(props: DefaultInputProps) {
    super(props)

    this.state = {
      isFocusing: false,
    }
  }

  onFocus = () => {
    this.setState({
      isFocusing: true,
    })
  }

  onBlur = () => {
    this.setState({
      isFocusing: false,
    })
  }

  getColor = (isFocusing: boolean, hasError: boolean) => {
    if (hasError) {
      return COLORS.coral
    }
    if (isFocusing) {
      return COLORS.cornFlowerBlue
    }
    return COLORS.silver
  }

  render() {
    const {
      containerStyle,
      style,
      iconType,
      iconName,
      hasError = false,
      rightText,
      ...rest
    } = this.props
    const { isFocusing } = this.state

    const color = this.getColor(isFocusing, hasError)

    const currentContainerStyle = { borderColor: color }

    return (
      <View style={[styles.container, containerStyle, currentContainerStyle]}>
        {iconType && iconName && (
          <Icon type={iconType} name={iconName} size={25} color={color} />
        )}
        <TextInput
          underlineColorAndroid={'transparent'}
          style={[styles.textInput, style]}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          {...rest}
        />
        {!isEmpty(rightText) && (
          <Text style={styles.rightText}>{rightText}</Text>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLORS.silver,
  },
  textInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  rightText: {
    marginLeft: 5,
    fontFamily: FONT_FAMILIES.Regular,
    fontSize: 15,
  },
})

export default DefaultInput

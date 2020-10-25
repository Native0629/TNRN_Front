import React from 'react'
import { Image, StyleSheet, View, ViewProps } from 'react-native'
import { isEmpty } from 'lodash'
import DefaultAvatar from '../DefaultAvatar'
import { IconType } from '../Icon/Icon'
import COLORS from '../../constants/colors'
import Icon from '../Icon'

interface Props extends ViewProps {
  imgSrc?: string
  heightOrWidth?: number
}


const UserAvatar = (props: Props) => {
  const { style, imgSrc, heightOrWidth = 0 } = props
  const halfSize = heightOrWidth / 2
  const innerStyle = {
    height: heightOrWidth,
    width: heightOrWidth,
    borderRadius: halfSize,
  }

  return (
    <View style={[styles.container, style]}>
      {isEmpty(imgSrc) ? (
        <DefaultAvatar style={innerStyle} iconSize={heightOrWidth * 0.7} />
       ) : (
        <Image source={{ uri: imgSrc }} style={[innerStyle]} />
      )} 
        <Icon
          style={styles.businessCheck}
          type={IconType.MaterialIcons}
          name={'business-center'}
          color={COLORS.cornFlowerBlue}
          size={24}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  businessCheck: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
})

export default UserAvatar

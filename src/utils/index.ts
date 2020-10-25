import localizedStrings from 'localization'
import { Linking } from 'react-native'

export const getFileNameFromPath = (path: string) => {
  const split = path.split('/')
  return split[split.length - 1]
}

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

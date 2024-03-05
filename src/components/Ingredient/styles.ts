import { StyleSheet } from 'react-native'

import { theme } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    height: 42,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: theme.colors.gray_200,
    borderRadius: theme.borderRadius.full,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  image: {
    height: 16,
    width: 16,
  },
  title: {
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.medium,
  },
  selected: {
    borderWidth: 2,
    borderColor: theme.colors.green_600,
    backgroundColor: theme.colors.green_100,
  },
})

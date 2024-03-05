import { StyleSheet } from 'react-native'

import { theme } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    marginTop: 42,
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.xl,
    lineHeight: 44,
  },
  subtitle: {
    fontFamily: theme.fonts.family.regular,
  },
  message: {
    marginTop: 12,
    marginBottom: 38,
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.body.md,
    color: theme.colors.gray_400,
  },
  ingredientsContainer: {
    paddingBottom: 200,
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 12,
  },
})

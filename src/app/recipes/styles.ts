import { theme } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    marginBottom: 12,
    paddingTop: 62,
    paddingHorizontal: 32,
  },
  title: {
    marginTop: 22,
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.md,
  },
  recipes: {
    padding: 32,
  },
  recipesContent: {
    gap: 16,
  },
})

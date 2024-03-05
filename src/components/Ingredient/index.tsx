import { Image, Pressable, PressableProps, Text } from 'react-native'

import { styles } from './styles'

export interface IngredientProps extends PressableProps {
  name: string
  image: string
  selected: boolean
}

export function Ingredient({
  name,
  image,
  selected = false,
  ...props
}: IngredientProps) {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...props}
    >
      <Image source={require('@/assets/tomato.png')} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  )
}

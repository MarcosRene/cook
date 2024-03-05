import { FlatList, Text, View } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

import { Recipe } from '@/components/Recipe'

import { styles } from './styles'
import React from 'react'
import { services } from '@/services'
import { Ingredients } from '@/components/Ingredients'

type RecipesParams = {
  ingredientsIds: string
}

export default function Recipes() {
  const params = useLocalSearchParams<RecipesParams>()
  const [ingredients, setIngredients] = React.useState<IngredientResponse[]>([])
  const [recipes, setRecipes] = React.useState<RecipeResponse[]>([])

  const ingredientsIds = params.ingredientsIds.split(',')

  React.useEffect(() => {
    services.ingredients
      .findByIds(ingredientsIds)
      .then((response) => setIngredients(response))
  }, [])

  React.useEffect(() => {
    services.recipes
      .findByIngredientsIds(ingredientsIds)
      .then((response) => setRecipes(response))
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />

        <Text style={styles.title}>Ingredients</Text>
      </View>

      <Ingredients ingredients={ingredients} />

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Recipe
            recipe={item}
            onPress={() => router.navigate(`/recipe/${item.id}`)}
          />
        )}
        style={styles.recipes}
        contentContainerStyle={styles.recipesContent}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ gap: 16 }}
        numColumns={2}
      />
    </View>
  )
}

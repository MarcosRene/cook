import React from 'react'
import { Alert, View, Text, ScrollView } from 'react-native'
import { router } from 'expo-router'

import { Selected } from '@/components/Selected'
import { Ingredient } from '@/components/Ingredient'

import { services } from '@/services'

import { styles } from './styles'

export default function Index() {
  const [selected, setSelected] = React.useState<string[]>([])
  const [ingredients, setIngredients] = React.useState<IngredientResponse[]>([])

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
  }

  function handleClearSelected() {
    Alert.alert('Limpar', 'Desaja limpar tudo?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => setSelected([]) },
    ])
  }

  function handleSearch() {
    router.navigate(`/recipes/${selected}`)
  }

  React.useEffect(() => {
    services.ingredients.findAll().then((response) => setIngredients(response))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {'\n'}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>

      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>

      <ScrollView
        contentContainerStyle={styles.ingredientsContainer}
        showsVerticalScrollIndicator={false}
      >
        {ingredients.map((item) => (
          <Ingredient
            key={item.id}
            name={item.name}
            image={`${services.storage.imagePath}/${item.image}`}
            selected={selected.includes(String(item.id))}
            onPress={() => handleToggleSelected(String(item.id))}
          />
        ))}
      </ScrollView>

      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </View>
  )
}

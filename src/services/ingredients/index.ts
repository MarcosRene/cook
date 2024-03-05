import { subpabse } from '../supabase'

export async function findAll() {
  const { data } = await subpabse
    .from('ingredients')
    .select()
    .order('name')
    .returns<IngredientResponse[]>()

  return data ?? []
}

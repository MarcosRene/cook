import * as ingredients from './ingredients'
import * as preparations from './preparations'
import * as recipes from './recipes'

export const services = {
  ingredients,
  preparations,
  recipes,

  storage: {
    imagePath:
      'https://xzdgmhcvjuctatnzziht.supabase.co/storage/v1/object/public/Ingredients/',
  },
}

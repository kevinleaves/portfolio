import {type SchemaTypeDefinition} from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import resume from './schemas/resume'
import project from './schemas/project'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [resume, project, post, author, category, blockContent],
}

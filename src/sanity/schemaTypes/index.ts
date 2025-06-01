import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import { graphic } from './graphicservice'
import { webservice } from './webservice'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project,graphic,webservice],
}

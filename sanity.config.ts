import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {structure} from './structure'
import {defaultDocumentNode} from './structure/defaultDocumentNode'


export default defineConfig({
  name: 'default',
  title: 'Day one with Sanity',

  projectId: 'bmg88unf',
  dataset: 'production',

  plugins: [
    visionTool(),
    structureTool({ structure, defaultDocumentNode }),
  ],

  schema: {
    types: schemaTypes,
  },
  
})

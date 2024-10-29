import Hero from './Hero.svelte'
import { heroBaseData } from './Hero.data.js'
import { mergeDataForStory } from '@/tests/support/merge.helper.js'

// --------------------------------------------

export default {
  title: 'Blocks/Hero',
  component: Hero,
}

export const Base = {
  args: mergeDataForStory(heroBaseData)
}
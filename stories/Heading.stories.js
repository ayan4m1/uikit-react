import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import { Heading } from '../src/components/Heading/Heading'
import { boolean } from '@storybook/addon-knobs/dist/deprecated'

const stories = storiesOf('Components/Heading', module)
stories.addDecorator(withKnobs)

const elements = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  Span: 'span',
  Paragraph: 'p',
}
const types = {
  Default: 'default',
  Primary: 'primary',
  Hero: 'hero',
}

stories.add('default', () => {
  return (
    <Heading
      element={select('Element', elements)}
      type={select('Types', types)}
      divider={boolean('Add Divider?', false)}
      bullet={boolean('Add Bullet?', false)}
      line={boolean('Add Line?', false)}
    >
      {text('Text', 'Lorem Ipsum')}
    </Heading>
  )
})

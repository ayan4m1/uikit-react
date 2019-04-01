import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Heading } from '../../components/Heading/Heading'

describe('<Heading>', () => {
  it('Should render without props', () => {
    const wrapper = renderer.create(<Heading>Test</Heading>)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render with props', () => {
    const wrapper = renderer.create(
      <Heading id="test" style={{ marginTop: 10 }} element="h4">
        Test
      </Heading>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render as primary', () => {
    const wrapper = renderer.create(<Heading type="primary">Test</Heading>)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render as hero', () => {
    const wrapper = renderer.create(<Heading type="hero">Test</Heading>)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render with bullet', () => {
    const wrapper = renderer.create(<Heading bullet={true}>Test</Heading>)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render with divider', () => {
    const wrapper = renderer.create(<Heading divider={true}>Test</Heading>)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render with line', () => {
    const wrapper = renderer.create(<Heading line={true}>Test</Heading>)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

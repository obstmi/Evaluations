import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MyFirstComponent from '../MyFirstComponent.vue'

describe('MyFirstComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(MyFirstComponent, { props: { msg: 'Hello Hugo' } })
    expect(wrapper.text()).toContain('Hello Hugo')
  })
})

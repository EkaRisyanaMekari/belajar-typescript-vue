import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from "../HelloWorld.vue"
import Vue from 'vue/types/umd'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Vue.extend(HelloWorld), { propsData: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

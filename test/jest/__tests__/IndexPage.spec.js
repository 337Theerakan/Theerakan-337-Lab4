import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('ตรวจสอบชื่อ', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('ธีรกานต์')
  })
  it('ตรวจสอบนามสกุล', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h2')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('ขันคำ')
  })
  it('ตรวจสอบชื่อเล่น', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h3')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('เท็ก')
  })
  it('ตรวจสอบเลขประจำตัวนักศึกษา', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h4')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('6604101337')
  })
})

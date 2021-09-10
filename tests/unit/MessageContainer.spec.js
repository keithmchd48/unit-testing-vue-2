import MessageContainer from '@/components/MessageContainer'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  test('Wraps MessageDisplaycomponent', () => {
    const wrapper = mount(MessageContainer, {
      stubs: {
        MessageDisplay: {
          template: '<p v-else data-testid="message">Hello from the db!</p>',
        },
      },
    })
    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toBe('Hello from the db!')
  })
})

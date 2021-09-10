import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  test('it emits an event with the user data payload', () => {
    const wrapper = mount(LoginForm)
    const textInput = wrapper.find('[data-testid="nameInput"]')
    textInput.setValue('Keith Mac')
    wrapper.trigger('submit')

    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    const expectedPayload = { name: 'Keith Mac' }
    expect(formSubmittedCalls[0][0]).toMatchObject(expectedPayload)
  })
})

// json-server, axios & flush-promises npm packages were installed for the purpose of this spec

import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')

// before each test runs
beforeEach(() => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  test('Calls getMessage and displays message', async () => {
    // mock the API call
    const mockMessage = 'Hello from the db!'
    getMessage.mockResolvedValueOnce({ text: mockMessage })
    const wrapper = mount(MessageDisplay)
    // wait for promise to resolve
    await flushPromises()
    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1)
    // check that component displays message
    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual(mockMessage)
  })

  test('Displays an error when getMessage call fails', async () => {
    // mock the failed API call
    const mockError = 'Oops! Something went wrong.'
    getMessage.mockRejectedValueOnce(mockError)
    const wrapper = mount(MessageDisplay)
    // wait for promise to resolve
    await flushPromises()
    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1)
    // check that component displays error
    const message = wrapper.find('[data-testid="message-error"]').element
      .textContent
    expect(message).toEqual(mockError)
  })
})

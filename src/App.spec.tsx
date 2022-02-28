import { render } from '@testing-library/react'
import App from './App'

test('shoud conter title element in the component', () => {
  const { getByText } = render(<App />)
  const titleElement = getByText('App')

  expect(titleElement).toBeInTheDocument()
})

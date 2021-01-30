import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render te heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /meu primeiro teste!/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

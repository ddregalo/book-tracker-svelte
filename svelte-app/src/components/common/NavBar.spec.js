import { render } from '@testing-library/svelte';
import NavBar from './NavBar.svelte';

describe('NavBar container', () => {
  const username = 'test user';

  it('should render container html correctly', () => {
    const { container } = render(NavBar, {
      props: { username } 
    })

    expect(container).toContainHTML('<header id="nav-user"><p class="username">book tracker</p> <p class="username">welcome | test user</p></header>')
  })

  it('should display book manager title', () => {
    const { getByText } = render(NavBar, {
      props: { username } 
    })

    const title = 'book tracker'

    expect(getByText(title)).toBeInTheDocument()
  })

  it('should display welcome with username', () => {
    const { getByText } = render(NavBar, {
      props: { username } 
    });

    const welcomeUserText = `welcome | ${username}`

    expect(getByText(welcomeUserText)).toBeInTheDocument()
  })
})
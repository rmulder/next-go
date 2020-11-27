import Head from 'next/head'
import Wrapper from './Wrapper'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

const Main = ({ children, title = 'This is the default title' }) => <Wrapper>
  <Head>
    <title>{ title }</title>
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
  </Head>
  <header>
    <Nav />
  </header>

  <main>
    { children }
  </main>

  <Footer>
    Footer
  </Footer>
</Wrapper>;

export default Main;

import Head from 'next/head'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Mainmenu from './mainMenu';
import Footer from './footer';

const muiTheme = getMuiTheme({
  userAgent: false,
});

export default ({ children, title = 'Chicago Events' }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel="icon" type="image/png" href="http://www.pvhc.net/img46/lopojkylehzltkfgmtcf.png" />
      </Head>

      <Mainmenu />

      { children }

      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/nearlib@0.2.4/dist/nearlib.js"></script>
      <style>{`
        body {
          max-width: 450px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  </MuiThemeProvider>
)

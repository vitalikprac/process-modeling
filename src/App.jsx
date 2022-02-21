import { ThemeProvider } from 'styled-components';

import { theme } from './resources/theme';
import RoutesList from './routes/RoutesList';

const App = () => (
  <ThemeProvider theme={theme}>
    <RoutesList />
  </ThemeProvider>
);

export default App;

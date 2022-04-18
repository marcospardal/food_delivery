import React from 'react';
import { ThemeProvider } from 'styled-components'

import { lightTheme } from './UI/theme'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div>
        teste
      </div>
    </ThemeProvider>
  );
}

export default App;

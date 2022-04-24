import React from 'react';

import { PivoProvider } from './pivo';
import { SettingsProvider } from './settings';

const AppProvider: React.FC = ({ children }) => (
  <SettingsProvider>
    <PivoProvider>
      {children}
    </PivoProvider>
  </SettingsProvider>

);

export default AppProvider;

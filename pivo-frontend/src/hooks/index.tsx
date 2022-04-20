import React from 'react';

import { PivoProvider } from './pivo';

const AppProvider: React.FC = ({ children }) => (
  <PivoProvider>{children}</PivoProvider>
);

export default AppProvider;

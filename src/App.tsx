import React from 'react';

import Header from './components/Header';
import NavDrawer from './components/NavDrawer';

const App: React.FC = () => (
  // Criar AppBar com o Usuário Logado e Logout
  <>
    <Header />
    <NavDrawer />
  </>
);

export default App;

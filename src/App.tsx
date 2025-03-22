import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import OrcamentoForm from './components/OrcamentoForm';
import HomePage from './pages/HomePage';
import { Material } from './data/materiais';

interface ItemOrcamento {
  material: Material;
  quantidade: number;
}

interface Orcamento {
  cliente: string;
  data: string;
  itens: ItemOrcamento[];
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#3949ab',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [orcamentos, setOrcamentos] = useState<Orcamento[]>([]);

  const handleSaveOrcamento = (orcamento: Orcamento) => {
    setOrcamentos([...orcamentos, orcamento]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/orcamento" element={<OrcamentoForm onSubmit={handleSaveOrcamento} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 
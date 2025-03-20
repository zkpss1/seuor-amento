import React, { useState } from 'react';
import {
  Paper,
  TextField,
  Button,
  Grid,
  Typography,
  Autocomplete,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
  Card,
  CardContent,
  styled,
  SelectChangeEvent,
} from '@mui/material';
import { PDFDownloadLink, usePDF } from '@react-pdf/renderer';
import { Material, materiais, categorias } from '../data/materiais';
import OrcamentoPDF from './OrcamentoPDF';
import { motion } from 'framer-motion';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(8),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  background: 'white',
}));

const AnimatedBox = styled(motion.div)({
  width: '100%',
});

const LogoContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(6),
}));

interface ItemOrcamento {
  material: Material;
  quantidade: number;
}

interface OrcamentoData {
  cliente: string;
  data: string;
  itens: ItemOrcamento[];
  total: number;
}

interface OrcamentoFormProps {
  onSubmit: (orcamento: OrcamentoData) => void;
}

const OrcamentoForm: React.FC<OrcamentoFormProps> = ({ onSubmit }) => {
  const [cliente, setCliente] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [materialSelecionado, setMaterialSelecionado] = useState<Material | null>(null);
  const [quantidade, setQuantidade] = useState('');
  const [itens, setItens] = useState<ItemOrcamento[]>([]);
  const [materiaisFiltrados, setMateriaisFiltrados] = useState(materiais);

  const calcularTotal = () => {
    return itens.reduce((total, item) => {
      return total + item.material.precoUnitario * item.quantidade;
    }, 0);
  };

  const [pdf] = usePDF({
    document: itens.length > 0 ? (
      <OrcamentoPDF
        cliente={cliente}
        data={new Date().toISOString()}
        itens={itens}
        total={calcularTotal()}
      />
    ) : undefined,
  });

  const handleCategoriaChange = (event: SelectChangeEvent) => {
    const categoria = event.target.value;
    setCategoriaSelecionada(categoria);
    setMateriaisFiltrados(
      categoria ? materiais.filter((m) => m.categoria === categoria) : materiais
    );
  };

  const handleAddItem = () => {
    if (materialSelecionado && quantidade) {
      const novoItem = {
        material: materialSelecionado,
        quantidade: Number(quantidade),
      };
      setItens([...itens, novoItem]);
      setMaterialSelecionado(null);
      setQuantidade('');
    }
  };

  const handleRemoveItem = (index: number) => {
    setItens(itens.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orcamentoData: OrcamentoData = {
      cliente,
      data: new Date().toISOString(),
      itens,
      total: calcularTotal(),
    };
    onSubmit(orcamentoData);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      pt: 4,
      pb: 8
    }}>
      <StyledContainer maxWidth="lg">
        <AnimatedBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <StyledPaper>
            <LogoContainer>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#1a237e'
                }}
              >
                Seu Orçamento
              </motion.div>
            </LogoContainer>

            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                color: '#1a237e',
                fontWeight: 700,
                textAlign: 'center',
                mb: 4
              }}
            >
              Geração de Orçamento
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Nome do Cliente"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                    required
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Categoria</InputLabel>
                    <Select
                      value={categoriaSelecionada}
                      onChange={handleCategoriaChange}
                      label="Categoria"
                    >
                      <MenuItem value="">Todas</MenuItem>
                      {categorias.map((categoria) => (
                        <MenuItem key={categoria} value={categoria}>
                          {categoria}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Autocomplete
                    options={materiaisFiltrados}
                    getOptionLabel={(option) => option.nome}
                    value={materialSelecionado}
                    onChange={(_, newValue) => setMaterialSelecionado(newValue)}
                    renderInput={(params) => (
                      <TextField {...params} label="Material" required={false} />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Quantidade"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    required={false}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleAddItem}
                    disabled={!materialSelecionado || !quantidade}
                    sx={{
                      height: '56px',
                      background: 'linear-gradient(45deg, #1a237e 30%, #3949ab 90%)',
                      color: 'white',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #0d47a1 30%, #1a237e 90%)',
                      }
                    }}
                  >
                    Adicionar Item
                  </Button>
                </Grid>
              </Grid>

              {itens.length > 0 && (
                <StyledCard>
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ color: '#1a237e' }}>
                      Itens do Orçamento
                    </Typography>
                    {itens.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          p: 2,
                          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                          '&:last-child': {
                            borderBottom: 'none',
                          }
                        }}
                      >
                        <Box>
                          <Typography variant="subtitle1">{item.material.nome}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.material.categoria} - Quantidade: {item.quantidade}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Typography variant="subtitle1">
                            R$ {(item.material.precoUnitario * item.quantidade).toFixed(2)}
                          </Typography>
                          <Button
                            size="small"
                            color="error"
                            onClick={() => handleRemoveItem(index)}
                          >
                            Remover
                          </Button>
                        </Box>
                      </Box>
                    ))}
                    <Box sx={{ mt: 3, textAlign: 'right' }}>
                      <Typography variant="h6">
                        Total: R$ {calcularTotal().toFixed(2)}
                      </Typography>
                    </Box>
                  </CardContent>
                </StyledCard>
              )}

              <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={itens.length === 0}
                  sx={{
                    minWidth: '200px',
                    height: '48px',
                    background: 'linear-gradient(45deg, #1a237e 30%, #3949ab 90%)',
                    color: 'white',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #0d47a1 30%, #1a237e 90%)',
                    }
                  }}
                >
                  Salvar Orçamento
                </Button>

                {itens.length > 0 && (
                  <PDFDownloadLink
                    document={
                      <OrcamentoPDF
                        cliente={cliente}
                        data={new Date().toISOString()}
                        itens={itens}
                        total={calcularTotal()}
                      />
                    }
                    fileName={`orcamento-${cliente.toLowerCase().replace(/\s+/g, '-')}.pdf`}
                  >
                    <Button
                      variant="outlined"
                      disabled={!pdf.blob}
                      sx={{
                        minWidth: '200px',
                        height: '48px',
                        borderColor: '#1a237e',
                        color: '#1a237e',
                        '&:hover': {
                          borderColor: '#0d47a1',
                          backgroundColor: 'rgba(26, 35, 126, 0.04)',
                        }
                      }}
                    >
                      {!pdf.blob ? 'Gerando PDF...' : 'Baixar PDF'}
                    </Button>
                  </PDFDownloadLink>
                )}
              </Box>
            </form>
          </StyledPaper>
        </AnimatedBox>
      </StyledContainer>
    </Box>
  );
};

export default OrcamentoForm; 
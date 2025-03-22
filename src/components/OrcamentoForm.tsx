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
import { PDFDownloadLink } from '@react-pdf/renderer';
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

  const handleCategoriaChange = (event: SelectChangeEvent) => {
    const categoria = event.target.value;
    setCategoriaSelecionada(categoria);
    setMateriaisFiltrados(
      categoria ? materiais.filter((m) => m.categoria === categoria) : materiais
    );
    setMaterialSelecionado(null);
  };

  const handleAddItem = () => {
    if (materialSelecionado && quantidade) {
      const novoItem: ItemOrcamento = {
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

  return (
    <StyledContainer>
      <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom align="center" style={{ marginBottom: '2rem' }}>
          Lista de Materiais
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome do Cliente"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Categoria</InputLabel>
              <Select
                value={categoriaSelecionada}
                label="Categoria"
                onChange={handleCategoriaChange}
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

          <Grid item xs={12} md={5}>
            <Autocomplete
              value={materialSelecionado}
              onChange={(_, newValue) => setMaterialSelecionado(newValue)}
              options={materiaisFiltrados}
              getOptionLabel={(option) => option.nome}
              renderInput={(params) => <TextField {...params} label="Material" />}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Quantidade"
              type="number"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleAddItem}
              disabled={!materialSelecionado || !quantidade}
            >
              Adicionar Material
            </Button>
          </Grid>
        </Grid>

        {itens.length > 0 && (
          <AnimatedBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StyledCard>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Materiais Adicionados
                </Typography>
                {itens.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 2,
                      p: 2,
                      bgcolor: 'background.default',
                      borderRadius: 1,
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle1">{item.material.nome}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {item.quantidade} {item.material.unidade}
                      </Typography>
                    </Box>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleRemoveItem(index)}
                    >
                      Remover
                    </Button>
                  </Box>
                ))}

                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                  <PDFDownloadLink
                    document={
                      <OrcamentoPDF
                        cliente={cliente}
                        data={new Date().toISOString()}
                        itens={itens}
                      />
                    }
                    fileName={`lista_materiais_${cliente.replace(/\s+/g, '_').toLowerCase()}.pdf`}
                  >
                    {({ loading }) => (
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={loading}
                      >
                        {loading ? 'Gerando PDF...' : 'Baixar PDF'}
                      </Button>
                    )}
                  </PDFDownloadLink>
                </Box>
              </CardContent>
            </StyledCard>
          </AnimatedBox>
        )}
      </StyledPaper>
    </StyledContainer>
  );
};

export default OrcamentoForm;
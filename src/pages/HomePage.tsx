import React from 'react';
import { Button, Container, Typography, Box, AppBar, Toolbar } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(6),
  '& img': {
    maxWidth: '400px',
    height: 'auto',
    filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
}));

const GradientBackground = styled(Box)({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  display: 'flex',
  flexDirection: 'column',
});

const ContentContainer = styled(Container)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '2rem',
});

export default function HomePage() {
  return (
    <GradientBackground>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#1a237e' }}>
            Seu Orçamento
          </Typography>
          <Button
            component={Link}
            to="/orcamento"
            variant="outlined"
            color="primary"
            sx={{ borderRadius: '20px' }}
          >
            Criar Orçamento
          </Button>
        </Toolbar>
      </StyledAppBar>

      <ContentContainer maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <LogoContainer>
            <motion.img
              src={logo}
              alt="Logo da Empresa"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </LogoContainer>

          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: '#1a237e',
              mb: 4,
              fontSize: { xs: '2.5rem', md: '3.75rem' },
            }}
          >
            Orçamentos Hidráulicos
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: '#424242',
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Crie orçamentos profissionais para materiais hidráulicos de forma rápida e eficiente.
          </Typography>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              component={Link}
              to="/orcamento"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                borderRadius: '30px',
                padding: '12px 32px',
                fontSize: '1.2rem',
                textTransform: 'none',
                background: 'linear-gradient(45deg, #1a237e 30%, #3949ab 90%)',
                boxShadow: '0 3px 5px 2px rgba(26, 35, 126, .3)',
              }}
            >
              Começar Agora
            </Button>
          </motion.div>
        </motion.div>

        <Box sx={{ mt: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Recursos disponíveis:
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 4,
                mt: 4,
              }}
            >
              {[
                {
                  title: 'Catálogo Completo',
                  description: 'Acesso a uma ampla variedade de materiais hidráulicos.',
                },
                {
                  title: 'PDF Profissional',
                  description: 'Gere orçamentos em PDF com layout profissional.',
                },
                {
                  title: 'Cálculos Automáticos',
                  description: 'Cálculos precisos de valores e quantidades.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Typography variant="h6" gutterBottom color="primary">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </ContentContainer>
    </GradientBackground>
  );
} 
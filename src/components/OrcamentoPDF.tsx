import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Link } from '@react-pdf/renderer';
import { Material } from '../data/materiais';
import logo from '../assets/logo.png';

interface OrcamentoPDFProps {
  cliente: string;
  data: string;
  itens: Array<{
    material: Material;
    quantidade: number;
  }>;
  contato?: {
    email: string;
    telefone: string;
    endereco: string;
  };
  validade?: string;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#2196f3',
    paddingBottom: 10
  },
  logo: {
    width: 100,
    height: 50,
    marginRight: 20
  },
  companyInfo: {
    flex: 1
  },
  title: {
    fontSize: 24,
    color: '#2196f3',
    marginBottom: 5
  },
  contactInfo: {
    fontSize: 10,
    color: '#666'
  },
  clientInfo: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  table: {
    display: 'flex',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#2196f3',
    marginBottom: 20,
    borderRadius: 5,
    overflow: 'hidden'
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    minHeight: 35,
    alignItems: 'center'
  },
  tableHeader: {
    backgroundColor: '#2196f3',
    color: '#ffffff'
  },
  tableHeaderCell: {
    flex: 1,
    padding: 8,
    fontSize: 11,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  tableCell: {
    flex: 1,
    padding: 8,
    fontSize: 10
  },
  categoryTotal: {
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold'
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    fontSize: 10,
    color: '#666',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10
  },
  terms: {
    fontSize: 9,
    marginBottom: 10,
    color: '#666'
  },
  signature: {
    marginTop: 50,
    borderTopWidth: 1,
    borderTopColor: '#666',
    width: 200,
    textAlign: 'center',
    fontSize: 10,
    paddingTop: 5
  }
});

const OrcamentoPDF: React.FC<OrcamentoPDFProps> = ({ cliente, data, itens, contato, validade }) => {
  // Agrupar itens por categoria
  const itensPorCategoria = itens.reduce((acc, item) => {
    const categoria = item.material.categoria;
    if (!acc[categoria]) {
      acc[categoria] = [];
    }
    acc[categoria].push(item);
    return acc;
  }, {} as Record<string, typeof itens>);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerContainer}>
          <Image style={styles.logo} src={logo} />
          <View style={styles.companyInfo}>
            <Text style={styles.title}>Orçamento de Materiais Hidráulicos</Text>
            {contato && (
              <View style={styles.contactInfo}>
                <Text>{contato.email} | {contato.telefone}</Text>
                <Text>{contato.endereco}</Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.clientInfo}>
          <Text style={{ fontSize: 12, marginBottom: 5 }}>Cliente: {cliente}</Text>
          <Text style={{ fontSize: 12, marginBottom: 5 }}>Data: {new Date(data).toLocaleDateString()}</Text>
          {validade && (
            <Text style={{ fontSize: 12 }}>Validade: {validade}</Text>
          )}
        </View>
        
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableHeaderCell}>Material</Text>
            <Text style={styles.tableHeaderCell}>Qtd</Text>
            <Text style={styles.tableHeaderCell}>Unidade</Text>
          </View>
          
          {Object.entries(itensPorCategoria).map(([categoria, itensCategoria]) => (
            <React.Fragment key={categoria}>
              {itensCategoria.map((item, index) => (
                <View key={`${categoria}-${index}`} style={styles.tableRow}>
                  <Text style={styles.tableCell}>{item.material.nome}</Text>
                  <Text style={styles.tableCell}>{item.quantidade}</Text>
                  <Text style={styles.tableCell}>{item.material.categoria === "Elétricos" && item.material.subcategoria === "Fios e Cabos" ? "rolo" : item.material.unidade}</Text>
                </View>
              ))}
              <View style={[styles.tableRow, styles.categoryTotal]}>
                <Text style={styles.tableCell}>Total da Categoria: {categoria}</Text>
                <Text style={styles.tableCell}></Text>
                <Text style={styles.tableCell}></Text>
                <Text style={styles.tableCell}>{itensCategoria.reduce((sum, item) => sum + item.quantidade, 0)}</Text>
                <Text style={styles.tableCell}></Text>
              </View>
            </React.Fragment>
          ))}
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.terms}>
            Termos e Condições:\n
            1. Os preços são válidos pelo período especificado na validade do orçamento\n
            2. A disponibilidade dos materiais está sujeita a confirmação no momento do pedido\n
            3. Os prazos de entrega serão confirmados após a aprovação do orçamento
          </Text>
          <Link style={[styles.terms, { color: '#2196f3', textDecoration: 'underline' }]} src="https://www.rededeclientes.online/">Crie seu orçamento aqui</Link>
          
          <View style={styles.signature}>
            <Text>Assinatura do Responsável</Text>
          </View>
          
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            Orçamento gerado em {new Date().toLocaleDateString()}
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export default OrcamentoPDF;
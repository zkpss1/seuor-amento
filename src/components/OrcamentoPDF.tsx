import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Material } from '../data/materiais';

interface OrcamentoPDFProps {
  cliente: string;
  data: string;
  itens: Array<{
    material: Material;
    quantidade: number;
  }>;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
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
    borderColor: '#000',
    marginBottom: 10
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    minHeight: 30,
    alignItems: 'center'
  },
  tableHeader: {
    backgroundColor: '#f0f0f0'
  },
  tableCell: {
    flex: 1,
    padding: 5,
    fontSize: 10
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    fontSize: 10,
    textAlign: 'center',
    color: '#666'
  }
});

const OrcamentoPDF: React.FC<OrcamentoPDFProps> = ({ cliente, data, itens }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Lista de Materiais Hidráulicos</Text>
      <Text style={{ fontSize: 12, marginBottom: 10 }}>Cliente: {cliente}</Text>
      <Text style={{ fontSize: 12, marginBottom: 20 }}>Data: {new Date(data).toLocaleDateString()}</Text>
      
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.tableCell}>Material</Text>
          <Text style={styles.tableCell}>Categoria</Text>
          <Text style={styles.tableCell}>Especificações</Text>
          <Text style={styles.tableCell}>Qtd</Text>
          <Text style={styles.tableCell}>Unidade</Text>
        </View>
        
        {itens.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.material.nome}</Text>
            <Text style={styles.tableCell}>{item.material.categoria}</Text>
            <Text style={styles.tableCell}>
              {item.material.bitola ? `Bitola: ${item.material.bitola}` : ''}
              {item.material.tipoConexao ? `\nConexão: ${item.material.tipoConexao}` : ''}
              {item.material.material ? `\nMaterial: ${item.material.material}` : ''}
            </Text>
            <Text style={styles.tableCell}>{item.quantidade}</Text>
            <Text style={styles.tableCell}>{item.material.unidade}</Text>
          </View>
        ))}
      </View>
      
      <Text style={styles.footer}>
        Lista de materiais gerada em {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);

export default OrcamentoPDF;
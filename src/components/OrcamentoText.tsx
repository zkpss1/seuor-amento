import React from 'react';
import { Material } from '../data/materiais';

interface OrcamentoTextProps {
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

const OrcamentoText: React.FC<OrcamentoTextProps> = ({ cliente, data, itens, contato, validade }) => {
  const itensPorCategoria = itens.reduce((acc, item) => {
    const categoria = item.material.categoria;
    if (!acc[categoria]) {
      acc[categoria] = [];
    }
    acc[categoria].push(item);
    return acc;
  }, {} as Record<string, typeof itens>);

  const gerarTexto = () => {
    let texto = 'ORÇAMENTO DE MATERIAIS HIDRÁULICOS\n\n';

    // Informações do Cliente
    texto += `Cliente: ${cliente}\n`;
    texto += `Data: ${new Date(data).toLocaleDateString()}\n`;
    if (validade) {
      texto += `Validade: ${validade}\n`;
    }
    if (contato) {
      texto += `\nContato:\n`;
      texto += `Email: ${contato.email}\n`;
      texto += `Telefone: ${contato.telefone}\n`;
      texto += `Endereço: ${contato.endereco}\n`;
    }
    texto += '\n';

    // Lista de Materiais por Categoria
    texto += 'LISTA DE MATERIAIS\n';
    texto += '================\n\n';

    Object.entries(itensPorCategoria).forEach(([categoria, itensCategoria]) => {
      texto += `Categoria: ${categoria}\n`;
      texto += '----------------------------------------\n';
      itensCategoria.forEach(item => {
        texto += `${item.material.nome} - ${item.quantidade} ${item.material.unidade}\n`;
      });
      const totalCategoria = itensCategoria.reduce((sum, item) => sum + item.quantidade, 0);
      texto += `Total da Categoria: ${totalCategoria}\n\n`;
    });

    // Termos e Condições
    texto += '\nTERMOS E CONDIÇÕES\n';
    texto += '================\n';
    texto += '1. Os preços são válidos pelo período especificado na validade do orçamento\n';
    texto += '2. A disponibilidade dos materiais está sujeita a confirmação no momento do pedido\n';
    texto += '3. Os prazos de entrega serão confirmados após a aprovação do orçamento\n\n';

    texto += 'Orçamento gerado em ' + new Date().toLocaleDateString();
    texto += '\nCrie seu orçamento em: https://www.rededeclientes.online/';

    return texto;
  };

  return gerarTexto();
};

export default OrcamentoText;
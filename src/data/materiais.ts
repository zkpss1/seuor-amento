export interface Material {
  id: string;
  nome: string;
  categoria: string;
  subcategoria: string;
  unidade: string;
  precoUnitario: number;
  descricao?: string;
  bitola?: string;
  material?: string;
  tipoConexao?: string;
  usoPrincipal?: string;
  capacidade?: string;
  potencia?: string;
  tamanho?: string;
  voltagem?: string;
  corrente?: string;
  cor?: string;
  condutores?: string;
  aplicacao?: string;
}

export const categorias = [
  "Hidráulicos - Água Fria e Quente",
  "Esgoto",
  "Elétricos"
];

export const materiais: Material[] = [
  // 1. Materiais Hidráulicos
  ...Array.from({length: 10}, (_, i) => ({
    id: `${i+1}`,
    categoria: "Hidráulicos - Água Fria e Quente",
    subcategoria: "Tubos de PVC Água Fria",
    nome: `Cano de ${20 + i*5} PVC Água Fria`,
    material: "PVC",
    bitola: `${20 + i*5}mm`,
    unidade: "m",
    precoUnitario: 5.90 + (i*1.5),
    tipoConexao: "Soldável",
    usoPrincipal: "Sistemas hidráulicos de água fria"
  })),

  // 2. Conexões PVC
  ...['20', '25', '32', '40', '50'].map((tamanho, i) => ({
    id: `${11+i}`,
    categoria: "Hidráulicos - Água Fria e Quente",
    subcategoria: "Conexões PVC Água Fria",
    nome: `Joelho 90° ${tamanho}mm PVC`,
    material: "PVC",
    bitola: `${tamanho}mm`,
    unidade: "un",
    precoUnitario: 2.50 + (i*0.8),
    tipoConexao: "Soldável"
  })),

  // 3. Materiais de Esgoto
  ...['40', '50', '75', '100'].map((diametro, i) => ({
    id: `${16+i}`,
    categoria: "Esgoto",
    subcategoria: "Tubos PVC Esgoto",
    nome: `Cano Esgoto PVC ${diametro}mm`,
    material: "PVC",
    bitola: `${diametro}mm`,
    unidade: "m",
    precoUnitario: 15.90 + (i*5),
    usoPrincipal: "Sistemas de esgoto e drenagem"
  })),

  // 4. Materiais Elétricos - Fios Flexíveis
  ...['1.5', '2.5', '4', '6', '10', '16', '25', '35', '50'].flatMap((bitola, i) => 
    ['Azul', 'Vermelho', 'Preto', 'Verde', 'Branco', 'Cinza'].map((cor, j) => ({
      id: `${20 + (i*6) + j}`,
      categoria: "Elétricos",
      subcategoria: "Fios Flexíveis",
      nome: `Fio Flexível ${bitola}mm² ${cor}`,
      bitola: `${bitola}mm²`,
      cor: cor,
      voltagem: "750V/1kV",
      aplicacao: "Instalações residenciais e comerciais",
      unidade: "rolo",
      precoUnitario: 25.90 + (i*8) + (j*0.5),
      material: "Cobre"
    }))
  ),

  // 5. Cabos PP
  ...['0.75', '1', '1.5', '2.5'].flatMap((bitola, i) =>
    [2, 3, 4].map((condutores, j) => ({
      id: `${74 + (i*3) + j}`,
      categoria: "Elétricos",
      subcategoria: "Cabos PP",
      nome: `Cabo PP ${condutores}x${bitola}mm² Preto`,
      condutores: `${condutores}`,
      bitola: `${bitola}mm²`,
      cor: "Preto",
      aplicacao: "Máquinas e equipamentos industriais",
      unidade: "rolo",
      precoUnitario: 45.90 + (i*5) + (j*2),
      material: "Cobre"
    }))
  ),

  // 6. Cabos Paralelos
  ...['0.5', '0.75', '1', '1.5'].map((bitola, i) => ({
    id: `${86 + i}`,
    categoria: "Elétricos",
    subcategoria: "Cabos Paralelos",
    nome: `Cabo Paralelo 2x${bitola}mm² Branco`,
    condutores: "2",
    bitola: `${bitola}mm²`,
    cor: "Branco",
    aplicacao: "Iluminação e eletrônicos",
    unidade: "rolo",
    precoUnitario: 18.90 + (i*3),
    material: "Cobre"
  }))
];
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

export const subcategorias = {
  "Hidráulicos - Água Fria e Quente": [
    "Tubos de PVC Água Fria",
    "Tubos de CPVC Água Quente",
    "Conexões PVC Água Fria",
    "Registros e Válvulas",
    "Conexões Especiais",
    "Conexões CPVC Água Quente",
    "Acessórios"
  ],
  "Esgoto": [
    "Tubos PVC Esgoto",
    "Conexões PVC Esgoto",
    "Caixas e Ralos",
    "Acessórios Esgoto"
  ],
  "Elétricos": [
    "Fios e Cabos",
    "Disjuntores",
    "Quadros de Distribuição",
    "Eletrodutos e Acessórios",
    "Caixas e Acessórios",
    "Dispositivos de Proteção"
  ]
};

export const materiais: Material[] = [
  // 1. Tubos PVC Água Fria (NBR 5648)
  ...['20', '25', '32', '40', '50', '60', '75', '85', '110'].map((diametro, i) => ({
    id: `${i+1}`,
    categoria: "Hidráulicos - Água Fria e Quente",
    subcategoria: "Tubos de PVC Água Fria",
    nome: `Tubo PVC Soldável ${diametro}mm Água Fria`,
    material: "PVC",
    bitola: `${diametro}mm`,
    unidade: "m",
    precoUnitario: 5.90 + (i*2.5),
    tipoConexao: "Soldável",
    usoPrincipal: "Sistemas hidráulicos de água fria",
    descricao: "Pressão de serviço 7,5 kgf/cm² (75 m.c.a.)"
  })),

  // 2. Tubos CPVC Água Quente (NBR 15884)
  ...['15', '22', '28', '35', '42', '54', '73', '89', '114'].map((diametro, i) => ({
    id: `${10+i}`,
    categoria: "Hidráulicos - Água Fria e Quente",
    subcategoria: "Tubos de CPVC Água Quente",
    nome: `Tubo CPVC ${diametro}mm Água Quente`,
    material: "CPVC",
    bitola: `${diametro}mm`,
    unidade: "m",
    precoUnitario: 15.90 + (i*3.5),
    tipoConexao: "Soldável",
    usoPrincipal: "Sistemas hidráulicos de água quente",
    descricao: "Temperatura máxima 80°C - Pressão 6,0 kgf/cm²"
  })),

  // 3. Conexões PVC Água Fria
  ...['20', '25', '32', '40', '50'].flatMap((diametro, i) => [
    {
      id: `${19+i*5}`,
      categoria: "Hidráulicos - Água Fria e Quente",
      subcategoria: "Conexões PVC Água Fria",
      nome: `Joelho 90° Soldável ${diametro}mm`,
      material: "PVC",
      bitola: `${diametro}mm`,
      unidade: "un",
      precoUnitario: 3.90 + (i*1.2)
    },
    {
      id: `${20+i*5}`,
      categoria: "Hidráulicos - Água Fria e Quente",
      subcategoria: "Conexões PVC Água Fria",
      nome: `Tê Soldável ${diametro}mm`,
      material: "PVC",
      bitola: `${diametro}mm`,
      unidade: "un",
      precoUnitario: 3.90 + (i*1.2)
    },
    {
      id: `${21+i*5}`,
      categoria: "Hidráulicos - Água Fria e Quente",
      subcategoria: "Conexões PVC Água Fria",
      nome: `Luva Soldável ${diametro}mm`,
      material: "PVC",
      bitola: `${diametro}mm`,
      unidade: "un",
      precoUnitario: 3.90 + (i*1.2)
    },
    {
      id: `${22+i*5}`,
      categoria: "Hidráulicos - Água Fria e Quente",
      subcategoria: "Conexões PVC Água Fria",
      nome: `Joelho 45° Soldável ${diametro}mm`,
      material: "PVC",
      bitola: `${diametro}mm`,
      unidade: "un",
      precoUnitario: 3.90 + (i*1.2)
    },
    {
      id: `${23+i*5}`,
      categoria: "Hidráulicos - Água Fria e Quente",
      subcategoria: "Conexões PVC Água Fria",
      nome: `União Soldável ${diametro}mm`,
      material: "PVC",
      bitola: `${diametro}mm`,
      unidade: "un",
      precoUnitario: 3.90 + (i*1.2)
    }
  ]),

  // 4. Registros e Válvulas
  ...['20', '25', '32', '40', '50'].flatMap((diametro, i) => [
    {
      id: `${44+i*3}`,
      categoria: "Hidráulicos - Água Fria e Quente",
      subcategoria: "Registros e Válvulas",
      nome: `Registro de Gaveta ${diametro}mm`,
      material: "Metal",
      bitola: `${diametro}mm`,
      unidade: "un",
      precoUnitario: 45.90 + (i*8.5)
    },
    {
      id: `${45+i*3}`,
      categoria: "Hidráulicos - Água Fria e Quente",
      subcategoria: "Registros e Válvulas",
      nome: `Registro de Pressão ${diametro}mm`,
      material: "Metal",
      bitola: `${diametro}mm`,
      unidade: "un",
      precoUnitario: 39.90 + (i*7.5)
    },
    {
      id: `${46+i*3}`,
      categoria: "Hidráulicos - Água Fria e Quente",
      subcategoria: "Registros e Válvulas",
      nome: `Válvula de Retenção ${diametro}mm`,
      material: "Metal",
      bitola: `${diametro}mm`,
      unidade: "un",
      precoUnitario: 32.90 + (i*6.5)
    }
  ]),

  // 5. Acessórios
  {
    id: "63",
    categoria: "Hidráulicos - Água Fria e Quente",
    subcategoria: "Acessórios",
    nome: "Fita Veda Rosca 18mm x 50m",
    material: "PTFE",
    unidade: "un",
    precoUnitario: 9.90
  },
  {
    id: "64",
    categoria: "Hidráulicos - Água Fria e Quente",
    subcategoria: "Acessórios",
    nome: "Adesivo Plástico para PVC 175g",
    material: "PVC",
    unidade: "un",
    precoUnitario: 19.90
  },

  // 6. Tubos PVC Esgoto
  ...['40', '50', '75', '100'].map((diametro, i) => ({
    id: `${65+i}`,
    categoria: "Esgoto",
    subcategoria: "Tubos PVC Esgoto",
    nome: `Tubo PVC Esgoto ${diametro}mm`,
    material: "PVC",
    bitola: `${diametro}mm`,
    unidade: "m",
    precoUnitario: 8.90 + (i*3),
    descricao: "NBR 5688 - Série Normal"
  })),

  // 7. Conexões PVC Esgoto
  ...['40', '50', '75', '100'].flatMap((diametro, i) => [
    {
      id: `${69+i*4}`,
      categoria: "Esgoto",
      subcategoria: "Conexões PVC Esgoto",
      nome: `Joelho 90° Esgoto ${diametro}mm`,
      material: "PVC",
      bitola: `${diametro}mm`,
      unidade: "un",
      precoUnitario: 3.90 + (i*1.2)
    },
    {
      id: `${70+i*4}`,
      categoria: "Esgoto",
      subcategoria: "Conexões PVC Esgoto",
      nome: `Tê Esgoto ${diametro}mm`,
      material: "PVC",
      bitola: `${diametro}mm`,
      unidade: "un",
      precoUnitario: 5.90 + (i*1.5)
    },
    {
      id: `${71+i*4}`,
      categoria: "Esgoto",
      subcategoria: "Conexões PVC Esgoto",
      nome: `Luva Simples Esgoto ${diametro}mm`,
      material: "PVC",
      bitola: `${diametro}mm`,
      unidade: "un",
      precoUnitario: 2.90 + (i*0.8)
    },
    {
      id: `${72+i*4}`,
      categoria: "Esgoto",
      subcategoria: "Conexões PVC Esgoto",
      nome: `Redução Excêntrica Esgoto ${diametro}mm`,
      material: "PVC",
      bitola: `${diametro}mm`,
      unidade: "un",
      precoUnitario: 4.90 + (i*1.3)
    }
  ]),

  // 8. Fios e Cabos Elétricos
  ...['1.5', '2.5', '4', '6', '10', '16'].flatMap((bitola, i) => [
    ...['preto', 'azul', 'verde', 'vermelho', 'amarelo', 'branco'].map((cor, j) => ({
      id: `${85+i*6+j}`,
      categoria: "Elétricos",
      subcategoria: "Fios e Cabos",
      nome: `Fio Flexível ${bitola}mm² ${cor}`,
      material: "Cobre",
      bitola: `${bitola}mm²`,
      unidade: "m",
      precoUnitario: 1.50 + (parseFloat(bitola) * 0.8),
      cor: cor,
      descricao: "NBR NM 247-3 - 450/750V"
    }))
  ]),

  // 9. Disjuntores
  ...['10', '16', '20', '25', '32', '40', '50', '63'].flatMap((amperagem, i) => [
    {
      id: `${121+i*3}`,
      categoria: "Elétricos",
      subcategoria: "Disjuntores",
      nome: `Disjuntor Monopolar ${amperagem}A Curva C`,
      unidade: "un",
      precoUnitario: 12.90 + (i*2),
      corrente: `${amperagem}A`,
      descricao: "NBR NM 60898"
    },
    {
      id: `${122+i*3}`,
      categoria: "Elétricos",
      subcategoria: "Disjuntores",
      nome: `Disjuntor Bipolar ${amperagem}A Curva C`,
      unidade: "un",
      precoUnitario: 29.90 + (i*4),
      corrente: `${amperagem}A`,
      descricao: "NBR NM 60898"
    },
    {
      id: `${123+i*3}`,
      categoria: "Elétricos",
      subcategoria: "Disjuntores",
      nome: `Disjuntor Tripolar ${amperagem}A Curva C`,
      unidade: "un",
      precoUnitario: 39.90 + (i*6),
      corrente: `${amperagem}A`,
      descricao: "NBR NM 60898"
    }
  ]),

  // 10. Dispositivos de Proteção
  {
    id: "145",
    categoria: "Elétricos",
    subcategoria: "Dispositivos de Proteção",
    nome: "DPS Classe II 20kA 275V",
    unidade: "un",
    precoUnitario: 89.90,
    descricao: "NBR IEC 61643-1"
  },
  {
    id: "146",
    categoria: "Elétricos",
    subcategoria: "Dispositivos de Proteção",
    nome: "DR Bipolar 25A 30mA",
    unidade: "un",
    precoUnitario: 119.90,
    corrente: "25A",
    descricao: "NBR NM 61008-1"
  },
  {
    id: "147",
    categoria: "Elétricos",
    subcategoria: "Dispositivos de Proteção",
    nome: "DR Tetrapolar 40A 30mA",
    unidade: "un",
    precoUnitario: 149.90,
    corrente: "40A",
    descricao: "NBR NM 61008-1"
  },

  // 11. Quadros de Distribuição
  {
    id: "148",
    categoria: "Elétricos",
    subcategoria: "Quadros de Distribuição",
    nome: "Quadro de Distribuição de Embutir 12/16 Disjuntores",
    unidade: "un",
    precoUnitario: 89.90,
    descricao: "Com barramento - NBR IEC 60439-3"
  },
  {
    id: "149",
    categoria: "Elétricos",
    subcategoria: "Quadros de Distribuição",
    nome: "Quadro de Distribuição de Embutir 24/32 Disjuntores",
    unidade: "un",
    precoUnitario: 149.90,
    descricao: "Com barramento - NBR IEC 60439-3"
  },

  // 12. Eletrodutos e Acessórios
  ...['20', '25', '32'].flatMap((diametro, i) => [
    {
      id: `${150+i*3}`,
      categoria: "Elétricos",
      subcategoria: "Eletrodutos e Acessórios",
      nome: `Eletroduto PVC Rígido ${diametro}mm`,
      material: "PVC",
      bitola: `${diametro}mm`,
      unidade: "m",
      precoUnitario: 5.90 + (i*1.5),
      descricao: "NBR 15465"
    },
    {
      id: `${151+i*3}`,
      categoria: "Elétricos",
      subcategoria: "Eletrodutos e Acessórios",
      nome: `Curva 90° para Eletroduto ${diametro}mm`,
      material: "PVC",
      bitola: `${diametro}mm`,
      unidade: "un",
      precoUnitario: 3.90 + (i*0.8)
    },
    {
      id: `${152+i*3}`,
      categoria: "Elétricos",
      subcategoria: "Eletrodutos e Acessórios",
      nome: `Luva para Eletroduto ${diametro}mm`,
      material: "PVC",
      bitola: `${diametro}mm`,
      unidade: "un",
      precoUnitario: 2.90 + (i*0.5)
    }
  ]),

  // 13. Caixas e Acessórios
  {
    id: "159",
    categoria: "Elétricos",
    subcategoria: "Caixas e Acessórios",
    nome: "Caixa de Luz 4x2 Retangular",
    material: "PVC",
    unidade: "un",
    precoUnitario: 1.90
  },
  {
    id: "160",
    categoria: "Elétricos",
    subcategoria: "Caixas e Acessórios",
    nome: "Caixa de Luz 4x4 Quadrada",
    material: "PVC",
    unidade: "un",
    precoUnitario: 3.90
  },
  {
    id: "161",
    categoria: "Elétricos",
    subcategoria: "Caixas e Acessórios",
    nome: "Caixa Octogonal Fundo Móvel",
    material: "PVC",
    unidade: "un",
    precoUnitario: 4.90
  },
  {
    id: "162",
    categoria: "Elétricos",
    subcategoria: "Caixas e Acessórios",
    nome: "Tomada 2P+T 10A",
    material: "PVC",
    unidade: "un",
    precoUnitario: 8.90,
    corrente: "10A"
  },
  {
    id: "163",
    categoria: "Elétricos",
    subcategoria: "Caixas e Acessórios",
    nome: "Tomada 2P+T 20A",
    material: "PVC",
    unidade: "un",
    precoUnitario: 9.90,
    corrente: "20A"
  },
  {
    id: "164",
    categoria: "Elétricos",
    subcategoria: "Caixas e Acessórios",
    nome: "Interruptor Simples 10A",
    material: "PVC",
    unidade: "un",
    precoUnitario: 7.90,
    corrente: "10A"
  },
  {
    id: "165",
    categoria: "Elétricos",
    subcategoria: "Caixas e Acessórios",
    nome: "Interruptor Paralelo 10A",
    material: "PVC",
    unidade: "un",
    precoUnitario: 11.90,
    corrente: "10A"
  }
];
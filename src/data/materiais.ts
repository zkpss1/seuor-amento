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
}

export const categorias = [
  "Tubos e Conexões",
  "Caixas e Reservatórios",
  "Válvulas e Reguladores",
  "Bombas e Equipamentos",
  "Metais e Acessórios",
  "Esgoto e Drenagem"
];

export const materiais: Material[] = [
  // 1. Tubos e Conexões
  {
    id: '1',
    categoria: "Tubos e Conexões",
    subcategoria: "Canos PVC",
    nome: "Cano PVC 20mm (¾\") Água Fria",
    material: "PVC",
    bitola: "20mm (¾\")",
    unidade: "m",
    precoUnitario: 5.90,
    tipoConexao: "Soldável",
    usoPrincipal: "Água fria"
  },
  {
    id: '2',
    categoria: "Tubos e Conexões",
    subcategoria: "Canos PVC",
    nome: "Cano PVC 25mm (1\") Água Fria",
    material: "PVC",
    bitola: "25mm (1\")",
    unidade: "m",
    precoUnitario: 7.50,
    tipoConexao: "Soldável",
    usoPrincipal: "Água fria"
  },
  {
    id: '3',
    categoria: "Tubos e Conexões",
    subcategoria: "Canos CPVC",
    nome: "Cano CPVC 20mm (¾\") Água Quente",
    material: "CPVC",
    bitola: "20mm (¾\")",
    unidade: "m",
    precoUnitario: 15.90,
    tipoConexao: "Soldável",
    usoPrincipal: "Água quente"
  },
  {
    id: '4',
    categoria: "Tubos e Conexões",
    subcategoria: "Canos PPR",
    nome: "Cano PPR 25mm (1\") Alta Pressão",
    material: "Polipropileno",
    bitola: "25mm (1\")",
    unidade: "m",
    precoUnitario: 18.50,
    tipoConexao: "Termofusão",
    usoPrincipal: "Água quente e fria"
  },
  {
    id: '5',
    categoria: "Tubos e Conexões",
    subcategoria: "Conexões",
    nome: "Joelho 90° PVC 25mm Soldável",
    material: "PVC",
    bitola: "25mm",
    unidade: "un",
    precoUnitario: 2.50,
    tipoConexao: "Soldável",
    usoPrincipal: "Mudança de direção"
  },

  // 2. Caixas e Reservatórios
  {
    id: '6',
    categoria: "Caixas e Reservatórios",
    subcategoria: "Caixas d'água",
    nome: "Caixa d'água 1000L Polietileno",
    material: "Polietileno",
    capacidade: "1000L",
    unidade: "un",
    precoUnitario: 389.90,
    tipoConexao: "Rosca BSP",
    usoPrincipal: "Armazenamento de água"
  },
  {
    id: '7',
    categoria: "Caixas e Reservatórios",
    subcategoria: "Acessórios",
    nome: "Boia ¾\" Latão",
    material: "Latão",
    bitola: "¾\"",
    unidade: "un",
    precoUnitario: 45.90,
    tipoConexao: "Rosca BSP",
    usoPrincipal: "Controle do nível da água"
  },

  // 3. Válvulas e Reguladores
  {
    id: '8',
    categoria: "Válvulas e Reguladores",
    subcategoria: "Válvulas",
    nome: "Válvula de Retenção ¾\" Latão",
    material: "Latão",
    bitola: "¾\"",
    unidade: "un",
    precoUnitario: 58.90,
    tipoConexao: "Rosca BSP",
    usoPrincipal: "Impede refluxo"
  },
  {
    id: '9',
    categoria: "Válvulas e Reguladores",
    subcategoria: "Registros",
    nome: "Registro de Gaveta ¾\" Latão",
    material: "Latão",
    bitola: "¾\"",
    unidade: "un",
    precoUnitario: 49.90,
    tipoConexao: "Rosca BSP",
    usoPrincipal: "Controle de fluxo de água"
  },

  // 4. Bombas e Equipamentos
  {
    id: '10',
    categoria: "Bombas e Equipamentos",
    subcategoria: "Bombas",
    nome: "Bomba d'água Centrífuga 1/2 HP",
    material: "Metal",
    potencia: "1/2 HP",
    unidade: "un",
    precoUnitario: 389.90,
    tipoConexao: "Rosca BSP",
    usoPrincipal: "Pressurização de água"
  },
  {
    id: '11',
    categoria: "Bombas e Equipamentos",
    subcategoria: "Filtros",
    nome: "Filtro de Água ¾\" Carvão Ativado",
    material: "Carvão ativado",
    bitola: "¾\"",
    unidade: "un",
    precoUnitario: 89.90,
    tipoConexao: "Rosca BSP",
    usoPrincipal: "Filtragem de impurezas"
  },

  // 5. Metais e Acessórios
  {
    id: '12',
    categoria: "Metais e Acessórios",
    subcategoria: "Torneiras",
    nome: "Torneira para Pia ½\" Latão",
    material: "Latão",
    bitola: "½\"",
    unidade: "un",
    precoUnitario: 79.90,
    tipoConexao: "Rosca BSP",
    usoPrincipal: "Pias e jardins"
  },
  {
    id: '13',
    categoria: "Metais e Acessórios",
    subcategoria: "Acessórios",
    nome: "Engate Flexível 40cm Inox",
    material: "Aço inox",
    tamanho: "40cm",
    unidade: "un",
    precoUnitario: 29.90,
    tipoConexao: "Rosca BSP",
    usoPrincipal: "Ligação de torneiras"
  },

  // 6. Esgoto e Drenagem
  {
    id: '14',
    categoria: "Esgoto e Drenagem",
    subcategoria: "Tubos",
    nome: "Cano Esgoto PVC 100mm",
    material: "PVC",
    bitola: "100mm",
    unidade: "m",
    precoUnitario: 25.90,
    tipoConexao: "Soldável",
    usoPrincipal: "Drenagem de esgoto"
  },
  {
    id: '15',
    categoria: "Esgoto e Drenagem",
    subcategoria: "Caixas",
    nome: "Caixa Sifonada PVC 100mm",
    material: "PVC",
    tamanho: "100mm",
    unidade: "un",
    precoUnitario: 32.90,
    tipoConexao: "Encaixe",
    usoPrincipal: "Drenagem de água"
  }
]; 
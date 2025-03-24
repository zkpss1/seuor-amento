import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.seuorcamento.app',
  appName: 'Seu Orçamento',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    iosScheme: 'https'
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystorePassword: undefined,
      keystoreAlias: undefined,
      keystoreAliasPassword: undefined
    }
  },
  ios: {
    scheme: 'Seu Orçamento',
    limitsNavigationsToAppBoundDomains: true
  }
};

export default config;
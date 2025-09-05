const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

// Chemin vers le fichier de traduction
const i18nPath = path.join(__dirname, '../lib/i18n.js');

// Fonction asynchrone pour nettoyer et formater le fichier
async function cleanAndFormatFile() {
  try {
    // Lire le contenu actuel du fichier
    const content = fs.readFileSync(i18nPath, 'utf-8');

    // Options de formatage Prettier
    const options = {
      parser: 'babel',
      printWidth: 100,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: true,
      trailingComma: 'es5',
      bracketSpacing: true,
      arrowParens: 'avoid',
      endOfLine: 'lf',
    };

    // Récupérer la configuration Prettier
    const config = await prettier.resolveConfig(i18nPath);
    
    // Formater le contenu
    const formattedContent = await prettier.format(content, { ...options, ...config });
    
    // Écrire le contenu formaté dans le fichier
    fs.writeFileSync(i18nPath, formattedContent, 'utf-8');
    
    console.log('Fichier i18n.js nettoyé et formaté avec succès !');
  } catch (error) {
    console.error('Erreur lors du formatage du fichier :', error);
    process.exit(1);
  }
}

// Exécuter la fonction de nettoyage
cleanAndFormatFile();

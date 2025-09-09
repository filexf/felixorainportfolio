# Configuration de la page de contact

## 🚀 Fonctionnalités

La page de contact inclut :

- Formulaire de contact avec validation
- Envoi d'emails via Resend
- Design responsive cohérent avec le portfolio
- Support multilingue (FR/EN/ES)
- Messages de succès/erreur
- Informations de contact affichées

## 📝 Configuration requise

### 1. Créer un compte Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Créez un compte gratuit
3. Vérifiez votre domaine ou utilisez le domaine de test

### 2. Obtenir votre clé API

1. Dans votre dashboard Resend, allez dans "API Keys"
2. Créez une nouvelle clé API
3. Copiez la clé (elle commence par `re_...`)

### 3. Configuration des variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
# Clé API Resend (obligatoire)
RESEND_API_KEY=re_votre_cle_api_ici

# Email de réception (optionnel - par défaut felix.orain@gmail.com)
CONTACT_EMAIL=votre@email.com

# Domaine d'envoi (optionnel - par défaut contact@felixorain.dev)
FROM_EMAIL=contact@votredomaine.com
```

### 4. Vérification du domaine (pour la production)

Pour utiliser votre propre domaine en production :

1. Dans Resend, ajoutez votre domaine
2. Configurez les enregistrements DNS requis
3. Attendez la vérification

## 🛠 Structure des fichiers

```
src/
├── app/
│   ├── contact/
│   │   └── page.tsx          # Page de contact avec métadonnées SEO
│   └── api/
│       └── contact/
│           └── route.ts       # API route pour l'envoi d'emails
├── components/
│   └── page-components/
│       └── ContactPage.tsx    # Composant principal de la page de contact
├── messages/
│   ├── fr.json               # Traductions françaises
│   ├── en.json               # Traductions anglaises
│   └── es.json               # Traductions espagnoles
└── layouts/
    └── Navbar.tsx            # Lien de contact ajouté à la navbar
```

## 🎨 Design

La page de contact respecte le design du portfolio :

- Couleurs cohérentes avec le thème
- Typography et espacement identiques
- Animations avec Reveal component
- Responsive design
- Support du dark mode

## 📧 Template d'email

Les emails reçus incluent :

- Informations de contact (nom, email, sujet)
- Message formaté
- Timestamp de l'envoi
- Design HTML professionnel

## 🔧 Dépannage

### Email non reçu

1. Vérifiez votre clé API Resend
2. Vérifiez que votre domaine est vérifié
3. Regardez les logs de l'API route dans la console

### Erreurs de validation

- Tous les champs sont obligatoires
- L'email doit être au format valide
- Le message ne peut pas être vide

### Domaine non vérifié

En attendant la vérification de votre domaine, vous pouvez :

- Utiliser le domaine de test de Resend
- Modifier temporairement l'adresse d'envoi dans `/api/contact/route.ts`

## 📱 Test local

Pour tester la page de contact en local :

```bash
npm run dev
```

Puis allez sur `http://localhost:3000/contact`

⚠️ **Important** : Vous devez avoir configuré votre `.env.local` avec votre clé API Resend pour que l'envoi d'emails fonctionne.

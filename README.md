# Gestion-de-projet-en-Vue.js-Express.js
Application web de gestion des projets permettant aux utilisateurs de créer, lire, mettre à jour et supprimer des projets.

<a href="https://nodejs.org" target="_blank">
  <img alt="NodeJs" src="https://img.shields.io/badge/Node.JS-94C745?style=for-the-badge&logo=node&logoColor=white">
</a>
<a href="https://expressjs.com/">
  <img alt="expressjs" src="https://img.shields.io/badge/Express.JS-383838?style=for-the-badge&logo=express&logoColor=white">
</a>
<a href="https://vuejs.org">
  <img alt="Vue.Js" src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D">
</a>

## Durée: 06/08/24 à 20h30 - 08/08/24 à 23h30

# Database
Connecter vous a votre mysql et creer la base de données
```
create database gestion_projet;
```

# Backend
Aller dans le dossier backend
```bash
cd gestion-projet-backend
```
Installer les dépendances
```bash
npm install
```
## Modifier le fichier **.env** pour vos config. Ici le port sera '3001' et mettre les information de connexion de votre base de donnée
Si le fichier .env est manquant. Créer le fichier dans la racine du dossier backend
```bash
PORT='3001'

DB_NAME='gestion_projet'
DB_HOST='localhost'
DB_USER='root'
DB_PASSWORD='root'

PASSWORD_SALT='gestion-projet-vuejs-nodejs'

JWT_KEY='gestion-projet-vuejs-nodejs'
```
Lancer en mode dev et attender que l'application démarre et les données de test insérer
```bash
nodemon start
```
L'application démarrera sur
```bash
 127.0.0.1:{PORT}
```
> [!IMPORTANT]  
> En cours de developpement et de test, lors de rédemarrage , le backend supprimera tous les donnée et re-insererons les donnée basique de test (UserRole, TaskStatus, Compte Admin)

# Frontend
Aller dans le dossier frontend
```bash
cd gestion-projet-frontend
```
Installer les dépendances
```bash
npm install
```
## Modifier le fichier **.env** pour vos config. Ici l'URL pour les appel sera 'http://127.0.0.1:3001'. Faire correspondre le port au port du Backend.
Si le fichier .env est manquant. Créer le fichier dans la racine du dossier frontend
```bash
VITE_API_URL='http://127.0.0.1:3001'
```
Lancer en mode dev et attender que l'application démarre et les données de test insérer
```bash
npm run dev
```
L'application demarrera sur
```bash
http://localhost:5173
```

> [!IMPORTANT]  
> Donnée de test:
> User: email: admin@gmail.com / password: admin

# Démo
Vous trouverez une démo video dans le dossier. Veuillez excusez les lags et options de formulaires ne s'affichant pas dans la vidéo à cause de la machine enregistrante qui est lente. 

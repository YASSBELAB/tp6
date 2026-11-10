# TP6 - API REST Node.js, Express et MySQL

Migration de l'API REST TP5 vers une base de données MySQL avec une architecture en couches.

## Technologies utilisées

- Node.js
- Express.js
- MySQL (MariaDB avec XAMPP)
- mysql2
- dotenv

## Architecture

- routes : définition des endpoints
- controllers : gestion des requêtes HTTP
- services : logique métier
- repositories : accès à la base de données
- middlewares : validation et gestion des erreurs

## Installation

```bash
npm install
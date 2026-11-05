<<<<<<< HEAD
# Products API — NestJS

## Prérequis
- Node.js 18 ou supérieur
- npm

## Installation et démarrage
Dans le terminal, placez-vous dans le dossier qui contient `package.json`, puis exécutez :

```bash
npm install
npm run start:dev
```

L'API démarre sur http://localhost:3000 et la documentation Swagger est disponible sur http://localhost:3000/api.

## Routes disponibles

| Méthode | Route | Description |
|---|---|---|
| GET | `/` | Vérifier que l'API fonctionne |
| GET | `/products` | Lister les produits |
| GET | `/products?category=Informatique` | Filtrer par catégorie |
| GET | `/products?search=clav` | Rechercher par nom |
| GET | `/products/stats` | Statistiques |
| GET | `/products/:id` | Consulter un produit |
| POST | `/products` | Ajouter un produit |
| PATCH | `/products/:id` | Modifier un produit |
| DELETE | `/products/:id` | Supprimer un produit |

Les données sont stockées temporairement en mémoire. Elles sont réinitialisées lorsque le serveur redémarre.
=======
# product
>>>>>>> 3bc69046008df33a9fb88ef9b37c04da9d6a9b5e

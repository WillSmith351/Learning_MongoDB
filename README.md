# Parcours d'Apprentissage MongoDB

Ce repository est dédié à un parcours d'apprentissage de MongoDB, une base de données NoSQL puissante et flexible. Ici, vous trouverez des scripts, des configurations et des exemples de requêtes qui aide à maîtriser MongoDB.

## À Propos de MongoDB

MongoDB est une base de données NoSQL qui utilise des collections et des documents au lieu de tables, colonnes et lignes traditionnelles. Elle stocke les données dans un format semblable à JSON, appelé BSON, offrant ainsi une grande flexibilité, notamment pour les développeurs JavaScript.

- **Collections** : Regroupent des documents spécifiques, facilitant la gestion et la recherche de données.
- **Documents** : Structurés en BSON, ressemblent à du JSON avec des paires clé-valeur, et peuvent contenir des documents embarqués pour une structuration de données plus complexe.
- **ObjectId** : Chaque document possède un identifiant unique attribué par MongoDB, garantissant l'unicité et facilitant les opérations de recherche.


## Bases de Données Système MongoDB

Lors de l'utilisation de MongoDB, certaines bases de données sont créées automatiquement et peuvent être visualisées dans MongoDB Compass. Ces bases de données système servent à diverses fonctions internes de MongoDB :

- **`local`** : Cette base de données contient les données de journalisation du démarrage (`startup log`). Vous y trouverez des documents représentant chaque instance où MongoDB a été démarré. Ces informations sont utiles pour le diagnostic et l'audit du système.

- **`config`** : Elle stocke la configuration des clusters MongoDB, notamment les informations de sharding et de réplication. Cette base de données joue un rôle crucial dans les déploiements distribués de MongoDB.

- **`admin`** : Sert de base de données administrative. Elle peut contenir des informations sur les utilisateurs et leurs rôles au niveau du cluster, ainsi que d'autres données de configuration globales.

Ces bases de données sont essentielles au fonctionnement interne de MongoDB et fournissent des informations utiles pour la gestion et le monitoring de vos instances MongoDB.


## Contenu du Repository

### Scripts et Fichiers

- `download_mongodb.js` : Guide pour télécharger et installer MongoDB.
- `execute_mongosh` : Instructions pour exécuter le shell MongoDB, `mongosh`, et interagir avec votre base de données.

### Utilisation

Pour exécuter les scripts de ce repository, utilisez la commande suivante dans votre terminal :

```sh
node nomDuFichier.js
```

Assurez-vous d'avoir Node.js installé sur votre machine pour exécuter les commandes JavaScript.

## Pour Commencer

1. Clonez ce repository pour accéder aux fichiers et aux scripts.
2. Assurez-vous d'avoir installé MongoDB et Node.js sur votre système.
3. Suivez les instructions contenues dans chaque fichier pour progresser dans votre apprentissage de MongoDB.

## Contribution

Ce repository est le fruit de mon apprentissage personnel de MongoDB. N'hésitez pas à utiliser ces ressources pour votre propre apprentissage et à contribuer si vous avez des suggestions ou des améliorations à proposer.

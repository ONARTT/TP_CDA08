# TP_CDA 08
=====================================================================

Présentation
------------

Web Society est une plateforme facilitant la mise en relation entre freelances et entreprises. Elle permet aux indépendants de découvrir des missions disponibles et de postuler directement via une interface intuitive. L'application charge dynamiquement les missions, enregistre les candidatures et affiche la liste des postulants en temps réel.

Fonctionnalités principales
---------------------------

-   **Affichage des missions disponibles** : chargement dynamique des missions depuis un fichier JSON ou une API REST simulée.

-   **Formulaire interactif** : sélection d'une mission et envoi des informations du candidat.

-   **Enregistrement des candidatures** : stockage des candidatures dans une API simulée.

-   **Gestion des candidatures** : suppression d'une candidature avec mise à jour instantanée de l'affichage.

Technologies utilisées
----------------------

-   **Frontend** : HTML, CSS, JavaScript (Fetch API).

-   **Backend Simulé** : JSON Server (ou utilisation d'un fichier JSON statique).

-   **Typographie** : Arista, AristaB, Creato.

Installation et Configuration
-----------------------------

### 1\. Cloner le projet

```
git clone https://github.com/ONARTT/TP_CDA08.git
cd web-society
```

### 2\. Installer JSON Server (si utilisé)

```
npm install -g json-server
```

### 3\. Démarrer le serveur JSON (si applicable)

```
json-server --watch data/missions.json --port 3000
```

### 4\. Lancer l'application

Ouvrez le fichier `index.html` dans un navigateur pour accéder à la plateforme.

Structure du projet
-------------------

```
web-society/
│── index.html          # Page principale
│── styles.css          # Fichier de styles
│── app.js              # Scripts JavaScript
│── data/
│   ├── missions.json   # Données simulées des missions
│── fonts/              # Dossier contenant les polices Arista et Creato
```

API Simulée
-----------

### Routes disponibles

-   **GET /missions** → Récupère la liste des missions.

-   **POST /candidatures** → Enregistre une nouvelle candidature.

-   **DELETE /candidatures/****:id** → Supprime une candidature.


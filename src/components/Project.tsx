import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>RAG NET</h2></a>
                <p>RAG on PDF</p> //TODO: Develop
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Projet de fin d'études – Application e-commerce microservices</h2></a>
                <p>ESGI Lyon De septembre 2024 à janvier 2025
                    Conception d’une application e-commerce pédagogique, pensée comme
                    support de cours pour un niveau Master 1
                    Participation au développement back-end en ASP.NET Core et Hono (panier),
                    intégration de RabbitMQ pour la communication entre services
                    Mise en place de l’architecture CI/CD avec GitHub Actions, et déploiement
                    complet sur AWS (ECR, EC2, S3)
                    Projet réalisé en équipe, accompagné de la création d’un cours structuré avec
                    vidéos, supports écrits et exercices pratiques
                </p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>CollectEats</h2></a>
                <p>Click and collect service for local restaurant</p> //TODO: Develop
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Template Stripe Microservice .NET</h2></a>
                <p>Stripe Microservice template in .net ready to checkout paiement</p> //TODO: Develop
            </div>
        </div>
    </div>
    );
}

export default Project;
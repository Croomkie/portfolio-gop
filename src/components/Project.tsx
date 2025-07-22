import React from "react";
import mockup01 from '../assets/images/mockup01.png';
import mockup02 from '../assets/images/mockup02.png';
import mockup03 from '../assets/images/mockup03.png';
import mockup04 from '../assets/images/mockup04.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a target="_blank" rel="noreferrer"><img src={mockup01} className="zoom" alt="thumbnail"
                                                             width="100%"/></a>
                    <a target="_blank" rel="noreferrer"><h2>RAG NET</h2></a>
                    <div className="project">
                        <p>
                            Développement d’un service <strong>IA clé-en-main</strong> pour intégrer une <strong>recherche
                            avancée par RAG (Retrieval-Augmented Generation)</strong> dans divers projets.
                        </p>
                        <p>
                            Objectif : <strong>simplifier l’ajout de capacités de recherche intelligente</strong> sans
                            complexité d’intégration, via une architecture modulaire et réutilisable.
                        </p>
                    </div>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer"><img src={mockup02} className="zoom" alt="thumbnail"
                                                             width="100%"/></a>
                    <a target="_blank" rel="noreferrer"><h2>Projet de fin d'études – Application e-commerce
                        microservices</h2></a>
                    <div className="project">
                        <p>
                            Application e-commerce pédagogique conçue comme support de cours Master 1 (<strong>ESGI
                            Lyon</strong>, sept. 2024 – janv. 2025).
                        </p>
                        <p>
                            Participation au <strong>développement back-end</strong> en <strong>ASP.NET
                            Core</strong> et <strong>Hono</strong> (panier), intégration
                            de <strong>RabbitMQ</strong> pour la communication entre services.
                        </p>
                        <p>
                            Mise en place du <strong>CI/CD</strong> via <strong>GitHub Actions</strong> et <strong>déploiement
                            sur AWS</strong> (ECR, EC2, S3). Projet réalisé en équipe avec création de supports
                            pédagogiques.
                        </p>
                    </div>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer"><img src={mockup04} className="zoom" alt="thumbnail"
                                                             width="100%"/></a>
                    <a target="_blank" rel="noreferrer"><h2>CollectEats</h2></a>
                    <div className="project">
                        <p>
                            Projet développé en <strong>ASP.NET Core</strong> et <strong>Angular</strong>, destiné aux
                            food
                            trucks et petits restaurants pour
                            <strong>vendre en ligne sans créer de site web</strong>.
                        </p>
                        <p>
                            L’application permet de <strong>présenter le menu</strong>, <strong>recevoir des
                            commandes</strong> en ligne et <strong>réduire les appels téléphoniques</strong>.
                        </p>
                    </div>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer"><img src={mockup03}
                                                             className="zoom"
                                                             alt="thumbnail"
                                                             width="100%"/></a>
                    <a target="_blank" rel="noreferrer"><h2>Template Stripe Microservice
                        .NET</h2></a>
                    <div className="project">
                        <p>
                            Template développé en <strong>.NET</strong> pour intégrer rapidement un système de <strong>paiement
                            Stripe</strong> via microservices.
                        </p>
                        <p>
                            Idéal pour les projets nécessitant un <strong>checkout prêt à l’emploi</strong> avec une
                            architecture <strong>modulaire et réutilisable</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
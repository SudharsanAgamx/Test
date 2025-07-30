import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Quick setup, platform overview, and core concepts to help you launch your first automation in minutes.
      </>
    ),
  },
  {
    title: 'Architecture',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Explore the system design, data flow, security, scalability, and integration points of the AgamX platform.
      </>
    ),
  },
  {
    title: 'Agents & Orchestration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Learn about agent types, registry, lifecycle, and how orchestration powers enterprise automation.
      </>
    ),
  },
  {
    title: 'Evaluation & Testing',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Shared strategies, metrics, and reporting for robust evaluation and continuous improvement.
      </>
    ),
  },
  {
    title: 'Tools & Integrations',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Discover built-in tools, authentication, and guides for integrating with external systems.
      </>
    ),
  },
  {
    title: 'Developer Guide',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Onboarding, environment setup, agent/workflow development, debugging, and best practices for contributors.
      </>
    ),
  },
  {
    title: 'API Reference',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Comprehensive API documentation: endpoints, parameters, error codes, and versioning.
      </>
    ),
  },
  {
    title: 'Operations',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Deployment, monitoring, maintenance, security, and compliance for enterprise-grade reliability.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Digitální malba a modelování',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Nauč se malovat v rychlokurzu digitální malby! Program ukazuje techniky,
        založené na klasické kresbě a malbě, upravené pro efektivní digitální tvorbu a design.
      </>
    ),
  },
  {
    title: 'Grafika a typografie',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Chceš vědět víc o grafickém designu a tvorbě knih? Kurzy navazují  na program digitální malb
        y a rozšiřují téma o užitnou grafiku a digitální sazbu.
         Odkaz na <code>docs</code> adresář.
      </>
    ),
  },
  {
    title: 'Filmový střih a animace',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Filmový střih přesouvá kreativitu do další dimenze. Objev základy filmového vyprávění a práci s časem!
        V kurzech využiješ svoje znalosti grafiky pro tvorbu trikových a 3D animací.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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

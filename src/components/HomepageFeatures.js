import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Digitální malba a modelování</Translate>,
    Svg: require('../../static/img/ikona-1.svg').default,
    description: (
      <>
        <Translate>Nauč se malovat v rychlokurzu digitální malby! Program ukazuje techniky,
        založené na klasické kresbě a malbě, upravené pro efektivní digitální tvorbu a design.</Translate>
      </>
    ),
  },
  {
    title: <Translate>Grafika a typografie</Translate>,
    Svg: require('../../static/img/ikona-2.svg').default,
    description: (
      <>
        <Translate>Chceš vědět víc o grafickém designu a tvorbě knih? Kurzy navazují  na program digitální malby
        a rozšiřují téma o užitnou grafiku a digitální sazbu.</Translate>
         </>
    ),
  },
  {
    title: <Translate>Filmový střih a animace</Translate>,
    Svg: require('../../static/img/ikona-3.svg').default,
    description: (
      <>
        <Translate>Filmový střih přesouvá kreativitu do další dimenze. Objev základy filmového vyprávění a práci s časem!
        V kurzech využiješ svoje znalosti grafiky pro tvorbu trikových a 3D animací a vizuálních efektů.</Translate>
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

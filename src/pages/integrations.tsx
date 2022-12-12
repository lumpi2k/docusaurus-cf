import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CardGrid from '@site/src/components/AvailableIntegrations/CardGrid';
import data from '@site/src/components/AvailableIntegrations/data';

import styles from './integrations.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title='PAYONE Available Integrations'
      description="An overview of available plug-ins and integrations for PAYONE">
      <main>
     
      <CardGrid data={data} />
        
      </main>
    </Layout>
  );
}

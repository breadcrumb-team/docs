import clsx from 'clsx';
import Heading from '@theme/Heading';
import {useAllDocsData} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

type CategoryItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  folder: string;
};

const CategoryList: CategoryItem[] = [
  {
    title: 'Spaces',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    folder: 'Spaces',
  },
  {
    title: 'Share',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    folder: 'Share',
  },
];

function Category({title, Svg, folder}: CategoryItem) {
  const allDocsData = useAllDocsData();
  const defaultDocsData = allDocsData['default'];
  const docs = Object.values(defaultDocsData.versions[0].docs);
  const categoryDocs = docs.filter(doc => doc.id.startsWith(folder.toLowerCase()));
  const articleCount = categoryDocs.length;

  return (
    <div className={clsx('col col--4')}>
      <div className={styles.categoryCard}>
        <div className="text--center">
          <Svg className={styles.categorySvg} role="img" />
        </div>
        <div className="text--center">
          <Heading as="h3">{title}</Heading>
          <p>{articleCount} articles</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CategoryList.map((props, idx) => (
            <Category key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

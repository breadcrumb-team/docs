import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
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
  const categoryDocs = docs.filter(doc => {
    const docPath = doc.id.toLowerCase();
    return docPath.startsWith(folder.toLowerCase()) && !docPath.endsWith('/intro');
  });
  const articleCount = categoryDocs.length;
  const introDoc = docs.find(doc => doc.id.toLowerCase() === folder.toLowerCase() + '/intro');
  const categoryLink = introDoc ? introDoc.path : `/docs/category/${folder.toLowerCase()}`;

  return (
    <div className={clsx('col col--4')}>
      <Link to={categoryLink} className={styles.categoryLink}>
        <div className={styles.categoryCard}>
          <div className="text--center">
            <Svg className={styles.categorySvg} role="img" />
          </div>
          <div className="text--center">
            <Heading as="h3">{title}</Heading>
            <p>{articleCount} articles</p>
          </div>
        </div>
      </Link>
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

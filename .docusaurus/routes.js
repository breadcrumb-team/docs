import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/community/',
    component: ComponentCreator('/community/', 'a24'),
    exact: true
  },
  {
    path: '/help/',
    component: ComponentCreator('/help/', '1bb'),
    exact: true
  },
  {
    path: '/markdown-page/',
    component: ComponentCreator('/markdown-page/', '54d'),
    exact: true
  },
  {
    path: '/search/',
    component: ComponentCreator('/search/', '7cb'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '91f'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '997'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '9c4'),
            routes: [
              {
                path: '/docs/category/spaces/',
                component: ComponentCreator('/docs/category/spaces/', '9e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Data/connectingsources/',
                component: ComponentCreator('/docs/Data/connectingsources/', 'a6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Data/intro/',
                component: ComponentCreator('/docs/Data/intro/', 'be0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro/',
                component: ComponentCreator('/docs/intro/', 'e44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Share/embed/',
                component: ComponentCreator('/docs/Share/embed/', '6fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Share/exports/',
                component: ComponentCreator('/docs/Share/exports/', 'e8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Share/intro/',
                component: ComponentCreator('/docs/Share/intro/', 'f58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Share/inviting-collaborators/',
                component: ComponentCreator('/docs/Share/inviting-collaborators/', 'f49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Share/publish/',
                component: ComponentCreator('/docs/Share/publish/', 'ac0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Spaces/groups/',
                component: ComponentCreator('/docs/Spaces/groups/', '0ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Spaces/intro/',
                component: ComponentCreator('/docs/Spaces/intro/', 'aff'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

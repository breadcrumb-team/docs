import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/community/',
    component: ComponentCreator('/docs/community/', 'a0b'),
    exact: true
  },
  {
    path: '/docs/help/',
    component: ComponentCreator('/docs/help/', 'eb2'),
    exact: true
  },
  {
    path: '/docs/markdown-page/',
    component: ComponentCreator('/docs/markdown-page/', '7aa'),
    exact: true
  },
  {
    path: '/docs/search/',
    component: ComponentCreator('/docs/search/', '6c9'),
    exact: true
  },
  {
    path: '/docs/docs/',
    component: ComponentCreator('/docs/docs/', '8a8'),
    routes: [
      {
        path: '/docs/docs/',
        component: ComponentCreator('/docs/docs/', '6f9'),
        routes: [
          {
            path: '/docs/docs/',
            component: ComponentCreator('/docs/docs/', '5fa'),
            routes: [
              {
                path: '/docs/docs/category/spaces/',
                component: ComponentCreator('/docs/docs/category/spaces/', '602'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Data/connectingsources/',
                component: ComponentCreator('/docs/docs/Data/connectingsources/', 'fc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Data/intro/',
                component: ComponentCreator('/docs/docs/Data/intro/', 'a56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/intro/',
                component: ComponentCreator('/docs/docs/intro/', '5fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Share/embed/',
                component: ComponentCreator('/docs/docs/Share/embed/', '0ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Share/exports/',
                component: ComponentCreator('/docs/docs/Share/exports/', '77c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Share/intro/',
                component: ComponentCreator('/docs/docs/Share/intro/', 'eea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Share/inviting-collaborators/',
                component: ComponentCreator('/docs/docs/Share/inviting-collaborators/', '74c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Share/publish/',
                component: ComponentCreator('/docs/docs/Share/publish/', 'a7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Spaces/groups/',
                component: ComponentCreator('/docs/docs/Spaces/groups/', '4c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/Spaces/intro/',
                component: ComponentCreator('/docs/docs/Spaces/intro/', '246'),
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
    path: '/docs/',
    component: ComponentCreator('/docs/', '2a6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

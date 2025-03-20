# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Update API References

We use [Redocusaurus](https://redocusaurus.vercel.app/) to render API docs automatically. To update the docs, do the following:

1. Get the latest `openapi.json` file from https://api.breadcrumb.ai/v1/openapi.json.
2. Convert the json to yaml using any json to yaml generator. E.g. https://www.bairesdev.com/tools/json2yaml/.
3. Save the yaml file under openapi/breadcrumb.yaml.
4. Deploy.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

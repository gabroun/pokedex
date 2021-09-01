## 🚀 Quick start

1.  **Install project**

    To install and run the project locally, by running the following command:

    ```shell
    npm install
    npm start
    ```

    then open http://localhost:8000/ where the site is running now

2.  **Run in production build**

    To run the project in production mode

    ```shell
    npm run build
    npm run serve
    ```

3.  **Dependencies used**

```text
gatsby modules
├── gatsby-image, gatsby-sharp, gatsby-transformer-sharp - to handle image rendering
├── gatsby-plugin-manifest, gatsby-plugin-offline, gatsby-plugin-sitemap - to handle pwa config and seo
├── react-helmet, gatsby-plugin-react-helmet - to handle seo
├── gatsby-source-graphql - to connect to external graphql API and put the schema under an arbitrary name
├── gatsby-source-filesystem - to source local file as data that can be queried in gatsby
└── gatsby-plugin-styled-components, styled-components - for styling react component

dev dependencies
├── eslint-import-resolver-alias, eslint-plugin-jsx-a11y, eslint-plugin-import, eslint-plugin-react - to enforce some rules during development
├── cypress, cypress-axe, @testing-library/cypress - used for end to end testing
├── jest, react-test-renderer, start-server-and-test, identity-obj-proxy - modules used for unit testing and for testing server for cypress
├── @testing-library/cypress, @testing-library/jest-dom, @testing-library/react - testing library used for testing in combination with jest and cypress
└── babel-jest, babel-plugin-styled-components, babel-preset-gatsby - transformers modules used for babel configs
```

4.  **To run tests**

To run the unit tests by executing the following command

```
npm test
```

To run the end to end tests by executing the following command

```
npm run test:e2e
```

You can view the project by visting this url: https://pokedex21.netlify.app/

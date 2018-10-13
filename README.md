![repo-banner](https://raw.githubusercontent.com/dnlnwk/react-mobx-app/master/src/images/react-mobx-repo-image.png)

# React/MobX Boilerplate 🚀 🛰

This is just a lightweight boilerplate with React and MobX. Just clone and have fun!

### Requirements

- [nodejs](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Technologies
- [React](https://reactjs.org/) (16.5.2)
- [MobX](https://mobx.js.org/) (5.5.0)
- [Babel](https://babeljs.io/)
- [jestjs.io](https://jestjs.io/)
- [Sass](https://sass-lang.com/)
- [webpack](https://webpack.js.org/)

## Installation

#### Clone project

```bash
$ git clone git@github.com:dnlnwk/react-mobx-app.git
$ cd react-mobx-app
```

#### Install dependencies

`yarn install` or `npm install`

## Development

`yarn dev` or `npm run dev`

Open in [http://localhost:8080/](http://localhost:8080/) 👨‍💻

## Testing with Jest

`yarn test` or `npm run test`

## Production

`yarn build` or `npm run build`

Production source in /dist folder


## File Structure

```
react-mobx-app/
├── dist/                       # Production build
├── node_modules/               # Dependencies
├── src/                        # React source
│   ├── js/                     # React Javascript (Vanilla)
│   │   ├── components/         # All React components
│   │   ├── pages/              # All React pages
│   │   ├── store/              # Mobx store
│   │   ├── App.js              # App wrapper
│   │   └── Routes.js           # React router
│   ├── styles/                 # SCSS architecture
│   │   ├── generals/           # General styles (type, stylesheet etc.)
│   │   ├── utils/              # Utils (functions, helpers, mixins)
│   │   ├── vendors/            # External styles 
│   │   └── main.scss           # SCSS mountpoint
│   ├── index.html              # Clean HTML Template with root id
│   └── index.js                # JS mountpoint
├── .babelrc                    # Babel config
├── package.json                # packages/scripts
├── README.md
└── webpck.config.js            # Webpack
```

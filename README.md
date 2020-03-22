# Random Movie Fetcher

A website that fetches a random movie's poster, title, genre, synopsis, and ImDB link and rating. 

I built this to practice using Material UI. 

## Getting Started

Here's a demo: https://random-movie-five.now.sh/ (Deployed with [Now](https://zeit.co/home))

## Installation and build

Fork (optional) and clone this repo.

Install dependencies with `npm`:
```shell 
npm install
```
To view the site:

### 1) Get an oMDb API key

Get a key from [oMDb](https://www.omdbapi.com/), create an `.env` file, and add the following:

```
"REACT_APP_OMDB_API"=put-oMDb-api-key-here
```

### 2) Start a development server or serve a production build

**Development server**

```shell
npm start
```

**Build a production version and deploy**
```shell
npm run build
```
And deploy accordingly.

With `node`, you can serve the build with:

```shell
npm install -g serve
serve -s build
```


### Built with

1. [React](https://reactjs.org/) - main UI library
2. [Material-UI](https://material-ui.com/) - UI component library
3. [npm](https://npmjs.com/) - npm package manager
4. [oMDb API](https://www.omdbapi.com/) - source of movie information

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

README template by [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

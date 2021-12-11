
# News Zone

Hey, I'm Yasin Yunesi. A React JS developer. News zone is a rather small web app I've
created lately. You can read about the latest news all around the world.


## Technologies

 - React JS (Javascript library)
 - Newsapi (Complete news api for deployment)
 - Bootstrap (Styling and positioning)
 - Sass (Unique designing)


## API Reference

#### Base URL

```http
  "https://newsapi.org/v2/"
```

#### Get news (e.g Top headlines)

```http
  GET ${base_URL}/top-headlines?country=us&category=general&apiKey=${API_KEY}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `string` | **Required**. Your API key |

#### Search news

```http
    GET ${base_URL}/everything?q=${query}&apiKey=${API_KEY}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `string` | **Required**. Your API key |
| `query`      | `string` | **Required**. The word to search for |



## Categories

 - Business
 - Entertainment
 - General
 - Health
 - Science
 - Sports
 - Technology


## Authors

- [@Yasin-Yunesi](https://findyasinyunesi.vercel.app/)

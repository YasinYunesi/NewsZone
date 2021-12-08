const API_KEY = "a9e28858004e44a7924a54ed1815156d";
const domains =
  "news.bbc.co.uk,economist.com,nytimes.com,msnbc.msn.com,cnn.com,abcnews.go.com,online.wsj.com,time.com,usatoday.com,washingtonpost.com,forbes.com,guardian.co.uk,latimes.com,timesonline.co.uk,foxnews.com,telegraph.co.uk,huffingtonpost.com,npr.org,cbsnews.com,csmonitor.com";

const TopHeadlines = `https://newsapi.org/v2/top-headlines?country=us&category=general&domains=${domains}&apiKey=${API_KEY}`;

const Newest = `https://newsapi.org/v2/top-headlines?country=us&category=general&domains=${domains}&apiKey=${API_KEY}`;

const MostViewed = `https://newsapi.org/v2/everything?domains=${domains}&apiKey=${API_KEY}`;

// categories
const Business = `https://newsapi.org/v2/top-headlines?country=us&category=business&domains=${domains}&apiKey=${API_KEY}`;
const Entertainment = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&domains=${domains}&apiKey=${API_KEY}`;
const General = `https://newsapi.org/v2/top-headlines?country=us&category=general&domains=${domains}&apiKey=${API_KEY}`;
const Health = `https://newsapi.org/v2/top-headlines?country=us&category=health&domains=${domains}&apiKey=${API_KEY}`;
const Science = `https://newsapi.org/v2/top-headlines?country=us&category=science&domains=${domains}&apiKey=${API_KEY}`;
const Sports = `https://newsapi.org/v2/top-headlines?country=us&category=sports&domains=${domains}&apiKey=${API_KEY}`;
const Technology = `https://newsapi.org/v2/top-headlines?country=us&category=technology&domains=${domains}&apiKey=${API_KEY}`;

export { TopHeadlines, Newest, MostViewed, Business, Entertainment, General, Health, Science, Sports, Technology };

export const fetchArticels = () => {
   return fetch(
     "https://newsapi.org/v2/top-headlines?country=us&apiKey=af5bb5cc5a2648608eb17984632940c9"
   ).then((res) => res.json());
 };


 
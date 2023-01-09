const API_URL = {
  base_url: "https://api.themoviedb.org/3/",
  IMG_W500: `https://image.tmdb.org/t/p/w500/${imgPath}`,
  IMG_Original: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  API_KEY: (imgPath) => "4ba85140a3815a44c77d9273f825f43b",
};

export default API_KEY;

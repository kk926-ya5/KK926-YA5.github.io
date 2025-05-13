var posts=["2024/05/12/51品茶/","2024/05/12/汤头条/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
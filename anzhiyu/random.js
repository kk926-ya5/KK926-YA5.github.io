var posts=["2024/05/12/暗网禁区/","2024/05/12/51品茶/","2024/05/12/汤头条/","2024/05/12/海角乱伦社区/","2024/05/12/萝莉岛/","2024/05/12/麻豆视频/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
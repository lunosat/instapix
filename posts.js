const postFake = [
  {
    username: 'carlinhos',
    profilePicture: 'images/carlinhos.jpg',
    image: 'https://telegra.ph/file/bcb82de9f58385b85b44e.jpg',
    likeCount: '1.020.020',
    description: 'Comemorando a vida e tudo o que você é meu amor... Sua festa tá linda, você é lindo.',
    minutesAgo: 48,
    postId: 1,
  },
  {
    username: 'neymarjr',
    profilePicture: 'images/neymar.jpg',
    image: 'images/neymar-post.jpg',
    description: ' ',
    likeCount: '1.021.431',
    minutesAgo: 32,
    postId: 2,
  },
  {
    username: 'sbt',
    profilePicture: 'images/sbt.jpg',
    image: 'images/sbt-post.jpg',
    description: ' ',
    likeCount: '431',
    minutesAgo: 32,
    postId: 3,
  },
  {
    username: 'tvglobo',
    profilePicture: 'images/tvglobo.jpg',
    image: 'images/tvglobo-post.jpg',
    description: ' ',
    likeCount: '1.431',
    minutesAgo: 32,
    postId: 4,
  },
  {
    username: 'joseloreto',
    profilePicture: 'images/joseloreto.jpg',
    image: 'images/joseloreto-post.jpg',
    description: ' ',
    likeCount: '5.431',
    minutesAgo: 32,
    postId: 5,
  },
  {
    username: 'ronaldinho',
    profilePicture: 'images/ronaldinho.jpg',
    image: 'images/ronaldinho-post.jpg',
    description: ' ',
    likeCount: '1.021.431',
    minutesAgo: 32,
    postId: 6,
  },
  {
    username: 'anitta',
    profilePicture: 'images/anitta.jpg',
    image: 'images/anitta-post.jpg',
    description: ' ',
    likeCount: '1.021.431',
    minutesAgo: 32,
    postId: 7,
  },
  {
    username: 'whinderssonnunes',
    profilePicture: 'images/whinderssonnunes.jpg',
    image: 'images/whinderssonnunes-post.jpg',
    description: ' ',
    likeCount: '1.021.431',
    minutesAgo: 32,
    postId: 8,
  },
  {
    username: 'marcelotwelve',
    profilePicture: 'images/marcelotwelve.jpg',
    image: 'images/marcelotwelve-post.jpg',
    description: ' ',
    likeCount: '1.021.431',
    minutesAgo: 32,
    postId: 9,
  },
  {
    username: 'tatawerneck',
    profilePicture: 'images/tatawerneck.jpg',
    image: 'images/tatawerneck-post.jpg',
    description: ' ',
    likeCount: '1.011.231',
    minutesAgo: 32,
    postId: 10,
  },
  {
    username: 'dra.deolanebezerra',
    profilePicture: 'images/deolane.jpg',
    image: 'images/deolane-post.jpg',
    description: ' ',
    likeCount: '1.021.431',
    minutesAgo: 32,
    postId: 11,
  },
  {
    username: 'tirullipa',
    profilePicture: 'images/tirulipa.jpg',
    image: 'images/tirulipa-post.jpg',
    description: ' ',
    likeCount: '1.021.431',
    minutesAgo: 32,
    postId: 12,
  },
];

const postTemplate = (
  username,
  profilePicture,
  image,
  description,
  likeCount,
  minutesAgo,
  likeBy,
  postId
) => `<article class="post">
<div class="post__header">
  <div class="post__profile">
    <a
      href="#"
      target="_blank"
      class="post__avatar"
    >
      <img src="${profilePicture}" alt="User Picture" />
    </a>
    <a
      href="#"
      target="_blank"
      class="post__user"
      >${username}</a
    >
  </div>

  <button class="post__more-options">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="6.5"
        cy="11.5"
        r="1.5"
        fill="var(--text-dark)"
      />
      <circle cx="12" cy="11.5" r="1.5" fill="var(--text-dark)" />
      <circle
        cx="17.5"
        cy="11.5"
        r="1.5"
        fill="var(--text-dark)"
      />
    </svg>
  </button>
</div>

<div class="post__content">
  <div class="post__medias">
    <img
      class="post__media"
      src="${image}"
      alt="Post Content"
    />
  </div>
</div>

<div class="post__footer">
  <div class="post__buttons">
    <button class="like__button pid_${postId}" onclick="like('${postId}')">
    <svg 
      fill="#000000"
      height="24" 
      width="24" 
      version="1.1" 
      id="Layer_1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 511.996 511.996" 
      xml:space="preserve">
      <g id="SVGRepo_bgCarrier" 
      stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" 
      stroke-linecap="round" 
      stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
       <g> <g> 
       <path d="M467.01,64.373c-29.995-29.995-69.299-44.988-108.612-44.988c-36.779,0-73.259,13.662-102.4,39.919 c-29.15-26.257-65.621-39.919-102.4-39.919c-39.313,0-78.618,14.993-108.612,44.988c-59.981,59.981-59.981,157.235,0,217.225 L255.998,492.61L467.01,281.598C526.991,221.609,526.991,124.363,467.01,64.373z M448.919,263.49L255.998,456.403L63.085,263.499 c-49.903-49.911-49.903-131.115,0-181.018c24.175-24.175,56.32-37.487,90.513-37.487c31.206,0,60.399,11.563,83.695,31.889 l18.705,17.485l18.714-17.493c23.296-20.318,52.489-31.889,83.695-31.889c34.193,0,66.33,13.312,90.513,37.487 C498.831,132.375,498.822,213.587,448.919,263.49z"></path> </g> </g> </g></svg>
    </button>
    <button class="post__button">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.2959 20.8165L20.2351 16.8602C20.1743 16.6385 20.2047 16.3994 20.309 16.1907C21.2351 14.3342 21.5438 12.117 20.9742 9.80402C20.2003 6.67374 17.757 4.16081 14.6354 3.33042C13.7833 3.10869 12.9442 3 12.1312 3C6.29665 3 1.74035 8.47365 3.31418 14.5647C4.04458 17.3819 7.05314 20.2992 9.88344 20.9861C10.6486 21.173 11.4008 21.26 12.1312 21.26C13.7006 21.26 15.1701 20.8557 16.4614 20.1601C16.6049 20.0818 16.7657 20.0383 16.9222 20.0383C17.0005 20.0383 17.0787 20.047 17.157 20.0688L21.009 21.0991C21.0307 21.1035 21.0525 21.1078 21.0699 21.1078C21.2177 21.1078 21.3351 20.9687 21.2959 20.8165ZM19.0178 17.1863L19.6178 19.4253L17.4831 18.8558C17.3005 18.8079 17.1135 18.7819 16.9222 18.7819C16.557 18.7819 16.1875 18.8775 15.8571 19.0558C14.6963 19.6818 13.4441 19.9992 12.1312 19.9992C11.4834 19.9992 10.8269 19.9166 10.1791 19.7601C7.78354 19.1775 5.14453 16.6037 4.53586 14.2473C3.90111 11.7865 4.40109 9.26057 5.90536 7.31719C7.40964 5.3738 9.6791 4.26081 12.1312 4.26081C12.8529 4.26081 13.5876 4.35646 14.3137 4.5521C16.9961 5.26511 19.0786 7.39544 19.7525 10.1084C20.2264 12.0213 20.0308 13.9299 19.183 15.6298C18.9395 16.1168 18.8787 16.6689 19.0178 17.1863Z"
          fill="var(--text-dark)"
          stroke="var(--text-dark)"
          stroke-width="0.7"
        />
      </svg>
    </button>
    <button class="post__button">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.8555 3.44542C22.6978 3.16703 22.3962 3 22.0714 3L2.91369 3.01392C2.52859 3.01392 2.19453 3.25055 2.05997 3.60781C1.96254 3.86764 1.98574 4.14603 2.11565 4.37338C2.16669 4.45689 2.23165 4.53577 2.31052 4.60537L9.69243 10.9712L11.4927 20.5338C11.5623 20.9096 11.8499 21.188 12.2304 21.2483C12.6062 21.3086 12.9774 21.1323 13.1723 20.8029L22.8509 4.35018C23.0179 4.06715 23.0179 3.72381 22.8555 3.44542ZM4.21748 4.39194H19.8164L10.4255 9.75089L4.21748 4.39194ZM12.6248 18.9841L11.1122 10.948L20.5171 5.58436L12.6248 18.9841Z"
          fill="var(--text-dark)"
          stroke="var(--text-dark)"
          stroke-width="0.3"
        />
      </svg>
    </button>

    <div class="post__indicators"></div>

    <button class="post__button post__button--align-right">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.875 2H4.125C3.50625 2 3 2.44939 3 3.00481V22.4648C3 23.0202 3.36563 23.1616 3.82125 22.7728L11.5444 16.1986C11.7244 16.0471 12.0225 16.0471 12.2025 16.1936L20.1731 22.7879C20.6287 23.1666 21 23.0202 21 22.4648V3.00481C21 2.44939 20.4994 2 19.875 2ZM19.3125 20.0209L13.3444 15.0827C12.9281 14.7394 12.405 14.5677 11.8763 14.5677C11.3363 14.5677 10.8019 14.7444 10.3856 15.0979L4.6875 19.9502V3.51479H19.3125V20.0209Z"
          fill="var(--text-dark)"
          stroke="var(--text-dark)"
          stroke-width="0.7"
        />
      </svg>
    </button>
  </div>

  <div class="post__infos">
    <div class="post__likes">
      <a href="#" class="post__likes-avatar">
        <img src="assets/default-user.png" alt="User Picture" />
      </a>

      <span
        >Curtido por
        <a class="post__name--underline" href="#">${likeBy}</a> e
        <a href="#">${likeCount} outros</a></span
      >
    </div>

    <div class="post__description">
      <span>
        <a
          class="post__name--underline"
          href="#"
          target="_blank"
          >${username}</a
        >
        ${description}
      </span>
    </div>

    <span class="post__date-time">${minutesAgo} minutos atrás</span>
  </div>
</div>
</article>`;

const getPosts = async () => {
  try {
    
    const response = await fetch(`${config.api}/posts`);
    const data = await response.json();
    if (data.status === 200) {
      let postss = data.posts.map((v) => {
        return {
          username: v.username,
          profilePicture: v.profilePicture || 'assets/default-user.png',
          image: v.image || 'assets/img1.jpg',
          description: v.description,
          likeCount: v.likeCount,
          minutesAgo: v.timeAgo.time,
          postId: v._id,
        };
      });
      console.log(postss);
      const postsHTML = postss
        .map((post) =>
          postTemplate(
            post.username,
            post.profilePicture,
            post.image,
            post.description,
            post.likeCount,
            post.minutesAgo,
            'Marcos Bandera',
            post.postId
          )
        )
        .join('');
      document.querySelector('.posts').innerHTML = postsHTML;
    }
  } catch (e) {
    console.log(e);
  }
};

getPosts()


/* const postsHTML = postFake
  .map((post) =>
    postTemplate(
      post.username,
      post.profilePicture,
      post.image,
      post.description,
      post.likeCount,
      post.minutesAgo,
      'Marcos Bandera',
      post.postId
    )
  )
  .join('');
document.querySelector('.posts').innerHTML = postsHTML;
console.log(postFake) */

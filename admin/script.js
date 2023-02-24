
// Selecionando os elementos do DOM
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

// Adicionando um event listener para cada link do menu de navegação
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = event.target.getAttribute('href');

    // Removendo a classe "active" de todos os links
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });

    // Adicionando a classe "active" ao link selecionado
    event.target.classList.add('active');

    // Escondendo todos os elementos "section"
    sections.forEach((section) => {
      section.style.display = 'none';
    });

    // Exibindo a seção correspondente
    const sectionToShow = document.querySelector(href);
    sectionToShow.style.display = 'block';
  });
});

// Exibindo a primeira seção por padrão
sections[0].style.display = 'block';
navLinks[0].classList.add('active');

//USERS

/* 
const userList = [
  { username: "JohnDoe", email: "johndoe@example.com" },
  { username: "JaneDoe", email: "janedoe@example.com" },
  { username: "BobSmith", email: "bobsmith@example.com" },
  { username: "AliceSmith", email: "alicesmith@example.com" },
  { username: "SamJohnson", email: "samjohnson@example.com" },
];
 */

let userList;
const searchInput = document.querySelector('#search-input');
const userListContainer = document.querySelector('.user-list');
const createUserButton = document.querySelector('.create-user-button');

// Function to display the list of users
async function displayUserList(users) {
  const response = await fetch(`${config.api}/posts`);
  const data = await response.json();

  userListContainer.innerHTML = '';

  users.forEach((user) => {
    const li = document.createElement('li');
    const nameSpan = document.createElement('span');
    const descriptionSpan = document.createElement('span');
    const editButton = document.createElement('button');
    nameSpan.classList.add('username');
    descriptionSpan.classList.add('email');
    editButton.classList.add('edit-button');
    editButton.classList.add(`user_${user.id}`);
    nameSpan.innerText = user.username;
    descriptionSpan.innerText = user.email;
    editButton.innerText = 'Editar';
    li.appendChild(nameSpan);
    li.appendChild(descriptionSpan);
    li.appendChild(editButton);
    userListContainer.appendChild(li);
  });
}

// Function to filter the list of users based on the search input
function filterUserList() {
  const searchValue = searchInput.value.toLowerCase();

  const filteredUsers = userList.filter((user) => {
    return (
      user.username.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue)
    );
  });

  displayUserList(filteredUsers);
}

// Initial display of the user list
(async () => {
  const response = await fetch(`${config.api}/users`);
  const data = await response.json();

  userList = data.map((v) => {
    return { username: v.username, email: v.email, id: v._id };
  });
  displayUserList(userList);

  const editButton = document.querySelectorAll('.edit-button');
  editButton.forEach((button) => {
    if (button.classList[1].includes('user')) {
      button.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(button.classList);
      });
    }
  });
})();

// Event listeners for search input and create user button
searchInput.addEventListener('input', filterUserList);

//POSTS

// Obtenha referências aos elementos relevantes
const authorsSection = document.getElementById('authors');
const searchInputPosts = document.querySelector('#search-input-posts');
const authorList = document.querySelector('.author-list');
const createAuthorButton = document.querySelector('.create-author-button');

// Crie um array de autores com objetos contendo nome e descrição
let authorsList;

// Renderize a lista de autores
function renderAuthors(authors) {
  // Limpe a lista atual
  authorList.innerHTML = '';
  // Para cada autor, crie um item de lista com nome, descrição e botão de editar
  authors.forEach((author) => {
    const li = document.createElement('li');
    const nameSpan = document.createElement('span');
    const descriptionSpan = document.createElement('span');
    const editButton = document.createElement('button');
    nameSpan.classList.add('author-name');
    descriptionSpan.classList.add('description');
    editButton.classList.add('edit-button');
    editButton.classList.add(`post_${author.id}`);
    nameSpan.innerText = author.name;
    descriptionSpan.innerText = author.description;
    editButton.innerText = 'Editar';
    li.appendChild(nameSpan);
    li.appendChild(descriptionSpan);
    li.appendChild(editButton);
    authorList.appendChild(li);
  });
}

// Adicione um ouvinte de eventos ao botão "Criar autor"
createAuthorButton.addEventListener('click', () => {
  // Lógica para criar um novo autor aqui
});

// Adicione um ouvinte de eventos ao campo de pesquisa

// Inicialize a lista de autores quando a página for carregada
(async () => {
  const response = await fetch(`${config.api}/posts`);
  const data = await response.json();
  if (data.status === 200) {
    authorsList = data.posts.map((v) => {
      return {
        name: v.username ? v.username : 'indefinido',
        description: v.description ? v.description : 'Indefinido',
        id: v._id,
      };
    });
  }
  renderAuthors(authorsList);

  const editButton = document.querySelectorAll('.edit-button');
  editButton.forEach((button) => {
    if (button.classList[1].includes('post')) {
      button.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(button.classList);
      });
    }
  });
})();

searchInputPosts.addEventListener('input', (e) => {
  e.preventDefault()
  const searchValue = searchInputPosts.value.toLowerCase();
  const filteredUsers = authorsList.filter((author) => {
    return (
      author.name.toLowerCase().includes(searchValue) ||
      author.description.toLowerCase().includes(searchValue)
    );
  });
  renderAuthors(filteredUsers);
});

function openCreateUserPopup() {
  document.getElementById('createUserPopup').style.display = 'flex';
}

function closeCreateUserPopup() {
  document.getElementById('createUserPopup').style.display = 'none';
}
function openEditUserPopup() {
  document.getElementById('editUserPopup').style.display = 'flex';
}

function closeEditUserPopup() {
  document.getElementById('editUserPopup').style.display = 'none';
}
function openCreatePostPopup() {
  document.getElementById('createPostPopup').style.display = 'flex';
}

function closeCreatePostPopup() {
  document.getElementById('createPostPopup').style.display = 'none';
}

const createUserForm = document.querySelector('#create-user-form')

createUserForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(createUserForm)
})

const createPostForm = document.querySelector('#create-post-form')


createPostForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  
  const url = document.querySelector('#ig-url').value
  const msg = document.querySelector('#create-post-message')

  const regexInstagram = /^(?:https?:\/\/)?(?:www\.)?(?:instagram\.com\/)([\w\.-]+)(?:\/([^\s\/?#]+))?/;
  const isInstagramLink = regexInstagram.test(url);
  if(!isInstagramLink) {
    msg.innerHTML = 'Link inválido!'
    return
  }
  msg.innerHTML = 'Carregando...'
  const response = await fetch(`${config.api}/createPostFromUrl`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: url
    }),
  });

  const data = await response.json()

  if(data.status === 200){
    msg.innerHTML = 'Post criado com sucesso!'
  } else {
    msg.innerHTML = `Erro ao criar post: ${data.message}`
  }

})

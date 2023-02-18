// Selecionando os elementos do DOM
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

// Adicionando um event listener para cada link do menu de navegação
navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const href = event.target.getAttribute("href");

    // Removendo a classe "active" de todos os links
    navLinks.forEach(link => {
      link.classList.remove("active");
    });

    // Adicionando a classe "active" ao link selecionado
    event.target.classList.add("active");

    // Escondendo todos os elementos "section"
    sections.forEach(section => {
      section.style.display = "none";
    });

    // Exibindo a seção correspondente
    const sectionToShow = document.querySelector(href);
    sectionToShow.style.display = "block";
  });
});

// Exibindo a primeira seção por padrão
sections[0].style.display = "block";
navLinks[0].classList.add("active");

//USERS

const userList = [
  { username: "JohnDoe", email: "johndoe@example.com" },
  { username: "JaneDoe", email: "janedoe@example.com" },
  { username: "BobSmith", email: "bobsmith@example.com" },
  { username: "AliceSmith", email: "alicesmith@example.com" },
  { username: "SamJohnson", email: "samjohnson@example.com" },
];

const searchInput = document.querySelector("#search-input");
const userListContainer = document.querySelector(".user-list");
const createUserButton = document.querySelector(".create-user-button");

// Function to display the list of users
function displayUserList(users) {
  userListContainer.innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    const nameSpan = document.createElement("span");
    const descriptionSpan = document.createElement("span");
    const editButton = document.createElement("button");
    nameSpan.classList.add("username");
    descriptionSpan.classList.add("email");
    editButton.classList.add("edit-button");
    nameSpan.innerText = user.username;
    descriptionSpan.innerText = user.email;
    editButton.innerText = "Editar";
    li.appendChild(nameSpan);
    li.appendChild(descriptionSpan);
    li.appendChild(editButton);
    userListContainer.appendChild(li);
    /* const userDiv = document.createElement("div");
    userDiv.className = "user-item";

    const username = document.createElement("h3");
    username.innerText = user.username;

    const email = document.createElement("p");
    email.innerText = user.email;
    email.className = "user-email";

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.className = "edit-button";

    userDiv.appendChild(username);
    userDiv.appendChild(email);
    userDiv.appendChild(editButton);
    userListContainer.appendChild(userDiv); */
  });
}

// Function to filter the list of users based on the search input
function filterUserList() {
  const searchValue = searchInput.value.toLowerCase();

  const filteredUsers = userList.filter((user) => {
    return user.username.toLowerCase().includes(searchValue) || user.email.toLowerCase().includes(searchValue);
  });

  displayUserList(filteredUsers);
}

// Initial display of the user list
displayUserList(userList);

// Event listeners for search input and create user button
searchInput.addEventListener("input", filterUserList);
createUserButton.addEventListener("click", () => alert("Create User button clicked"));


//POSTS

// Obtenha referências aos elementos relevantes
const authorsSection = document.getElementById("authors");
const searchInputPosts = document.querySelector('#search-input-posts')
const authorList = document.querySelector(".author-list");
const createAuthorButton = document.querySelector(".create-author-button");

// Crie um array de autores com objetos contendo nome e descrição
const authorsList = [
  { name: "Autor 1", description: "Descrição do autor 1..." },
  { name: "Autor 2", description: "Descrição do autor 2..." },
  { name: "Autor 3", description: "Descrição do autor 3..." }
  // Adicione mais autores aqui
];

// Renderize a lista de autores
function renderAuthors(authors) {
  // Limpe a lista atual
  authorList.innerHTML = "";
  // Para cada autor, crie um item de lista com nome, descrição e botão de editar
  authors.forEach((author) => {
    const li = document.createElement("li");
    const nameSpan = document.createElement("span");
    const descriptionSpan = document.createElement("span");
    const editButton = document.createElement("button");
    nameSpan.classList.add("author-name");
    descriptionSpan.classList.add("description");
    editButton.classList.add("edit-button");
    nameSpan.innerText = author.name;
    descriptionSpan.innerText = author.description;
    editButton.innerText = "Editar";
    li.appendChild(nameSpan);
    li.appendChild(descriptionSpan);
    li.appendChild(editButton);
    authorList.appendChild(li);
  });
}

// Adicione um ouvinte de eventos ao botão "Criar autor"
createAuthorButton.addEventListener("click", () => {
  // Lógica para criar um novo autor aqui
});

// Adicione um ouvinte de eventos ao campo de pesquisa
searchInputPosts.addEventListener("input", () => {
  const searchValue = searchInputPosts.value.toLowerCase();

  const filteredUsers = authorsList.filter((author) => {
    return author.name.toLowerCase().includes(searchValue) || author.description.toLowerCase().includes(searchValue);
  });
  renderAuthors(filteredUsers)
});

// Inicialize a lista de autores quando a página for carregada
renderAuthors(authorsList);



const openPopupButton = document.getElementById("open-popup");
const closePopupButton = document.getElementById("close-popup");
const popupContainer = document.getElementById("popup-container");

openPopupButton.addEventListener("click", function() {
  popupContainer.style.display = "flex";
});

closePopupButton.addEventListener("click", function() {
  popupContainer.style.display = "none";
});




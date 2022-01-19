let listaDestaque = document.querySelector('.secaoVideosDestaques__lista')
let listaTodosVideos = document.querySelector('.secaoTodosVideos ul')
let listaFila = document.querySelector('.secaoAdicionarAFila__lista')

// Array com os dados dos vídeos para o JavaScript construir no HTML
const listaVideos = [
  {
    id: 0,
    titulo: 'Conheça todo o universo da Kenzie Academy Brasil',
    visualizacoes: '5,3 mil',
    descricao:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!',
    thumbnail: './src/img/thumb1.webp'
  },
  {
    id: 1,
    titulo: 'Controlando o tamanho dos elementos com CSS',
    visualizacoes: '2,7 mil',
    descricao:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!',
    thumbnail: './src/img/thumb2.webp'
  },
  {
    id: 2,
    titulo: 'Conheça todo o universo da Kenzie Academy Brasil',
    visualizacoes: '5,3 mil',
    descricao:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!',
    thumbnail: './src/img/thumb1.webp'
  },
  {
    id: 3,
    titulo: 'Controlando o tamanho dos elementos com CSS',
    visualizacoes: '2,7 mil',
    descricao:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!',
    thumbnail: './src/img/thumb2.webp'
  }
]

// Função para listar os vídeos
function listarVideos(listaDestaque) {
  for (let i = 0; i < listaVideos.length; i++) {
    let titulo = listaVideos[i].titulo
    let visualizacoes = listaVideos[i].visualizacoes
    let descricao = listaVideos[i].descricao
    let thumbnail = listaVideos[i].thumbnail

    criarTemplate(listaDestaque, titulo, visualizacoes, descricao, thumbnail)
  }
}

// Listando vídeos na área dos destaques
listarVideos(listaDestaque)
// Listando vídeos na área de reproduzir todos
listarVideos(listaTodosVideos)

// Função para criar o modelo
function criarTemplate(
  listaDestaque,
  titulo,
  visualizacoes,
  descricao,
  thumbnail
) {
  let li = document.createElement('li')
  li.innerHTML = `
  <figure>
    <img src="${thumbnail}" alt="Thumbnail do vídeo" />
  </figure>

  <div>
    <h3>${titulo}</h3>
    <span>${visualizacoes}</span>
    <p>${descricao}</p>
    <button class="buttonAdicionarAFila">Adicionar a fila</button>
  </div>
  `

  listaDestaque.appendChild(li)
}

// Função de clique para adicionar na lista de reprodução
listaDestaque.addEventListener('click', adicionarFila)
listaTodosVideos.addEventListener('click', adicionarFila)

function adicionarFila(event) {
  const buttonName = event.target.tagName
  const button = event.target

  if (buttonName == 'BUTTON') {
    const li = button.closest('li')
    const liCopia = li.cloneNode(true)

    listaFila.appendChild(liCopia)
  }
}

// Função de clique para remover da lista de reprodução
listaFila.addEventListener('click', removerFila)

function removerFila(event) {
  const elementoName = event.target.tagName
  const elemento = event.target

  if (elementoName !== 'LI') {
    elemento.closest('li').remove()
  } else {
    elemento.remove()
  }
}

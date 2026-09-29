import './style.css'

interface Game {
  id: number
  title: string
  platform: string
  genre: string
  price: number
  rating: number
  image: string
}

const games: Game[] = [
  {
    id: 1,
    title: 'Cyber Nexus',
    platform: 'PC',
    genre: 'RPG',
    price: 199.90,
    rating: 4.8,
    image: '/images/cyber-nexus.jpg',
  },
  {
    id: 2,
    title: 'Shadow Protocol',
    platform: 'PS5',
    genre: 'Ação',
    price: 249.90,
    rating: 4.7,
    image: '/images/shadow-protocol.jpg',
  },
  {
    id: 3,
    title: 'Galaxy Raiders',
    platform: 'Xbox',
    genre: 'Aventura',
    price: 229.90,
    rating: 4.6,
    image: '/images/galaxy-raiders.jpg',
  },
  {
    id: 4,
    title: 'Kingdoms of Ash',
    platform: 'PC',
    genre: 'RPG',
    price: 179.90,
    rating: 4.9,
    image: '/images/kingdoms-of-ash.jpg',
  },
  {
    id: 5,
    title: 'Neon Velocity',
    platform: 'PS5',
    genre: 'Corrida',
    price: 159.90,
    rating: 4.5,
    image: '/images/neon-velocity.jpg',
  },
  {
    id: 6,
    title: 'Monster Frontier',
    platform: 'Switch',
    genre: 'Aventura',
    price: 219.90,
    rating: 4.7,
    image: '/images/monster-frontier.jpg',
  },
]

const app = document.querySelector<HTMLDivElement>('#app')!

function formatPrice(price: number): string {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

function renderHeader(): string {
  return `
    <header class="header">
      <div class="container header-content">
        <a href="#" class="logo" data-route="home">
          <span class="logo-game">Game</span><span class="logo-fast">Fast</span>
        </a>

        <nav class="nav">
          <a href="#" data-route="home">Início</a>
          <a href="#games" data-route="games">Jogos</a>
        </nav>

        <button class="cart-button" type="button">
          🛒 Carrinho <span class="cart-count">0</span>
        </button>
      </div>
    </header>
  `
}

function renderHome(): string {
  return `
    <main>
      <section
        class="hero"
        style="background-image:
          linear-gradient(
            90deg,
            #0d0d12 0%,
            rgba(13, 13, 18, 0.8) 55%,
            rgba(13, 13, 18, 0.35)
          ),
          url('/images/site-banner.jpg');"
      >
        <div class="container hero-content">
          <div>
            <span class="hero-label">GAMEFAST</span>
            <h1>Seu próximo jogo está aqui.</h1>
            <p>
              Encontre jogos para PC e consoles, confira as avaliações
              e descubra sua próxima aventura.
            </p>
            <a href="#games" class="button" data-route="games">
              Explorar jogos
            </a>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-heading">
            <div>
              <span class="section-label">DESTAQUES</span>
              <h2>Jogos em destaque</h2>
            </div>
            <a href="#games" data-route="games">Ver todos →</a>
          </div>

          <div class="game-grid">
            ${games
              .slice(0, 4)
              .map(renderGameCard)
              .join('')}
          </div>
        </div>
      </section>
    </main>
  `
}

function renderGames(): string {
  return `
    <main class="section">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="section-label">CATÁLOGO</span>
            <h1>Todos os jogos</h1>
          </div>
        </div>

        <div class="filters">
          <button class="filter active" type="button">Todos</button>
          <button class="filter" type="button">PC</button>
          <button class="filter" type="button">PS5</button>
          <button class="filter" type="button">Xbox</button>
          <button class="filter" type="button">Switch</button>
        </div>

        <div class="game-grid">
          ${games.map(renderGameCard).join('')}
        </div>
      </div>
    </main>
  `
}

function renderGameCard(game: Game): string {
  return `
    <article class="game-card">
      <a href="#game/${game.id}" data-game-id="${game.id}">
        <img
          src="${game.image}"
          alt="Capa do jogo ${game.title}"
          loading="lazy"
        />

        <div class="game-info">
          <span class="platform">${game.platform}</span>
          <h3>${game.title}</h3>
          <p class="genre">${game.genre}</p>

          <div class="game-meta">
            <span>★ ${game.rating}</span>
            <strong>${formatPrice(game.price)}</strong>
          </div>
        </div>
      </a>
    </article>
  `
}

function renderGame(game: Game): string {
  return `
    <main class="section">
      <div class="container">
        <a href="#games" data-route="games" class="back-link">
          ← Voltar para jogos
        </a>

        <div class="product">
          <img
            src="${game.image}"
            alt="Capa do jogo ${game.title}"
          />

          <div class="product-info">
            <span class="platform">${game.platform}</span>
            <h1>${game.title}</h1>
            <p class="genre">${game.genre}</p>

            <div class="rating">
              ★ ${game.rating} / 5
            </div>

            <p class="description">
              Explore um mundo cheio de desafios, descubra novos lugares
              e viva uma experiência inesquecível neste grande lançamento.
            </p>

            <strong class="product-price">
              ${formatPrice(game.price)}
            </strong>

            <button class="button add-cart" type="button">
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </main>
  `
}

function renderNotFound(): string {
  return `
    <main class="section">
      <div class="container not-found">
        <h1>Jogo não encontrado</h1>
        <a href="#games" data-route="games">Voltar para o catálogo</a>
      </div>
    </main>
  `
}

function render(): void {
  const hash = window.location.hash

  let content = ''

  if (hash.startsWith('#game/')) {
    const id = Number(hash.split('/')[1])
    const game = games.find((item) => item.id === id)

    content = game ? renderGame(game) : renderNotFound()
  } else if (hash === '#games') {
    content = renderGames()
  } else {
    content = renderHome()
  }

  app.innerHTML = `
    ${renderHeader()}
    ${content}
    <footer class="footer">
      <div class="container">
        <p>© 2026 GameFast. Projeto educacional.</p>
      </div>
    </footer>
  `
}

window.addEventListener('hashchange', render)

render()
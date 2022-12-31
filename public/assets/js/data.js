const data = [
  {
    title: 'Product preview card component',
    url: './public/views/product-preview-card-component/index.html',
    img: './public/assets/img/product-preview-card-component.png',
    tags: ['html', 'css']
  },
  {
    title: 'QR code',
    url: 'https://amaya-14.github.io/qr-code/',
    img: './public/assets/img/qr-code.png',
    tags: ['html', 'css', 'javascipt']
  },
  {
    title: 'Interactive rating component',
    url: './public/views/interactive-rating-component/index.html',
    img: './public/assets/img/interactive-rating-component.png',
    tags: ['html', 'css', 'javascipt']
  }
]

const list = document.querySelector('#list')

const dataOrder = data.sort((prev, next) => {
  if (prev.name > next.name) return 1
  if (prev.name < next.name) return -1
  return 0
})

let items = ''

dataOrder.forEach(async (item) => {
  const { title, url, img, tags } = item

  let listTags = ''

  tags?.forEach(tag => {
    listTags += `
    <p>${tag}</p>
    `
  })

  items += `
  <section class="card">
    <a class="card__link" href="${url}">
      <picture class="card__preview">
        <img src="${img}" alt="preview">
      </picture>
      <div class="card__info">
        <h2 class="card__title">
          ${title}
        </h2>
        <div class="card__tag">
          ${listTags}
        </div>
      </div>
    </a>
  </section>
`
})

list.innerHTML = items

// crie um web componete com javascript e bootstrap que seja um carrosel de duas imagens que se passem automaticamente a cada 3 segundos
class Carrosel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['width', 'height'];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.startCarousel();
  }

  startCarousel() {
    const items = this.shadowRoot.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    setInterval(() => {
      items[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % items.length;
      items[currentIndex].classList.add('active');
    }, 3000);
  }

  render() {
    const width = this.getAttribute('width') || '400px';
    const height = this.getAttribute('height') || '250px';

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <style>
        .carousel-container {
          margin: auto;
        }
        .carousel-inner, .carousel-item, .carousel-item img {
          width: 100%;
          height: 100%;
        }
        .carousel-item img {
          object-fit: cover;
        }
      </style>
      <div class="carousel-container rounded">
        <div class="carousel slide rounded" data-ride="carousel" data-interval="3000">
          <div class="carousel-inner rounded">
            <div class="carousel-item active">
              <slot name="ativo">
                <img src="./public/arte-1.png" class="d-block" alt="Imagem 1">
              </slot>
            </div>
            <div class="carousel-item">
              <slot name="inativo">
                <img src="./public/arte-2.png" class="d-block" alt="Imagem 2">
              </slot>
            </div>
          </div>
        </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
    `;
  }
}
customElements.define('carrosel-component', Carrosel);
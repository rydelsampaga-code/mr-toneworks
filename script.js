const products = [
  { id: 1, name: 'Yamaha F310 Acoustic Guitar', category: 'Acoustic Guitars', price: 199.99, image: 'https://images.unsplash.com/photo-1520167112707-56e25f2d7d6e?auto=format&fit=crop&w=1080&q=80', rating: 4.8, reviews: 342, description: 'A beginner-friendly acoustic guitar with dependable playability and a balanced warm sound.', tone: 'Bright, sweet, beginner-friendly acoustic tone.', bestGenres: ['Country', 'Folk', 'Worship', 'Pop'], bestStyles: ['Strumming', 'Singer-Songwriter', 'School Performance', 'Practice'], skillLevel: 'Beginner to Intermediate' },
  { id: 2, name: 'Fender CD-60S Dreadnought', category: 'Acoustic Guitars', price: 249.99, image: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=1080&q=80', rating: 4.9, reviews: 428, description: 'A classic dreadnought-style acoustic built for full projection and clear rhythm playing.', tone: 'Full, balanced dreadnought acoustic tone.', bestGenres: ['Worship', 'Country', 'Pop', 'Singer-Songwriter'], bestStyles: ['Strumming', 'Fingerpicking', 'Worship Leading', 'Pop Acoustic'], skillLevel: 'Beginner to Advanced' },
  { id: 3, name: 'Yamaha C40 Classical Guitar', category: 'Nylon/Classical Guitars', price: 179.99, image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&w=1080&q=80', rating: 4.7, reviews: 521, description: 'A comfortable nylon-string guitar trusted by beginners and music students.', tone: 'Warm, soft nylon-string tone.', bestGenres: ['Classical', 'Folk', 'Beginner'], bestStyles: ['Fingerstyle', 'Classical', 'Folk', 'School Practice'], skillLevel: 'Beginner' },
  { id: 4, name: 'Cordoba C5 Classical Guitar', category: 'Nylon/Classical Guitars', price: 379.99, image: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?auto=format&fit=crop&w=1080&q=80', rating: 4.9, reviews: 287, description: 'An expressive classical guitar with a warm tone for refined fingerstyle performance.', tone: 'Warm, expressive, traditional nylon tone.', bestGenres: ['Classical', 'Latin', 'Folk'], bestStyles: ['Fingerstyle', 'Classical Performance', 'Latin', 'Soft Acoustic'], skillLevel: 'Intermediate to Advanced' },
  { id: 5, name: 'Fender Player II Stratocaster', category: 'Electric Guitars', price: 899.99, image: 'https://images.unsplash.com/photo-1771890949433-5e1e3576655b?auto=format&fit=crop&w=1080&q=80', rating: 4.9, reviews: 612, description: 'A versatile electric guitar known for bright single-coil clarity and smooth playability.', tone: 'Bright, clear, versatile single-coil tone.', bestGenres: ['Pop', 'Blues', 'Funk', 'Worship', 'Indie', 'Classic Rock'], bestStyles: ['Lead Guitar', 'Rhythm', 'Funk', 'Blues', 'Worship'], skillLevel: 'Intermediate to Advanced' },
  { id: 6, name: 'Gibson Les Paul Standard 50s', category: 'Electric Guitars', price: 2499.99, image: 'https://images.unsplash.com/photo-1601956349578-c31521587860?auto=format&fit=crop&w=1080&q=80', rating: 5.0, reviews: 389, description: 'A powerful electric guitar with thick humbucker sustain and classic rock character.', tone: 'Thick, warm, powerful humbucker tone.', bestGenres: ['Rock', 'Blues', 'Hard Rock', 'Metal'], bestStyles: ['Lead Guitar', 'Sustain-Heavy Solos', 'Blues', 'Rock'], skillLevel: 'Intermediate to Professional' },
  { id: 7, name: 'Ibanez RG421', category: 'Electric Guitars', price: 499.99, image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=1080&q=80', rating: 4.8, reviews: 456, description: 'A fast-playing electric guitar designed for modern rock and metal techniques.', tone: 'Fast, aggressive, modern electric tone.', bestGenres: ['Metal', 'Rock', 'Hard Rock'], bestStyles: ['Shredding', 'Lead Guitar', 'Metal', 'Fast Playing'], skillLevel: 'Intermediate to Advanced' },
  { id: 8, name: 'Fender Player Precision Bass', category: 'Bass Guitars', price: 799.99, image: 'https://images.unsplash.com/photo-1657896003520-ca33001fd4f3?auto=format&fit=crop&w=1080&q=80', rating: 4.9, reviews: 334, description: 'A strong bass guitar that gives bands a punchy foundation and clear low-end power.', tone: 'Punchy, strong low-end tone.', bestGenres: ['Rock', 'Worship', 'Pop', 'Punk'], bestStyles: ['Band Performance', 'Recording', 'Live Performance', 'Rock'], skillLevel: 'Beginner to Professional' },
  { id: 9, name: 'Yamaha TRBX174 Bass', category: 'Bass Guitars', price: 299.99, image: 'https://images.unsplash.com/photo-1588031030984-d05c6c01587d?auto=format&fit=crop&w=1080&q=80', rating: 4.7, reviews: 267, description: 'A balanced and comfortable bass guitar for students, beginners, and band practice.', tone: 'Balanced, beginner-friendly bass tone.', bestGenres: ['Pop', 'Rock', 'Beginner'], bestStyles: ['Groove', 'Pop', 'Band Practice', 'Learning'], skillLevel: 'Beginner to Intermediate' },
  { id: 10, name: 'Yamaha P-125 Digital Piano', category: 'Keyboards', price: 649.99, image: 'https://images.unsplash.com/photo-1681683967405-7efef2cd810c?auto=format&fit=crop&w=1080&q=80', rating: 4.9, reviews: 521, description: 'A portable digital piano with weighted keys and expressive piano sound.', tone: 'Authentic piano tone with versatile built-in sounds.', bestGenres: ['Classical', 'Pop', 'Worship', 'Jazz'], bestStyles: ['Piano Performance', 'Practice', 'Recording', 'Live Performance'], skillLevel: 'Beginner to Professional' },
  { id: 11, name: 'Pearl Export 5-Piece Drum Kit', category: 'Drums', price: 899.99, image: 'https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&w=1080&q=80', rating: 4.8, reviews: 298, description: 'A complete drum kit for practice, school bands, worship teams, and live performances.', tone: 'Full, punchy drum tone.', bestGenres: ['Rock', 'Pop', 'Worship', 'Metal'], bestStyles: ['Band Performance', 'Practice', 'Recording', 'Live Shows'], skillLevel: 'Beginner to Advanced' },
  { id: 12, name: 'Fender Deluxe Guitar Cable 18ft', category: 'Accessories', price: 29.99, image: 'https://images.unsplash.com/photo-1613837434333-02f73d9cfaf5?auto=format&fit=crop&w=1080&q=80', rating: 4.7, reviews: 789, description: 'A durable instrument cable for studio, stage, and everyday practice.', tone: 'Crystal-clear signal transmission.', bestGenres: ['All Genres'], bestStyles: ['Studio Recording', 'Live Performance', 'Practice'], skillLevel: 'All Levels' }
];

const categories = [
  { name: 'Acoustic Guitars', desc: 'Natural sound for country, folk, worship, and songwriting.', image: 'https://images.unsplash.com/photo-1520167112707-56e25f2d7d6e?auto=format&fit=crop&w=1080&q=80' },
  { name: 'Nylon/Classical Guitars', desc: 'Soft nylon tone for classical, folk, and fingerstyle.', image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&w=1080&q=80' },
  { name: 'Electric Guitars', desc: 'Plugged-in power for rock, metal, blues, pop, and worship.', image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=1080&q=80' },
  { name: 'Bass Guitars', desc: 'Low-end groove for bands, recording, and live performance.', image: 'https://images.unsplash.com/photo-1657896003520-ca33001fd4f3?auto=format&fit=crop&w=1080&q=80' },
  { name: 'Keyboards', desc: 'Piano, worship, composition, and studio production.', image: 'https://images.unsplash.com/photo-1681683967405-7efef2cd810c?auto=format&fit=crop&w=1080&q=80' },
  { name: 'Drums', desc: 'Drive the beat and command the stage.', image: 'https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&w=1080&q=80' },
  { name: 'Accessories', desc: 'Cables, picks, straps, and essentials for your setup.', image: 'https://images.unsplash.com/photo-1613837434333-02f73d9cfaf5?auto=format&fit=crop&w=1080&q=80' }
];

const genres = {
  Country: ['Yamaha F310 Acoustic Guitar', 'Fender CD-60S Dreadnought'],
  Folk: ['Yamaha F310 Acoustic Guitar', 'Yamaha C40 Classical Guitar'],
  Worship: ['Fender CD-60S Dreadnought', 'Yamaha F310 Acoustic Guitar', 'Fender Player II Stratocaster', 'Yamaha P-125 Digital Piano'],
  Rock: ['Gibson Les Paul Standard 50s', 'Fender Player II Stratocaster', 'Pearl Export 5-Piece Drum Kit'],
  Metal: ['Ibanez RG421', 'Gibson Les Paul Standard 50s'],
  Blues: ['Fender Player II Stratocaster', 'Gibson Les Paul Standard 50s'],
  Classical: ['Yamaha C40 Classical Guitar', 'Cordoba C5 Classical Guitar'],
  Beginner: ['Yamaha F310 Acoustic Guitar', 'Yamaha C40 Classical Guitar', 'Yamaha TRBX174 Bass']
};

let cartCount = 0;
const productGrid = document.getElementById('productGrid');
const categoryGrid = document.getElementById('categoryGrid');
const genreTabs = document.getElementById('genreTabs');
const genreResult = document.getElementById('genreResult');
const modal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');

function money(value) { return '$' + value.toFixed(2); }
function tagList(items) { return items.map(item => `<span class="tag">${item}</span>`).join(''); }

function renderCategories() {
  categoryGrid.innerHTML = categories.map(cat => `
    <article class="category-card" data-category="${cat.name}">
      <img src="${cat.image}" alt="${cat.name}">
      <div class="card-body">
        <h3>${cat.name}</h3>
        <p>${cat.desc}</p>
        <span class="explore">Explore ›</span>
      </div>
    </article>
  `).join('');
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      renderProducts(products.filter(p => p.category === category));
      document.getElementById('best-sellers').scrollIntoView({ behavior: 'smooth' });
      document.getElementById('productSubtitle').textContent = `Showing products under ${category}.`;
    });
  });
}

function renderProducts(list = products) {
  productGrid.innerHTML = list.map(product => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="card-body">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <div class="product-price">${money(product.price)}</div>
        <p>${product.tone}</p>
        <div class="card-actions">
          <button class="small-btn view-btn" data-id="${product.id}">View Details</button>
          <button class="small-btn outline-btn add-btn" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    </article>
  `).join('');
  document.querySelectorAll('.view-btn').forEach(btn => btn.addEventListener('click', () => openProduct(Number(btn.dataset.id))));
  document.querySelectorAll('.add-btn').forEach(btn => btn.addEventListener('click', () => addToCart()));
}

function openProduct(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  modalBody.innerHTML = `
    <div class="modal-grid">
      <img src="${product.image}" alt="${product.name}">
      <div class="modal-info">
        <p class="category-label">${product.category}</p>
        <h3>${product.name}</h3>
        <div class="product-price">${money(product.price)}</div>
        <p>⭐ ${product.rating} | ${product.reviews} reviews</p>
        <div class="info-block"><h4>Description</h4><p>${product.description}</p></div>
        <div class="info-block"><h4>Tone</h4><p>${product.tone}</p></div>
        <div class="info-block"><h4>Best Genres</h4><div class="tags">${tagList(product.bestGenres)}</div></div>
        <div class="info-block"><h4>Best Playing Styles</h4><div class="tags">${tagList(product.bestStyles)}</div></div>
        <div class="info-block"><h4>Recommended Skill Level</h4><p>${product.skillLevel}</p></div>
        <button class="primary-btn" onclick="addToCart()">Add to Cart</button>
        <button class="secondary-btn" onclick="closeProductModal()">Back to Products</button>
      </div>
    </div>
  `;
  modal.classList.add('active');
}

function closeProductModal() { modal.classList.remove('active'); }
function addToCart() { cartCount++; document.getElementById('cartCount').textContent = cartCount; }

function renderGenres(activeGenre = 'Country') {
  genreTabs.innerHTML = Object.keys(genres).map(genre => `<button class="${genre === activeGenre ? 'active' : ''}" data-genre="${genre}">${genre}</button>`).join('');
  updateGenreResult(activeGenre);
  document.querySelectorAll('.genre-tabs button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.genre-tabs button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateGenreResult(btn.dataset.genre);
    });
  });
}

function updateGenreResult(genre) {
  const names = genres[genre];
  const recommended = products.filter(p => names.includes(p.name));
  genreResult.innerHTML = `
    <h3>${genre} Recommendations</h3>
    <p>For ${genre}, MR ToneWorks recommends instruments that match the tone, feel, and playing style of the genre.</p>
    <ul>${recommended.map(p => `<li>${p.name}</li>`).join('')}</ul>
  `;
}

function filterSearch(query) {
  const q = query.toLowerCase();
  const results = products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.bestGenres.join(' ').toLowerCase().includes(q) ||
    p.tone.toLowerCase().includes(q)
  );
  renderProducts(results);
  document.getElementById('best-sellers').scrollIntoView({ behavior: 'smooth' });
  document.getElementById('productSubtitle').textContent = query ? `Search results for: ${query}` : 'Click any product to view tone, genre fit, and full listing details.';
}

document.querySelectorAll('[data-scroll]').forEach(btn => btn.addEventListener('click', () => document.getElementById(btn.dataset.scroll).scrollIntoView({ behavior: 'smooth' })));
document.getElementById('searchToggle').addEventListener('click', () => document.getElementById('searchPanel').classList.toggle('active'));
document.getElementById('searchInput').addEventListener('input', e => filterSearch(e.target.value));
document.getElementById('menuBtn').addEventListener('click', () => document.getElementById('navLinks').classList.toggle('active'));
document.getElementById('closeModal').addEventListener('click', closeProductModal);
modal.addEventListener('click', e => { if (e.target === modal) closeProductModal(); });
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formMessage').textContent = 'Thank you for contacting MR ToneWorks!';
  e.target.reset();
});

renderCategories();
renderProducts();
renderGenres();

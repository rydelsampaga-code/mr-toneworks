const pesos = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 });

const image = (query) => `https://source.unsplash.com/900x700/?${encodeURIComponent(query)}`;

const categories = [
  { name: 'Acoustic Guitars', key: 'Acoustic Guitars', img: image('steel string acoustic guitar dreadnought'), desc: 'Steel-string acoustics for country, folk, worship, and songwriting.' },
  { name: 'Nylon/Classical Guitars', key: 'Nylon/Classical Guitars', img: image('classical nylon guitar'), desc: 'Warm nylon-string guitars for classical, folk, Latin, and fingerstyle.' },
  { name: 'Electric Guitars', key: 'Electric Guitars', img: image('electric guitar stratocaster les paul'), desc: 'Electric guitars for rock, blues, metal, pop, funk, and stage work.' },
  { name: 'Bass Guitars', key: 'Bass Guitars', img: image('bass guitar'), desc: 'Low-end groove machines for bands, worship, funk, rock, and recording.' },
  { name: 'Keyboards', key: 'Keyboards', img: image('digital piano keyboard'), desc: 'Digital pianos and keyboards for worship, composition, and studio work.' },
  { name: 'Drums', key: 'Drums', img: image('drum kit'), desc: 'Acoustic and electronic kits for rhythm, performance, and practice.' },
  { name: 'Accessories', key: 'Accessories', img: image('guitar accessories picks capo strings'), desc: 'Strings, picks, capos, straps, tuners, and cables.' }
];

const products = [
  // Acoustic
  { id: 1, name: 'Martin D-28', category: 'Acoustic Guitars', price: 175000, stock: 'In Stock', img: image('Martin D-28 acoustic guitar'), desc: 'Legendary dreadnought acoustic with strong projection and rosewood-style depth.', tone: 'Powerful bass, clear trebles, rich sustain, bluegrass-ready authority.', genres: ['Bluegrass','Country','Folk','Worship'], styles: ['Flatpicking','Strumming','Singer-songwriter'], level: 'Intermediate to Professional' },
  { id: 2, name: 'Martin D-18', category: 'Acoustic Guitars', price: 155000, stock: 'In Stock', img: image('Martin D-18 acoustic guitar'), desc: 'Classic mahogany-style dreadnought known for dry, focused, woody response.', tone: 'Warm, punchy, direct, and earthy with strong midrange.', genres: ['Country','Folk','Bluegrass','Americana'], styles: ['Flatpicking','Rhythm','Storytelling songs'], level: 'Intermediate to Professional' },
  { id: 3, name: 'Taylor 814ce', category: 'Acoustic Guitars', price: 215000, stock: 'Limited Stock', img: image('Taylor 814ce acoustic guitar'), desc: 'Premium grand auditorium acoustic-electric for stage and studio versatility.', tone: 'Hi-fi clarity, sparkling top end, balanced low end, modern acoustic polish.', genres: ['Pop','Worship','Country','Fingerstyle'], styles: ['Fingerstyle','Live performance','Recording'], level: 'Advanced to Professional' },
  { id: 4, name: 'Taylor GS Mini', category: 'Acoustic Guitars', price: 48900, stock: 'In Stock', img: image('Taylor GS Mini acoustic guitar'), desc: 'Compact acoustic with a surprisingly full sound and easy travel-friendly body.', tone: 'Bright, compact, lively, and clear.', genres: ['Pop','Folk','Travel','Beginner'], styles: ['Casual strumming','Practice','Songwriting'], level: 'Beginner to Intermediate' },
  { id: 5, name: 'Yamaha F310 Acoustic Guitar', category: 'Acoustic Guitars', price: 7990, stock: 'In Stock', img: image('Yamaha F310 acoustic guitar'), desc: 'Affordable steel-string acoustic ideal for students and beginners.', tone: 'Bright, sweet, beginner-friendly acoustic tone.', genres: ['Beginner','Folk','Country','Worship'], styles: ['Strumming','Practice','School performance'], level: 'Beginner' },
  { id: 6, name: 'Fender CD-60S Dreadnought', category: 'Acoustic Guitars', price: 14990, stock: 'In Stock', img: image('Fender CD-60S acoustic guitar'), desc: 'Comfortable dreadnought with full sound for strummers and singer-songwriters.', tone: 'Full, balanced dreadnought tone with good projection.', genres: ['Worship','Pop Acoustic','Country','Folk'], styles: ['Strumming','Singing accompaniment','Live acoustic'], level: 'Beginner to Intermediate' },

  // Nylon
  { id: 7, name: 'Yamaha C40 Classical Guitar', category: 'Nylon/Classical Guitars', price: 6990, stock: 'In Stock', img: image('Yamaha C40 classical nylon guitar'), desc: 'Popular entry-level classical guitar with soft nylon strings.', tone: 'Warm, soft, rounded nylon-string tone.', genres: ['Classical','Folk','Beginner','School'], styles: ['Classical basics','Fingerstyle','Practice'], level: 'Beginner' },
  { id: 8, name: 'Cordoba C5 Classical Guitar', category: 'Nylon/Classical Guitars', price: 25900, stock: 'In Stock', img: image('Cordoba C5 classical guitar'), desc: 'Expressive classical guitar with traditional look and comfortable playability.', tone: 'Warm, expressive, traditional nylon tone.', genres: ['Classical','Latin','Folk'], styles: ['Fingerstyle','Classical performance','Soft acoustic'], level: 'Intermediate' },
  { id: 9, name: 'Cordoba C7 Classical Guitar', category: 'Nylon/Classical Guitars', price: 42900, stock: 'Limited Stock', img: image('Cordoba C7 classical guitar'), desc: 'Higher-grade nylon guitar for players needing more projection and depth.', tone: 'Deeper, richer, more resonant classical voice.', genres: ['Classical','Spanish','Latin','Fingerstyle'], styles: ['Classical pieces','Solo performance','Recording'], level: 'Intermediate to Advanced' },
  { id: 10, name: 'Alvarez 4103 1970s Classical Guitar', category: 'Nylon/Classical Guitars', price: 38900, stock: 'Vintage / Subject to Availability', img: image('vintage Alvarez classical guitar nylon'), desc: 'Vintage-style 1970s Alvarez classical model for collectors and nylon tone lovers.', tone: 'Aged, woody, mellow, intimate nylon-string character.', genres: ['Classical','Folk','Vintage','Ballads'], styles: ['Fingerpicking','Living-room performance','Vintage collecting'], level: 'Intermediate to Collector' },
  { id: 11, name: 'Alvarez AC65 Classical Guitar', category: 'Nylon/Classical Guitars', price: 31900, stock: 'In Stock', img: image('Alvarez classical guitar nylon'), desc: 'Modern Alvarez classical guitar with comfortable response and warm tone.', tone: 'Smooth, balanced, warm classical voice.', genres: ['Classical','Folk','Latin'], styles: ['Fingerstyle','Practice','Recital'], level: 'Beginner to Intermediate' },
  { id: 12, name: 'Yamaha CG122MSH', category: 'Nylon/Classical Guitars', price: 20900, stock: 'In Stock', img: image('Yamaha CG classical guitar'), desc: 'Solid-top classical guitar option for advancing students.', tone: 'Clear nylon tone with improved sustain and dynamic response.', genres: ['Classical','Folk','School','Latin'], styles: ['Classical study','Fingerstyle','Performance'], level: 'Intermediate' },

  // Electric
  { id: 13, name: 'Fender Player Stratocaster', category: 'Electric Guitars', price: 65900, stock: 'In Stock', img: image('Fender Stratocaster electric guitar'), desc: 'Iconic Strat-style electric for clean tones, blues bends, funk rhythm, and pop.', tone: 'Bright, glassy, clear, versatile single-coil tone.', genres: ['Blues','Pop','Funk','Worship','Classic Rock'], styles: ['Lead','Rhythm','Clean tones','Chords'], level: 'Intermediate' },
  { id: 14, name: 'Fender Telecaster', category: 'Electric Guitars', price: 62900, stock: 'In Stock', img: image('Fender Telecaster electric guitar'), desc: 'Classic Tele-style guitar known for twang, clarity, and simple reliability.', tone: 'Snappy, bright, cutting, country-rock twang.', genres: ['Country','Rock','Indie','Worship'], styles: ['Rhythm','Chicken picking','Lead','Songwriting'], level: 'Beginner to Professional' },
  { id: 15, name: 'Gibson Les Paul Standard 50s', category: 'Electric Guitars', price: 185000, stock: 'Limited Stock', img: image('Gibson Les Paul Standard electric guitar'), desc: 'Legendary single-cut electric with humbuckers, sustain, and rock authority.', tone: 'Thick, warm, powerful humbucker tone with long sustain.', genres: ['Rock','Blues','Hard Rock','Metal'], styles: ['Lead guitar','Solos','Power chords'], level: 'Intermediate to Professional' },
  { id: 16, name: 'Gibson SG Standard', category: 'Electric Guitars', price: 119000, stock: 'In Stock', img: image('Gibson SG Standard electric guitar'), desc: 'Lightweight double-cut rock guitar with aggressive bite and upper fret access.', tone: 'Raw, biting, mid-forward humbucker tone.', genres: ['Rock','Hard Rock','Blues','Alternative'], styles: ['Riffs','Lead','Stage performance'], level: 'Intermediate to Professional' },
  { id: 17, name: 'Epiphone Les Paul Standard', category: 'Electric Guitars', price: 38900, stock: 'In Stock', img: image('Epiphone Les Paul electric guitar'), desc: 'Affordable Les Paul-style electric with warm humbucker sound.', tone: 'Thick, rounded, classic rock tone at a student-friendly price.', genres: ['Rock','Blues','Worship','Pop Rock'], styles: ['Rhythm','Lead','Practice','Band use'], level: 'Beginner to Intermediate' },
  { id: 18, name: 'Ibanez RG421', category: 'Electric Guitars', price: 29900, stock: 'In Stock', img: image('Ibanez RG electric guitar'), desc: 'Fast modern electric with dual humbuckers for rock and metal.', tone: 'Aggressive, focused, modern high-gain tone.', genres: ['Metal','Rock','Hard Rock','Shred'], styles: ['Fast playing','Riffs','Solos'], level: 'Intermediate' },

  // Bass
  { id: 19, name: 'Fender Precision Bass', category: 'Bass Guitars', price: 68900, stock: 'In Stock', img: image('Fender Precision Bass guitar'), desc: 'Classic P-Bass style instrument for punchy foundational low end.', tone: 'Punchy, strong, focused low-end tone.', genres: ['Rock','Worship','Pop','Punk'], styles: ['Band performance','Recording','Groove'], level: 'Beginner to Professional' },
  { id: 20, name: 'Fender Jazz Bass', category: 'Bass Guitars', price: 71900, stock: 'In Stock', img: image('Fender Jazz Bass guitar'), desc: 'Versatile bass with articulate sound and smooth playing feel.', tone: 'Clear, flexible, growly, articulate bass tone.', genres: ['Funk','Jazz','Pop','Rock'], styles: ['Slap','Fingerstyle','Recording'], level: 'Intermediate' },
  { id: 21, name: 'Yamaha TRBX174 Bass', category: 'Bass Guitars', price: 15900, stock: 'In Stock', img: image('Yamaha TRBX bass guitar'), desc: 'Reliable beginner bass for students and first band setups.', tone: 'Balanced, beginner-friendly bass tone.', genres: ['Beginner','Pop','Rock','Worship'], styles: ['Practice','Band rehearsal','Groove'], level: 'Beginner' },
  { id: 22, name: 'Ibanez GSR200 Bass', category: 'Bass Guitars', price: 18900, stock: 'In Stock', img: image('Ibanez GSR bass guitar'), desc: 'Comfortable modern bass with slim neck and flexible electronics.', tone: 'Modern, smooth, versatile bass sound.', genres: ['Rock','Pop','Funk','Beginner'], styles: ['Practice','Groove','Live band'], level: 'Beginner to Intermediate' },

  // Keys
  { id: 23, name: 'Yamaha PSR-E373', category: 'Keyboards', price: 16900, stock: 'In Stock', img: image('Yamaha PSR keyboard'), desc: 'Portable arranger keyboard for students, practice, and simple performances.', tone: 'Versatile keyboard tones with many voices and rhythms.', genres: ['Worship','Pop','School','Beginner'], styles: ['Practice','Accompaniment','Composition'], level: 'Beginner' },
  { id: 24, name: 'Roland FP-10 Digital Piano', category: 'Keyboards', price: 42900, stock: 'In Stock', img: image('Roland FP-10 digital piano'), desc: 'Compact digital piano with weighted keys for realistic piano practice.', tone: 'Authentic piano tone with expressive touch response.', genres: ['Classical','Worship','Pop','Ballads'], styles: ['Piano practice','Performance','Recording'], level: 'Beginner to Intermediate' },
  { id: 25, name: 'Casio CT-S1', category: 'Keyboards', price: 24900, stock: 'In Stock', img: image('Casio keyboard piano'), desc: 'Minimal modern keyboard with great sounds and portable design.', tone: 'Clean, modern, expressive keyboard tones.', genres: ['Pop','Indie','Worship','Composition'], styles: ['Songwriting','Practice','Home recording'], level: 'Beginner to Intermediate' },

  // Drums
  { id: 26, name: 'Pearl Roadshow Drum Kit', category: 'Drums', price: 48900, stock: 'In Stock', img: image('Pearl Roadshow drum kit'), desc: 'Complete acoustic drum kit for beginner to intermediate drummers.', tone: 'Full, punchy acoustic drum sound.', genres: ['Rock','Pop','Worship','School Band'], styles: ['Practice','Live band','Rhythm training'], level: 'Beginner to Intermediate' },
  { id: 27, name: 'Yamaha Rydeen Drum Kit', category: 'Drums', price: 58900, stock: 'Limited Stock', img: image('Yamaha Rydeen drum kit'), desc: 'Reliable Yamaha acoustic drum kit with durable shells and hardware.', tone: 'Balanced acoustic kit tone with solid attack.', genres: ['Rock','Pop','Worship','Funk'], styles: ['Live performance','Band practice','Recording'], level: 'Beginner to Advanced' },
  { id: 28, name: 'Roland TD-1DMK Electronic Drums', category: 'Drums', price: 52900, stock: 'In Stock', img: image('Roland electronic drum kit'), desc: 'Quiet electronic kit for home practice and headphone monitoring.', tone: 'Clean electronic drum sounds with practice-friendly response.', genres: ['Pop','Practice','Worship','Home Studio'], styles: ['Silent practice','MIDI recording','Lessons'], level: 'Beginner to Intermediate' },

  // Accessories
  { id: 29, name: 'Guitar Picks Set', category: 'Accessories', price: 250, stock: 'In Stock', img: image('guitar picks'), desc: 'Assorted picks for acoustic and electric playing.', tone: 'Changes attack, brightness, and control depending on thickness.', genres: ['All Genres'], styles: ['Strumming','Picking','Lead'], level: 'All Levels' },
  { id: 30, name: 'Kyser-Style Capo', category: 'Accessories', price: 850, stock: 'In Stock', img: image('guitar capo'), desc: 'Quick-change capo for acoustic, electric, and songwriting use.', tone: 'Raises key while preserving open chord shapes.', genres: ['Folk','Country','Worship','Pop'], styles: ['Singing accompaniment','Transposition'], level: 'All Levels' },
  { id: 31, name: 'Acoustic Guitar Strings', category: 'Accessories', price: 650, stock: 'In Stock', img: image('acoustic guitar strings'), desc: 'Steel strings for acoustic guitars.', tone: 'Fresh brightness, clearer sustain, better tuning response.', genres: ['Acoustic','Country','Folk','Worship'], styles: ['Strumming','Fingerpicking'], level: 'All Levels' },
  { id: 32, name: 'Instrument Cable 18ft', category: 'Accessories', price: 1200, stock: 'In Stock', img: image('instrument cable guitar'), desc: 'Durable cable for electric guitar, bass, keyboard, and amp connection.', tone: 'Clean signal path for stage and studio.', genres: ['Electric','Bass','Keyboard'], styles: ['Live','Recording','Practice'], level: 'All Levels' }
];

const genres = {
  Country: ['Martin D-18', 'Fender Telecaster', 'Yamaha F310 Acoustic Guitar'],
  Folk: ['Martin D-28', 'Taylor GS Mini', 'Yamaha C40 Classical Guitar'],
  Worship: ['Taylor 814ce', 'Fender CD-60S Dreadnought', 'Roland FP-10 Digital Piano'],
  Rock: ['Gibson Les Paul Standard 50s', 'Gibson SG Standard', 'Fender Precision Bass'],
  Metal: ['Ibanez RG421', 'Gibson SG Standard', 'Roland TD-1DMK Electronic Drums'],
  Blues: ['Fender Player Stratocaster', 'Gibson Les Paul Standard 50s', 'Fender Jazz Bass'],
  Classical: ['Yamaha C40 Classical Guitar', 'Cordoba C7 Classical Guitar', 'Alvarez 4103 1970s Classical Guitar'],
  Beginner: ['Yamaha F310 Acoustic Guitar', 'Yamaha C40 Classical Guitar', 'Yamaha TRBX174 Bass']
};

let activeCategory = 'All';
let searchTerm = '';
let cart = [];

const $ = (id) => document.getElementById(id);

function showToast(message) {
  const toast = $('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 2200);
}

function renderCategories() {
  $('categoryGrid').innerHTML = categories.map(cat => `
    <article class="category-card">
      <img src="${cat.img}" alt="${cat.name}" loading="lazy">
      <div class="category-body">
        <h3>${cat.name}</h3>
        <p>${cat.desc}</p>
        <button onclick="selectCategory('${cat.key}')">View ${cat.name.split(' ')[0]}</button>
      </div>
    </article>
  `).join('');
}

function renderFilters() {
  const all = ['All', ...categories.map(c => c.key)];
  $('filterRow').innerHTML = all.map(cat => `<button class="filter-btn ${activeCategory === cat ? 'active' : ''}" onclick="selectCategory('${cat}')">${cat}</button>`).join('');
}

function filteredProducts() {
  return products.filter(p => {
    const categoryMatch = activeCategory === 'All' || p.category === activeCategory;
    const haystack = `${p.name} ${p.category} ${p.desc} ${p.tone} ${p.genres.join(' ')} ${p.styles.join(' ')}`.toLowerCase();
    return categoryMatch && haystack.includes(searchTerm.toLowerCase());
  });
}

function renderProducts() {
  renderFilters();
  const list = filteredProducts();
  $('productHeading').textContent = activeCategory === 'All' ? 'All Products' : activeCategory;
  $('productSubtext').textContent = searchTerm ? `Showing results for “${searchTerm}”.` : 'Browse realistic model listings with tone notes, genre fit, and product details.';
  $('emptyState').classList.toggle('hidden', list.length > 0);
  $('productGrid').innerHTML = list.map(p => `
    <article class="product-card">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="product-body">
        <div class="product-meta"><span class="price">${pesos.format(p.price)}</span><span class="stock">${p.stock}</span></div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="tags">${p.genres.slice(0,3).map(g => `<span class="tag">${g}</span>`).join('')}</div>
        <div class="product-actions">
          <button class="details-btn" onclick="openProduct(${p.id})">View Details</button>
          <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    </article>
  `).join('');
}

function selectCategory(category) {
  activeCategory = category;
  renderProducts();
  $('products').scrollIntoView({ behavior: 'smooth' });
}

function openProduct(id) {
  const p = products.find(item => item.id === id);
  if (!p) return;
  $('productModalContent').innerHTML = `
    <div class="modal-product">
      <img src="${p.img}" alt="${p.name}">
      <div class="modal-product-body">
        <p class="eyebrow">${p.category}</p>
        <h2>${p.name}</h2>
        <div class="product-meta"><span class="price">${pesos.format(p.price)}</span><span class="stock">${p.stock}</span></div>
        <p>${p.desc}</p>
        <div class="detail-grid">
          <div class="detail-box"><strong>Tone</strong>${p.tone}</div>
          <div class="detail-box"><strong>Skill Level</strong>${p.level}</div>
          <div class="detail-box"><strong>Best Genres</strong>${p.genres.join(', ')}</div>
          <div class="detail-box"><strong>Best Playing Styles</strong>${p.styles.join(', ')}</div>
        </div>
        <button class="btn primary" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    </div>
  `;
  $('productModal').classList.remove('hidden');
}

function closeProductModal() { $('productModal').classList.add('hidden'); }

function addToCart(id) {
  const p = products.find(item => item.id === id);
  if (!p) return;
  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ ...p, qty: 1 });
  updateCart();
  showToast(`${p.name} added to cart!`);
}

function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  $('cartCount').textContent = count;
  $('cartSubtotal').textContent = pesos.format(total);
  $('cartTotal').textContent = pesos.format(total);
  if (cart.length === 0) {
    $('cartItems').innerHTML = '<p class="empty-state">Your cart is empty.</p>';
  } else {
    $('cartItems').innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}">
        <div>
          <h4>${item.name}</h4>
          <p>${pesos.format(item.price)} each</p>
          <div class="qty-controls">
            <button onclick="changeQty(${item.id}, -1)">−</button>
            <strong>${item.qty}</strong>
            <button onclick="changeQty(${item.id}, 1)">+</button>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        </div>
        <strong class="cart-item-total">${pesos.format(item.qty * item.price)}</strong>
      </div>
    `).join('');
  }
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCart();
}

function openCart() {
  updateCart();
  $('cartModal').classList.remove('hidden');
}
function closeCart() { $('cartModal').classList.add('hidden'); }

function renderPaymentFields() {
  const method = $('paymentMethod').value;
  const fields = $('paymentFields');
  if (method === 'cod') {
    fields.innerHTML = '<p class="payment-note">Please prepare exact payment upon delivery.</p>';
  } else if (method === 'gcash') {
    fields.innerHTML = '<input id="gcashNumber" type="tel" placeholder="GCash Number" />';
  } else if (method === 'card') {
    fields.innerHTML = `
      <input id="cardNumber" type="text" placeholder="Card Number" />
      <input id="cardHolder" type="text" placeholder="Card Holder Name" />
      <input id="cardExpiry" type="text" placeholder="Expiration Date (MM/YY)" />
      <input id="cardCvv" type="password" placeholder="CVV" />
    `;
  } else {
    fields.innerHTML = '';
  }
}

function validateCheckout() {
  if (cart.length === 0) return 'Your cart is empty.';
  if (!$('checkoutName').value.trim() || !$('checkoutContact').value.trim() || !$('checkoutAddress').value.trim() || !$('paymentMethod').value) return 'Please complete your checkout details.';
  const method = $('paymentMethod').value;
  if (method === 'gcash' && !document.getElementById('gcashNumber')?.value.trim()) return 'Please enter your GCash number.';
  if (method === 'card') {
    const required = ['cardNumber','cardHolder','cardExpiry','cardCvv'];
    if (required.some(id => !document.getElementById(id)?.value.trim())) return 'Please complete your card details.';
  }
  return '';
}

function renderGenres() {
  const names = Object.keys(genres);
  $('genreTabs').innerHTML = names.map((g, i) => `<button class="genre-tab ${i===0?'active':''}" onclick="selectGenre('${g}', this)">${g}</button>`).join('');
  selectGenre(names[0], null);
}

function selectGenre(genre, button) {
  document.querySelectorAll('.genre-tab').forEach(btn => btn.classList.remove('active'));
  if (button) button.classList.add('active');
  else document.querySelector('.genre-tab')?.classList.add('active');
  const recommended = genres[genre].map(name => products.find(p => p.name === name)).filter(Boolean);
  $('genreResult').innerHTML = `
    <h3>${genre} Recommendations</h3>
    <p>Recommended instruments for ${genre.toLowerCase()} players based on tone, style, and category fit.</p>
    <div class="genre-list">
      ${recommended.map(p => `<div class="genre-item"><strong>${p.name}</strong><br><span>${p.category}</span><br><small>${p.tone}</small><br><button class="small-btn" onclick="openProduct(${p.id})">View</button></div>`).join('')}
    </div>
  `;
}

function attachEvents() {
  $('mobileMenuBtn').addEventListener('click', () => $('navLinks').classList.toggle('open'));
  document.querySelectorAll('#navLinks a').forEach(a => a.addEventListener('click', () => $('navLinks').classList.remove('open')));
  $('searchToggle').addEventListener('click', () => {
    $('searchPanel').classList.toggle('hidden');
    if (!$('searchPanel').classList.contains('hidden')) $('searchInput').focus();
  });
  $('searchInput').addEventListener('input', e => { searchTerm = e.target.value; renderProducts(); });
  $('cartButton').addEventListener('click', openCart);
  $('closeCartModal').addEventListener('click', closeCart);
  $('closeProductModal').addEventListener('click', closeProductModal);
  $('clearCartBtn').addEventListener('click', () => { cart = []; updateCart(); $('checkoutForm').classList.add('hidden'); });
  $('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) { showToast('Your cart is empty.'); return; }
    $('checkoutForm').classList.toggle('hidden');
  });
  $('paymentMethod').addEventListener('change', renderPaymentFields);
  $('checkoutForm').addEventListener('submit', e => {
    e.preventDefault();
    const error = validateCheckout();
    if (error) { $('checkoutStatus').textContent = error; return; }
    $('checkoutStatus').textContent = 'Thank you for ordering from MR ToneWorks! Your order has been received.';
    cart = [];
    updateCart();
  });
  $('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    $('contactStatus').textContent = 'Thank you for contacting MR ToneWorks!';
    e.target.reset();
  });
  document.querySelectorAll('.modal').forEach(modal => modal.addEventListener('click', e => { if (e.target === modal) modal.classList.add('hidden'); }));
}

renderCategories();
renderProducts();
renderGenres();
updateCart();
attachEvents();

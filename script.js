const peso = n => '₱' + n.toLocaleString('en-PH');

const categories = [
  { name: 'All', desc: 'View every item', img: 'assets/images/store-hero.svg' },
  { name: 'Acoustic', desc: 'Steel-string tone', img: 'assets/images/cat-acoustic.svg' },
  { name: 'Nylon/Classical', desc: 'Warm nylon-string tone', img: 'assets/images/cat-nylon.svg' },
  { name: 'Electric', desc: 'Rock, blues, pop, metal', img: 'assets/images/cat-electric.svg' },
  { name: 'Bass', desc: 'Groove and low-end', img: 'assets/images/cat-bass.svg' },
  { name: 'Keyboards', desc: 'Studio and worship keys', img: 'assets/images/cat-keyboards.svg' },
  { name: 'Drums', desc: 'Live rhythm and beats', img: 'assets/images/cat-drums.svg' },
  { name: 'Accessories', desc: 'Essentials for players', img: 'assets/images/cat-accessories.svg' }
];

const products = [
  {id:1,name:'Martin D-28',category:'Acoustic',price:189000,img:'assets/images/martin-d28.svg',desc:'Legendary dreadnought acoustic known for powerful projection and rich low end.',tone:'Bold, deep, balanced, and resonant with strong bass response.',genres:'Bluegrass, country, folk, worship, recording',style:'Flatpicking, strumming, singer-songwriter',skill:'Intermediate to Professional',stock:'In Stock'},
  {id:2,name:'Martin D-18',category:'Acoustic',price:169000,img:'assets/images/martin-d18.svg',desc:'Classic mahogany dreadnought with dry, woody clarity.',tone:'Warm, clear, punchy mids with vintage acoustic character.',genres:'Folk, country, bluegrass, gospel',style:'Rhythm, flatpicking, vocal accompaniment',skill:'Intermediate to Professional',stock:'In Stock'},
  {id:3,name:'Taylor 814ce',category:'Acoustic',price:219000,img:'assets/images/taylor-814ce.svg',desc:'Premium cutaway acoustic-electric with modern comfort and detail.',tone:'Clear, hi-fi, articulate, bright and balanced.',genres:'Pop, worship, acoustic fingerstyle, studio',style:'Fingerstyle, live acoustic, recording',skill:'Intermediate to Professional',stock:'Limited Stock'},
  {id:4,name:'Taylor GS Mini',category:'Acoustic',price:49900,img:'assets/images/taylor-gs-mini.svg',desc:'Compact acoustic with surprising volume and travel-friendly size.',tone:'Bright, focused, warm and portable.',genres:'Travel, beginner, folk, casual performance',style:'Strumming, songwriting, practice',skill:'Beginner to Intermediate',stock:'In Stock'},
  {id:5,name:'Yamaha F310',category:'Acoustic',price:7990,img:'assets/images/yamaha-f310.svg',desc:'Reliable beginner acoustic for students and first-time players.',tone:'Bright, sweet, and easy to control.',genres:'Beginner, school, folk, worship',style:'Basic chords, strumming, practice',skill:'Beginner',stock:'In Stock'},
  {id:6,name:'Fender CD-60S',category:'Acoustic',price:13990,img:'assets/images/fender-cd60s.svg',desc:'Affordable dreadnought acoustic with solid-top feel.',tone:'Balanced, full, and friendly for rhythm playing.',genres:'Pop acoustic, worship, singer-songwriter',style:'Strumming, chord accompaniment',skill:'Beginner to Intermediate',stock:'In Stock'},
  {id:7,name:'Yamaha C40',category:'Nylon/Classical',price:7990,img:'assets/images/yamaha-c40.svg',desc:'Popular student classical guitar with comfortable nylon strings.',tone:'Soft, warm, gentle and beginner-friendly.',genres:'Classical, folk, school practice',style:'Fingerstyle, classical basics',skill:'Beginner',stock:'In Stock'},
  {id:8,name:'Cordoba C5',category:'Nylon/Classical',price:24900,img:'assets/images/cordoba-c5.svg',desc:'Traditional classical guitar with expressive nylon tone.',tone:'Warm, open, rounded, and responsive.',genres:'Classical, Latin, folk, worship',style:'Fingerstyle, classical, soft accompaniment',skill:'Beginner to Intermediate',stock:'In Stock'},
  {id:9,name:'Cordoba C7',category:'Nylon/Classical',price:39900,img:'assets/images/cordoba-c7.svg',desc:'Upgraded classical guitar with strong response and elegant tone.',tone:'Fuller, warmer, and more expressive than entry-level nylon guitars.',genres:'Classical, Spanish, Latin, solo guitar',style:'Classical technique, fingerstyle',skill:'Intermediate',stock:'Limited Stock'},
  {id:10,name:'Alvarez 4103 1970s Classical Guitar',category:'Nylon/Classical',price:28900,img:'assets/images/alvarez-4103.svg',desc:'Vintage-inspired classical listing for warm old-school nylon character.',tone:'Mellow, aged, intimate, and woody.',genres:'Folk, classical, vintage acoustic, songwriting',style:'Fingerpicking, soft strumming, living-room performance',skill:'Intermediate',stock:'Vintage Listing'},
  {id:11,name:'Alvarez AC65',category:'Nylon/Classical',price:32900,img:'assets/images/alvarez-ac65.svg',desc:'Artist classical model with strong tone and comfortable playability.',tone:'Warm, clear, articulate, and smooth.',genres:'Classical, folk, worship, fingerstyle',style:'Nylon fingerstyle, classical pieces',skill:'Intermediate',stock:'In Stock'},
  {id:12,name:'Yamaha CG122MSH',category:'Nylon/Classical',price:19900,img:'assets/images/yamaha-cg122msh.svg',desc:'Solid-top classical guitar designed for developing players.',tone:'Warm, focused, and expressive.',genres:'Classical, school, recital, practice',style:'Fingerstyle, classical studies',skill:'Beginner to Intermediate',stock:'In Stock'},
  {id:13,name:'Fender Player Stratocaster',category:'Electric',price:59900,img:'assets/images/fender-strat.svg',desc:'Versatile Strat-style electric for clear tones and expressive leads.',tone:'Bright, glassy, clean, and flexible.',genres:'Pop, blues, funk, worship, classic rock',style:'Lead, rhythm, clean tones, bends',skill:'Beginner to Professional',stock:'In Stock'},
  {id:14,name:'Fender Telecaster',category:'Electric',price:62900,img:'assets/images/fender-tele.svg',desc:'Classic electric guitar with snappy attack and strong rhythm sound.',tone:'Twangy, bright, punchy, and direct.',genres:'Country, rock, worship, indie',style:'Rhythm guitar, chicken pickin, clean leads',skill:'Beginner to Professional',stock:'In Stock'},
  {id:15,name:'Gibson Les Paul Standard',category:'Electric',price:179000,img:'assets/images/gibson-les-paul.svg',desc:'Iconic single-cut electric known for sustain and power.',tone:'Thick, warm, sustaining humbucker tone.',genres:'Rock, blues, hard rock, classic rock',style:'Lead guitar, power chords, sustain solos',skill:'Intermediate to Professional',stock:'Limited Stock'},
  {id:16,name:'Gibson SG Standard',category:'Electric',price:129000,img:'assets/images/gibson-sg.svg',desc:'Lightweight double-cut electric with aggressive rock character.',tone:'Open, biting, warm, and powerful.',genres:'Rock, blues, hard rock',style:'Riffs, solos, stage performance',skill:'Intermediate to Professional',stock:'In Stock'},
  {id:17,name:'Epiphone Les Paul Standard',category:'Electric',price:32900,img:'assets/images/epiphone-les-paul.svg',desc:'Affordable Les Paul-style electric for students and rock players.',tone:'Warm, thick, and strong for the price.',genres:'Rock, blues, worship, pop punk',style:'Power chords, rhythm, beginner leads',skill:'Beginner to Intermediate',stock:'In Stock'},
  {id:18,name:'Ibanez RG421',category:'Electric',price:24900,img:'assets/images/ibanez-rg421.svg',desc:'Fast modern electric built for rock and metal styles.',tone:'Tight, aggressive, sharp, and high-output.',genres:'Metal, rock, shred, alternative',style:'Fast leads, riffing, palm muting',skill:'Intermediate',stock:'In Stock'},
  {id:19,name:'Fender Precision Bass',category:'Bass',price:64900,img:'assets/images/fender-pbass.svg',desc:'Classic bass with strong fundamental low-end.',tone:'Punchy, thick, warm, and band-ready.',genres:'Rock, pop, worship, recording',style:'Groove, live bands, studio bass',skill:'Beginner to Professional',stock:'In Stock'},
  {id:20,name:'Fender Jazz Bass',category:'Bass',price:69900,img:'assets/images/fender-jbass.svg',desc:'Flexible bass with articulate tone and smooth playability.',tone:'Clear, growly, balanced, and versatile.',genres:'Funk, jazz, rock, pop',style:'Fingerstyle, slap, groove playing',skill:'Intermediate to Professional',stock:'In Stock'},
  {id:21,name:'Yamaha TRBX174',category:'Bass',price:14900,img:'assets/images/yamaha-trbx174.svg',desc:'Affordable bass for beginners and school bands.',tone:'Balanced, easy, and reliable.',genres:'Beginner, pop, worship, band practice',style:'Basic groove, rhythm foundation',skill:'Beginner',stock:'In Stock'},
  {id:22,name:'Ibanez GSR200',category:'Bass',price:16900,img:'assets/images/ibanez-gsr200.svg',desc:'Comfortable beginner bass with modern feel.',tone:'Punchy, clear, and friendly for practice.',genres:'Rock, pop, beginner band',style:'Fingerstyle, practice, live learning',skill:'Beginner',stock:'In Stock'},
  {id:23,name:'Yamaha PSR-E373',category:'Keyboards',price:18900,img:'assets/images/yamaha-psr-e373.svg',desc:'Portable keyboard for learning, arranging, and performance.',tone:'Clean, flexible, and educational.',genres:'School, worship, pop, practice',style:'Keyboard lessons, accompaniment',skill:'Beginner',stock:'In Stock'},
  {id:24,name:'Roland FP-10',category:'Keyboards',price:38900,img:'assets/images/roland-fp10.svg',desc:'Digital piano with weighted keys for realistic feel.',tone:'Rich piano tone with expressive dynamics.',genres:'Classical, worship, pop piano',style:'Piano practice, accompaniment, performance',skill:'Beginner to Intermediate',stock:'In Stock'},
  {id:25,name:'Casio CT-S1',category:'Keyboards',price:18900,img:'assets/images/casio-ct-s1.svg',desc:'Slim keyboard with stylish design and useful sounds.',tone:'Modern, clean, and portable.',genres:'Pop, casual, songwriting',style:'Practice, composing, small gigs',skill:'Beginner to Intermediate',stock:'In Stock'},
  {id:26,name:'Pearl Roadshow Drum Kit',category:'Drums',price:39900,img:'assets/images/pearl-roadshow.svg',desc:'Complete acoustic drum kit for beginners and bands.',tone:'Loud, punchy, and stage-ready.',genres:'Rock, pop, school band, worship',style:'Live rhythm, practice, performance',skill:'Beginner to Intermediate',stock:'In Stock'},
  {id:27,name:'Yamaha Rydeen Drum Kit',category:'Drums',price:49900,img:'assets/images/yamaha-rydeen.svg',desc:'Reliable acoustic drum kit with balanced tone.',tone:'Clean shells, bright attack, strong rhythm presence.',genres:'Rock, pop, worship, band performance',style:'Live drums, rehearsal, performance',skill:'Beginner to Intermediate',stock:'In Stock'},
  {id:28,name:'Roland TD-1DMK Electronic Drums',category:'Drums',price:44900,img:'assets/images/roland-td1dmk.svg',desc:'Compact electronic drum kit for quiet practice.',tone:'Digital, clean, headphone-friendly.',genres:'Practice, studio, apartment use',style:'Quiet rehearsal, rhythm training',skill:'Beginner to Intermediate',stock:'In Stock'},
  {id:29,name:'Guitar Picks Pack',category:'Accessories',price:150,img:'assets/images/picks.svg',desc:'Assorted picks for different tones and playing feel.',tone:'Changes attack and articulation.',genres:'All genres',style:'Strumming, picking, lead playing',skill:'All Levels',stock:'In Stock'},
  {id:30,name:'Guitar Capo',category:'Accessories',price:350,img:'assets/images/capo.svg',desc:'Quickly changes key without changing chord shapes.',tone:'Useful for singers and acoustic performers.',genres:'Folk, country, worship, pop',style:'Singing accompaniment, transposition',skill:'All Levels',stock:'In Stock'},
  {id:31,name:'Guitar Strings Set',category:'Accessories',price:450,img:'assets/images/strings.svg',desc:'Replacement strings for fresh tone and better response.',tone:'Brighter and cleaner after restringing.',genres:'All genres',style:'Maintenance, performance preparation',skill:'All Levels',stock:'In Stock'},
  {id:32,name:'Guitar Strap',category:'Accessories',price:650,img:'assets/images/strap.svg',desc:'Comfortable strap for standing performances.',tone:'Performance support accessory.',genres:'Live performance',style:'Stage playing, practice',skill:'All Levels',stock:'In Stock'},
  {id:33,name:'Clip-On Tuner',category:'Accessories',price:550,img:'assets/images/tuner.svg',desc:'Keeps instruments in tune quickly and accurately.',tone:'Improves pitch accuracy.',genres:'All genres',style:'Practice, gigs, recording',skill:'All Levels',stock:'In Stock'},
  {id:34,name:'Instrument Cable',category:'Accessories',price:750,img:'assets/images/cable.svg',desc:'Cable for electric guitars, basses, keyboards, and amps.',tone:'Reliable signal connection.',genres:'Electric, bass, keyboard performance',style:'Live and studio connection',skill:'All Levels',stock:'In Stock'}
];

const genreMap = {
  Country: ['Martin D-18','Fender Telecaster','Yamaha F310'],
  Folk: ['Martin D-28','Taylor GS Mini','Yamaha C40'],
  Worship: ['Taylor 814ce','Fender CD-60S','Roland FP-10'],
  Rock: ['Gibson Les Paul Standard','Gibson SG Standard','Fender Player Stratocaster'],
  Metal: ['Ibanez RG421','Gibson SG Standard','Ibanez GSR200'],
  Blues: ['Fender Player Stratocaster','Gibson Les Paul Standard','Fender Jazz Bass'],
  Classical: ['Yamaha C40','Cordoba C7','Alvarez 4103 1970s Classical Guitar'],
  Beginner: ['Yamaha F310','Yamaha C40','Yamaha TRBX174','Guitar Capo']
};

let selectedCategory = 'All';
let cart = JSON.parse(localStorage.getItem('mrCart') || '[]');

const $ = id => document.getElementById(id);
const productGrid = $('productGrid');
const categoryGrid = $('categoryGrid');
const genreTabs = $('genreTabs');
const genreResult = $('genreResult');

function saveCart(){ localStorage.setItem('mrCart', JSON.stringify(cart)); updateCartCount(); }
function updateCartCount(){ $('cartCount').textContent = cart.reduce((s,i)=>s+i.qty,0); }
function openModal(id){ $(id).classList.add('show'); $(id).setAttribute('aria-hidden','false'); }
function closeModal(id){ $(id).classList.remove('show'); $(id).setAttribute('aria-hidden','true'); }

function renderCategories(){
  categoryGrid.innerHTML = categories.map(c => `
    <article class="category-card ${selectedCategory===c.name?'active':''}" data-category="${c.name}">
      <img src="${c.img}" alt="${c.name}">
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
    </article>`).join('');
}

function filteredProducts(){
  const q = $('searchInput').value.trim().toLowerCase();
  return products.filter(p => (selectedCategory==='All'||p.category===selectedCategory) && [p.name,p.category,p.genres,p.tone].join(' ').toLowerCase().includes(q));
}

function renderProducts(){
  const list = filteredProducts();
  productGrid.innerHTML = list.map(p => `
    <article class="product-card">
      <img class="product-img" src="${p.img}" alt="${p.name}">
      <div class="product-body">
        <span class="tag">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="price-row"><span class="price">${peso(p.price)}</span><span class="stock">${p.stock}</span></div>
        <div class="card-actions">
          <button class="btn secondary" data-view="${p.id}">View Details</button>
          <button class="btn primary" data-add="${p.id}">Add to Cart</button>
        </div>
      </div>
    </article>`).join('') || '<p>No products found.</p>';
}

function showProduct(id){
  const p = products.find(x => x.id == id);
  $('productDetails').innerHTML = `
    <div class="product-detail">
      <img src="${p.img}" alt="${p.name}">
      <div>
        <span class="tag">${p.category}</span>
        <h2>${p.name}</h2>
        <p class="price">${peso(p.price)}</p>
        <p>${p.desc}</p>
        <div class="detail-list">
          <p><strong>Tone:</strong> ${p.tone}</p>
          <p><strong>Best Genres:</strong> ${p.genres}</p>
          <p><strong>Playing Style:</strong> ${p.style}</p>
          <p><strong>Skill Level:</strong> ${p.skill}</p>
          <p><strong>Stock Status:</strong> ${p.stock}</p>
        </div>
        <button class="btn primary" data-add="${p.id}">Add to Cart</button>
      </div>
    </div>`;
  openModal('productModal');
}

function addToCart(id){
  const p = products.find(x=>x.id==id);
  const item = cart.find(x=>x.id==id);
  if(item) item.qty++;
  else cart.push({id:p.id,name:p.name,price:p.price,qty:1,category:p.category});
  saveCart();
}
function changeQty(id, delta){
  const item = cart.find(x=>x.id==id);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0) cart = cart.filter(x=>x.id!=id);
  saveCart(); renderCart();
}
function removeItem(id){ cart = cart.filter(x=>x.id!=id); saveCart(); renderCart(); }
function cartSubtotal(){ return cart.reduce((s,i)=>s+i.price*i.qty,0); }
function shipping(){ return cart.length ? 350 : 0; }
function renderCart(){
  if(cart.length===0){ $('cartItems').innerHTML='<p>Your cart is empty.</p>'; }
  else {
    $('cartItems').innerHTML = cart.map(i => `
      <div class="cart-row">
        <div><strong>${i.name}</strong><br><small>${i.category}</small></div>
        <div>${peso(i.price)}</div>
        <div class="qty-controls"><button data-qty="${i.id}" data-delta="-1">−</button><strong>${i.qty}</strong><button data-qty="${i.id}" data-delta="1">+</button></div>
        <button class="remove-btn" data-remove="${i.id}">Remove</button>
      </div>`).join('');
  }
  const sub = cartSubtotal(), ship = shipping();
  $('cartSubtotal').textContent = peso(sub);
  $('shippingFee').textContent = peso(ship);
  $('cartGrandTotal').textContent = peso(sub+ship);
}
function renderPaymentFields(){
  const val = $('paymentMethod').value;
  const box = $('paymentFields');
  if(val==='GCash') box.innerHTML = '<input name="gcash" placeholder="GCash Number" required>';
  else if(val==='Credit/Debit Card') box.innerHTML = '<div class="form-grid"><input name="cardName" placeholder="Card Holder Name" required><input name="cardNumber" placeholder="Card Number" required><input name="expiry" placeholder="Expiration Date (MM/YY)" required><input name="cvv" placeholder="CVV" required></div>';
  else box.innerHTML = '<p class="tag">Please prepare exact payment upon delivery.</p>';
}
function generateOrderNumber(){ return 'MRTW-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random()*900000); }
function receiptStatus(payment){
  if(payment==='Cash on Delivery') return 'Pending - Cash on Delivery';
  if(payment==='GCash') return 'Paid via GCash';
  return 'Paid via Card';
}
function showReceipt(data){
  const sub = cartSubtotal(), ship = shipping(), total = sub + ship;
  const orderNo = generateOrderNumber();
  const date = new Date().toLocaleString('en-PH', {dateStyle:'medium', timeStyle:'short'});
  const rows = cart.map(i => `<tr><td>${i.name}<br><small>${i.category}</small></td><td>${i.qty}</td><td>${peso(i.price)}</td><td>${peso(i.price*i.qty)}</td></tr>`).join('');
  $('receiptContent').innerHTML = `
    <div class="receipt-head">
      <div><div class="receipt-logo"><span>MR</span> ToneWorks</div><p>Official Order Receipt</p></div>
      <div><strong>Order No:</strong> ${orderNo}<br><strong>Date:</strong> ${date}<br><strong>Status:</strong> Order Confirmed</div>
    </div>
    <div class="receipt-grid">
      <div class="receipt-box"><h3>Billing Information</h3><p><strong>${data.fullName}</strong><br>${data.email}<br>${data.contact}<br>${data.billingAddress}</p></div>
      <div class="receipt-box"><h3>Shipping Information</h3><p><strong>${data.receiver}</strong><br>${data.shippingAddress}<br>${data.city}, ${data.province} ${data.postal}<br>${data.notes || 'No delivery notes.'}</p></div>
      <div class="receipt-box"><h3>Payment Information</h3><p><strong>Method:</strong> ${data.payment}<br><strong>Status:</strong> ${receiptStatus(data.payment)}</p></div>
      <div class="receipt-box"><h3>Order Status</h3><p><strong>Order Confirmed</strong><br>Preparing for Shipment</p></div>
    </div>
    <table class="receipt-table"><thead><tr><th>Product</th><th>Qty</th><th>Unit Price</th><th>Subtotal</th></tr></thead><tbody>${rows}</tbody></table>
    <div class="receipt-total"><p>Merchandise Subtotal: <strong>${peso(sub)}</strong></p><p>Shipping Fee: <strong>${peso(ship)}</strong></p><p>Discount / Promo: <strong>₱0</strong></p><h2>Total Amount: ${peso(total)}</h2></div>
    <p><strong>Thank you for shopping at MR ToneWorks.</strong></p>
    <div class="receipt-actions"><button class="btn secondary" onclick="window.print()">Print Receipt</button><button class="btn primary" id="continueShopping">Continue Shopping</button></div>`;
  closeModal('checkoutModal'); closeModal('cartModal');
  $('receiptPage').classList.add('show');
  $('receiptPage').scrollIntoView({behavior:'smooth'});
  cart = []; saveCart(); renderCart();
}

function setupGenres(){
  const keys = Object.keys(genreMap);
  genreTabs.innerHTML = keys.map((g,i)=>`<button class="genre-tab ${i===0?'active':''}" data-genre="${g}">${g}</button>`).join('');
  showGenre(keys[0]);
}
function showGenre(g){
  document.querySelectorAll('.genre-tab').forEach(b=>b.classList.toggle('active', b.dataset.genre===g));
  const recs = genreMap[g].map(name => products.find(p=>p.name===name)).filter(Boolean);
  genreResult.innerHTML = `<h3>${g} Recommendations</h3><p>Recommended models for ${g.toLowerCase()} players:</p><div class="product-grid">${recs.map(p=>`<article class="product-card"><img class="product-img" src="${p.img}" alt="${p.name}"><div class="product-body"><span class="tag">${p.category}</span><h3>${p.name}</h3><p>${p.tone}</p><button class="btn primary" data-view="${p.id}">View Details</button></div></article>`).join('')}</div>`;
}

document.addEventListener('click', e => {
  const cat = e.target.closest('[data-category]');
  if(cat){ selectedCategory = cat.dataset.category; $('categorySelect').value = selectedCategory; renderCategories(); renderProducts(); document.querySelector('#best-sellers').scrollIntoView({behavior:'smooth'}); }
  const view = e.target.closest('[data-view]'); if(view) showProduct(view.dataset.view);
  const add = e.target.closest('[data-add]'); if(add){ addToCart(add.dataset.add); }
  const close = e.target.closest('[data-close]'); if(close) closeModal(close.dataset.close);
  const qty = e.target.closest('[data-qty]'); if(qty) changeQty(Number(qty.dataset.qty), Number(qty.dataset.delta));
  const rem = e.target.closest('[data-remove]'); if(rem) removeItem(Number(rem.dataset.remove));
  const genre = e.target.closest('[data-genre]'); if(genre) showGenre(genre.dataset.genre);
  if(e.target.id==='continueShopping'){ $('receiptPage').classList.remove('show'); window.location.hash='best-sellers'; }
});

document.querySelector('.menu-toggle').addEventListener('click',()=>document.querySelector('.nav-links').classList.toggle('show'));
$('searchInput').addEventListener('input', renderProducts);
$('categorySelect').addEventListener('change', e=>{ selectedCategory=e.target.value; renderCategories(); renderProducts(); });
$('openCart').addEventListener('click',()=>{ renderCart(); openModal('cartModal'); });
$('clearCart').addEventListener('click',()=>{ cart=[]; saveCart(); renderCart(); });
$('goCheckout').addEventListener('click',()=>{ if(!cart.length){ alert('Your cart is empty.'); return; } closeModal('cartModal'); renderPaymentFields(); openModal('checkoutModal'); });
$('paymentMethod').addEventListener('change', renderPaymentFields);
$('checkoutForm').addEventListener('submit', e=>{
  e.preventDefault();
  if(!cart.length){ alert('Your cart is empty.'); return; }
  const form = new FormData(e.target);
  const data = Object.fromEntries(form.entries());
  const required = ['fullName','email','contact','billingAddress','receiver','shippingAddress','city','province','postal','payment'];
  if(required.some(k=>!String(data[k]||'').trim())){ alert('Please complete your checkout details.'); return; }
  showReceipt(data);
});
$('contactForm').addEventListener('submit', e=>{ e.preventDefault(); alert('Thank you for contacting MR ToneWorks!'); e.target.reset(); });

document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click', e=>{ if(e.target===m) closeModal(m.id); }));

renderCategories();
renderProducts();
setupGenres();
updateCartCount();

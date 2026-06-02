const money = n => '₱' + Math.round(n * 56).toLocaleString('en-PH');

const imageFor = (query, sig) => `https://source.unsplash.com/900x650/?${encodeURIComponent(query)}&sig=${sig}`;

const products = [
  {id:1,name:'Martin D-28',category:'Acoustic Guitars',price:2899.99,img:imageFor('steel string dreadnought acoustic guitar',1),rating:5,reviews:567,desc:'Legendary dreadnought acoustic with professional projection and rich rosewood character.',tone:'Rich, powerful, deep dreadnought tone with strong bass and sparkling highs.',genres:['Country','Folk','Bluegrass','Singer-Songwriter'],styles:['Flatpicking','Strumming','Recording','Live Performance'],level:'Advanced to Professional',stock:'In Stock'},
  {id:2,name:'Martin D-18',category:'Acoustic Guitars',price:2499.99,img:imageFor('mahogany acoustic guitar dreadnought',2),rating:5,reviews:432,desc:'Classic mahogany dreadnought known for balance, warmth, and rootsy acoustic character.',tone:'Warm, woody, balanced Martin tone.',genres:['Folk','Country','Blues','Americana'],styles:['Fingerpicking','Strumming','Songwriting'],level:'Intermediate to Professional',stock:'In Stock'},
  {id:3,name:'Taylor 814ce',category:'Acoustic Guitars',price:3299.99,img:imageFor('Taylor acoustic guitar cutaway',3),rating:5,reviews:389,desc:'Premium Grand Auditorium acoustic-electric built for clarity, articulation, and stage use.',tone:'Crystal clear, modern, articulate acoustic tone.',genres:['Pop','Worship','Country','Singer-Songwriter'],styles:['Fingerstyle','Live Performance','Recording'],level:'Advanced to Professional',stock:'In Stock'},
  {id:4,name:'Taylor GS Mini',category:'Acoustic Guitars',price:599.99,img:imageFor('small acoustic guitar travel guitar',4),rating:4.9,reviews:621,desc:'Compact acoustic guitar with a surprisingly full voice; great for students and travel.',tone:'Balanced, bright, compact acoustic tone.',genres:['Pop','Folk','Travel','Worship'],styles:['Practice','Travel','Songwriting'],level:'Beginner to Advanced',stock:'In Stock'},
  {id:5,name:'Yamaha F310 Acoustic Guitar',category:'Acoustic Guitars',price:199.99,img:imageFor('Yamaha acoustic guitar dreadnought',5),rating:4.8,reviews:342,desc:'Reliable beginner acoustic guitar with comfortable playability and sweet acoustic tone.',tone:'Bright, sweet, beginner-friendly acoustic tone.',genres:['Country','Folk','Worship','School Performance'],styles:['Strumming','Practice','Beginner Lessons'],level:'Beginner',stock:'In Stock'},
  {id:6,name:'Fender CD-60S Dreadnought',category:'Acoustic Guitars',price:249.99,img:imageFor('Fender acoustic guitar dreadnought',6),rating:4.9,reviews:428,desc:'Solid-top dreadnought with full sound, easy playability, and strong projection.',tone:'Full, balanced steel-string acoustic tone.',genres:['Worship','Pop','Country','Singer-Songwriter'],styles:['Strumming','Vocals','Acoustic Band'],level:'Beginner to Advanced',stock:'In Stock'},

  {id:7,name:'Yamaha C40 Classical Guitar',category:'Nylon/Classical Guitars',price:179.99,img:imageFor('classical nylon string guitar',7),rating:4.7,reviews:521,desc:'Popular student classical guitar with soft nylon strings and teacher-friendly playability.',tone:'Warm, soft nylon-string tone.',genres:['Classical','Folk','Beginner'],styles:['Fingerstyle','School Practice','Classical Study'],level:'Beginner',stock:'In Stock'},
  {id:8,name:'Cordoba C5 Classical Guitar',category:'Nylon/Classical Guitars',price:379.99,img:imageFor('Cordoba classical nylon guitar cedar',8),rating:4.9,reviews:287,desc:'Cedar-top classical guitar with expressive response and traditional nylon warmth.',tone:'Warm, expressive, traditional nylon tone.',genres:['Classical','Latin','Folk'],styles:['Fingerstyle','Soft Acoustic','Classical Performance'],level:'Intermediate to Advanced',stock:'In Stock'},
  {id:9,name:'Cordoba C7 Classical Guitar',category:'Nylon/Classical Guitars',price:599.99,img:imageFor('classical guitar nylon rosewood',9),rating:5,reviews:234,desc:'Professional-feeling nylon guitar with strong projection and refined classical voice.',tone:'Rich, concert-style nylon tone.',genres:['Classical','Latin','Flamenco'],styles:['Concert','Fingerstyle','Classical Study'],level:'Advanced to Professional',stock:'In Stock'},
  {id:10,name:'Alvarez 4103 1970s Classical Guitar',category:'Nylon/Classical Guitars',price:449.99,img:imageFor('vintage classical guitar nylon',10),rating:4.8,reviews:156,desc:'Vintage-style 1970s Alvarez classical model for players who love old mellow nylon tone.',tone:'Vintage, mellow, warm nylon tone.',genres:['Classical','Traditional Folk','Vintage'],styles:['Fingerstyle','Traditional Music','Soft Performance'],level:'Intermediate to Advanced',stock:'Limited Stock'},
  {id:11,name:'Alvarez AC65',category:'Nylon/Classical Guitars',price:329.99,img:imageFor('Alvarez classical guitar nylon',11),rating:4.7,reviews:198,desc:'Affordable classical guitar with clear tone and comfortable feel for growing players.',tone:'Clear, balanced student nylon tone.',genres:['Classical','Folk','Practice'],styles:['Classical Study','Fingerstyle','School'],level:'Beginner to Intermediate',stock:'In Stock'},
  {id:12,name:'Yamaha CG122MSH Classical Guitar',category:'Nylon/Classical Guitars',price:269.99,img:imageFor('Yamaha classical guitar nylon',12),rating:4.8,reviews:312,desc:'Intermediate classical guitar with solid-top style response and serious practice value.',tone:'Rich, warm intermediate nylon tone.',genres:['Classical','Latin','Folk'],styles:['Practice','Fingerstyle','Classical'],level:'Intermediate',stock:'In Stock'},

  {id:13,name:'Fender Player Stratocaster',category:'Electric Guitars',price:899.99,img:imageFor('Fender Stratocaster electric guitar',13),rating:4.9,reviews:612,desc:'Iconic Strat-style electric guitar with versatile single-coil sound for many genres.',tone:'Bright, clear, glassy single-coil tone.',genres:['Pop','Blues','Funk','Worship','Indie','Classic Rock'],styles:['Lead Guitar','Rhythm','Funk','Blues'],level:'Intermediate to Advanced',stock:'In Stock'},
  {id:14,name:'Fender Telecaster',category:'Electric Guitars',price:849.99,img:imageFor('Fender Telecaster electric guitar',14),rating:4.9,reviews:501,desc:'Classic Tele-style electric with punch, twang, and simple stage-ready reliability.',tone:'Twangy, bright, punchy electric tone.',genres:['Country','Rock','Indie','Blues'],styles:['Rhythm','Chicken Pickin','Lead Guitar'],level:'Beginner to Professional',stock:'In Stock'},
  {id:15,name:'Gibson Les Paul Standard 50s',category:'Electric Guitars',price:2499.99,img:imageFor('Gibson Les Paul electric guitar',15),rating:5,reviews:389,desc:'Legendary humbucker guitar with thick tone, sustain, and classic rock authority.',tone:'Thick, warm, powerful humbucker tone.',genres:['Rock','Blues','Hard Rock','Metal'],styles:['Lead Guitar','Sustain Solos','Rock Rhythm'],level:'Intermediate to Professional',stock:'In Stock'},
  {id:16,name:'Gibson SG Standard',category:'Electric Guitars',price:1799.99,img:imageFor('Gibson SG electric guitar',16),rating:4.9,reviews:321,desc:'Lightweight double-cut electric guitar with aggressive midrange and rock energy.',tone:'Raw, biting, mid-forward humbucker tone.',genres:['Rock','Hard Rock','Blues'],styles:['Riffs','Lead Guitar','Stage Performance'],level:'Intermediate to Professional',stock:'In Stock'},
  {id:17,name:'Epiphone Les Paul Standard',category:'Electric Guitars',price:699.99,img:imageFor('Epiphone Les Paul electric guitar',17),rating:4.8,reviews:488,desc:'Accessible Les Paul-style guitar with warm humbucker tone for rock and blues.',tone:'Warm, thick, affordable humbucker tone.',genres:['Rock','Blues','Pop Rock'],styles:['Rhythm','Lead','Practice'],level:'Beginner to Intermediate',stock:'In Stock'},
  {id:18,name:'Ibanez RG421',category:'Electric Guitars',price:499.99,img:imageFor('Ibanez RG electric guitar',18),rating:4.8,reviews:456,desc:'Fast modern electric guitar built for metal, hard rock, and technical lead playing.',tone:'Fast, aggressive, modern electric tone.',genres:['Metal','Rock','Hard Rock'],styles:['Shredding','Lead Guitar','Fast Playing'],level:'Intermediate',stock:'In Stock'},

  {id:19,name:'Fender Player Precision Bass',category:'Bass Guitars',price:849.99,img:imageFor('Fender Precision Bass guitar',19),rating:4.9,reviews:367,desc:'Punchy P-Bass tone that anchors bands, worship sets, rock grooves, and recordings.',tone:'Punchy, strong low-end bass tone.',genres:['Rock','Worship','Pop','Recording'],styles:['Groove','Live Performance','Band Foundation'],level:'Beginner to Professional',stock:'In Stock'},
  {id:20,name:'Fender Jazz Bass',category:'Bass Guitars',price:899.99,img:imageFor('Fender Jazz Bass guitar',20),rating:4.9,reviews:333,desc:'Versatile bass with articulate tone and smooth feel for funk, jazz, pop, and rock.',tone:'Articulate, flexible, growly bass tone.',genres:['Funk','Jazz','Pop','Rock'],styles:['Groove','Slap','Recording'],level:'Intermediate to Professional',stock:'In Stock'},
  {id:21,name:'Yamaha TRBX174 Bass',category:'Bass Guitars',price:249.99,img:imageFor('Yamaha TRBX bass guitar',21),rating:4.7,reviews:298,desc:'Affordable bass for students and beginner band members needing reliable low end.',tone:'Balanced, beginner-friendly bass tone.',genres:['Pop','Rock','Band Practice'],styles:['Practice','Groove','Beginner Lessons'],level:'Beginner',stock:'In Stock'},
  {id:22,name:'Ibanez GSR200 Bass',category:'Bass Guitars',price:279.99,img:imageFor('Ibanez bass guitar',22),rating:4.7,reviews:251,desc:'Comfortable modern bass with active-style punch and flexible beginner-friendly sound.',tone:'Modern, punchy, versatile bass tone.',genres:['Rock','Metal','Pop'],styles:['Band Practice','Recording','Live'],level:'Beginner to Intermediate',stock:'In Stock'},

  {id:23,name:'Yamaha PSR-E373 Keyboard',category:'Keyboards',price:229.99,img:imageFor('Yamaha keyboard digital piano',23),rating:4.8,reviews:402,desc:'Portable arranger keyboard for lessons, worship, composition, and home practice.',tone:'Versatile digital keyboard sounds.',genres:['Worship','Pop','Practice'],styles:['Composition','Lessons','Accompaniment'],level:'Beginner to Intermediate',stock:'In Stock'},
  {id:24,name:'Roland FP-10 Digital Piano',category:'Keyboards',price:599.99,img:imageFor('Roland digital piano keyboard',24),rating:4.9,reviews:377,desc:'Compact digital piano with weighted keys and realistic piano feel.',tone:'Expressive, realistic digital piano tone.',genres:['Classical','Worship','Pop'],styles:['Piano Study','Performance','Recording'],level:'Beginner to Advanced',stock:'In Stock'},
  {id:25,name:'Casio CT-S1 Keyboard',category:'Keyboards',price:249.99,img:imageFor('Casio keyboard synthesizer',25),rating:4.8,reviews:214,desc:'Slim portable keyboard with stylish design and creative modern sounds.',tone:'Clean, portable, modern keyboard tone.',genres:['Pop','Indie','Practice'],styles:['Composition','Practice','Home Studio'],level:'Beginner to Intermediate',stock:'In Stock'},

  {id:26,name:'Pearl Roadshow Drum Kit',category:'Drums',price:599.99,img:imageFor('Pearl acoustic drum kit',26),rating:4.8,reviews:188,desc:'Complete acoustic drum kit for beginner bands and live practice setups.',tone:'Full acoustic drum kit sound.',genres:['Rock','Pop','Worship'],styles:['Band Practice','Live Performance','Rhythm Training'],level:'Beginner to Intermediate',stock:'In Stock'},
  {id:27,name:'Yamaha Rydeen Drum Kit',category:'Drums',price:749.99,img:imageFor('Yamaha drum kit',27),rating:4.8,reviews:167,desc:'Reliable Yamaha acoustic drum kit with strong build and clean stage look.',tone:'Balanced acoustic drum tone.',genres:['Rock','Pop','Worship','School Band'],styles:['Live','Practice','Band'],level:'Beginner to Advanced',stock:'In Stock'},
  {id:28,name:'Roland TD-1DMK Electronic Drums',category:'Drums',price:699.99,img:imageFor('Roland electronic drum kit',28),rating:4.9,reviews:231,desc:'Electronic drum kit for quiet practice, recording, and apartment-friendly drumming.',tone:'Versatile electronic drum sounds.',genres:['Pop','Rock','Practice','Recording'],styles:['Silent Practice','Home Studio','Beat Making'],level:'Beginner to Advanced',stock:'In Stock'},

  {id:29,name:'Dunlop Guitar Picks Pack',category:'Accessories',price:6.99,img:imageFor('guitar picks',29),rating:4.8,reviews:822,desc:'Assorted picks for acoustic, electric, and bass playing.',tone:'Changes attack and picking feel.',genres:['All Genres'],styles:['Strumming','Lead','Practice'],level:'All Levels',stock:'In Stock'},
  {id:30,name:'Kyser Quick-Change Capo',category:'Accessories',price:24.99,img:imageFor('guitar capo',30),rating:4.9,reviews:612,desc:'Quick-change capo for fast key changes on acoustic and electric guitars.',tone:'Keeps tone clean while changing key.',genres:['Country','Folk','Worship','Pop'],styles:['Singer-Songwriter','Transposition'],level:'All Levels',stock:'In Stock'},
  {id:31,name:'Ernie Ball Guitar Strings',category:'Accessories',price:9.99,img:imageFor('guitar strings pack',31),rating:4.9,reviews:1098,desc:'Reliable string set for bright, fresh tone.',tone:'Fresh, bright string response.',genres:['Rock','Pop','Country'],styles:['Maintenance','Recording','Live'],level:'All Levels',stock:'In Stock'},
  {id:32,name:'Instrument Cable',category:'Accessories',price:19.99,img:imageFor('instrument cable guitar',32),rating:4.7,reviews:340,desc:'Durable cable for electric guitar, bass, keyboards, and amps.',tone:'Clean signal connection.',genres:['All Electric Instruments'],styles:['Live','Practice','Recording'],level:'All Levels',stock:'In Stock'}
];

const categories = [
  {name:'Acoustic Guitars',short:'Acoustic',img:imageFor('steel string acoustic guitars',101),desc:'Steel-string guitars for country, folk, worship, bluegrass, and songwriting.'},
  {name:'Nylon/Classical Guitars',short:'Nylon/Classical',img:imageFor('classical nylon guitars',102),desc:'Soft nylon-string guitars for classical, Latin, folk, and fingerstyle.'},
  {name:'Electric Guitars',short:'Electric',img:imageFor('electric guitars',103),desc:'Solid-body guitars for rock, blues, pop, metal, funk, and worship.'},
  {name:'Bass Guitars',short:'Bass',img:imageFor('bass guitars',104),desc:'Low-end instruments for grooves, bands, worship, and recording.'},
  {name:'Keyboards',short:'Keyboards',img:imageFor('digital keyboards piano',105),desc:'Digital keys for worship, composition, piano study, and production.'},
  {name:'Drums',short:'Drums',img:imageFor('drum kits',106),desc:'Acoustic and electronic drums for rhythm, live bands, and practice.'},
  {name:'Accessories',short:'Accessories',img:imageFor('guitar accessories capo strings picks',107),desc:'Picks, strings, capos, cables, straps, tuners, and maintenance essentials.'}
];

const genreMap = {
  Country:['Martin D-28','Yamaha F310 Acoustic Guitar','Fender Telecaster','Taylor GS Mini'],
  Folk:['Martin D-18','Taylor GS Mini','Yamaha C40 Classical Guitar'],
  Worship:['Fender CD-60S Dreadnought','Taylor 814ce','Fender Player Stratocaster','Roland FP-10 Digital Piano'],
  Rock:['Gibson Les Paul Standard 50s','Gibson SG Standard','Fender Player Stratocaster','Fender Player Precision Bass'],
  Metal:['Ibanez RG421','Ibanez GSR200 Bass','Roland TD-1DMK Electronic Drums'],
  Blues:['Fender Player Stratocaster','Gibson Les Paul Standard 50s','Martin D-18'],
  Classical:['Yamaha C40 Classical Guitar','Cordoba C5 Classical Guitar','Alvarez 4103 1970s Classical Guitar'],
  Beginner:['Yamaha F310 Acoustic Guitar','Yamaha C40 Classical Guitar','Yamaha TRBX174 Bass','Yamaha PSR-E373 Keyboard']
};

let cart = JSON.parse(localStorage.getItem('mrCart') || '[]');
let currentFilter = 'All';
let currentSearch = '';

const $ = id => document.getElementById(id);

function saveCart(){ localStorage.setItem('mrCart', JSON.stringify(cart)); updateCartCount(); }
function showToast(msg){ const t=$('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2600); }
function openModal(id){ $(id).classList.add('open'); $(id).setAttribute('aria-hidden','false'); }
function closeModal(id){ $(id).classList.remove('open'); $(id).setAttribute('aria-hidden','true'); }

function renderCategories(){
  $('categoryGrid').innerHTML = categories.map(c => `
    <article class="category-card" data-category="${c.name}">
      <img src="${c.img}" alt="${c.short}" loading="lazy">
      <div class="content"><h3>${c.short}</h3><p>${c.desc}</p></div>
    </article>`).join('');
  document.querySelectorAll('.category-card').forEach(card => card.addEventListener('click', () => setFilter(card.dataset.category)));
}

function renderGenres(){
  $('genreTabs').innerHTML = Object.keys(genreMap).map((g,i)=>`<button class="genre-btn ${i===0?'active':''}" data-genre="${g}">${g}</button>`).join('');
  document.querySelectorAll('.genre-btn').forEach(btn=>btn.addEventListener('click',()=>selectGenre(btn.dataset.genre)));
  selectGenre('Country');
}

function selectGenre(genre){
  document.querySelectorAll('.genre-btn').forEach(b=>b.classList.toggle('active',b.dataset.genre===genre));
  const recs = genreMap[genre].map(name => products.find(p=>p.name===name)).filter(Boolean);
  $('genreResult').innerHTML = `<h3>${genre} Recommendations</h3><p>These models fit the tone, playing feel, and performance needs for ${genre} music.</p><div class="recommend-list">${recs.map(p=>`<div><strong>${p.name}</strong><br><span>${p.category}</span><br><small>${p.tone}</small></div>`).join('')}</div>`;
}

function setFilter(filter){
  currentFilter = filter;
  document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active',c.dataset.filter===filter));
  $('productTitle').textContent = filter === 'All' ? 'All Products' : filter;
  document.querySelector('#best-sellers').scrollIntoView({behavior:'smooth'});
  renderProducts();
}

function filteredProducts(){
  return products.filter(p => {
    const matchesFilter = currentFilter === 'All' || p.category === currentFilter;
    const q = currentSearch.toLowerCase().trim();
    const matchesSearch = !q || [p.name,p.category,p.tone,p.desc,...p.genres,...p.styles].join(' ').toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });
}

function renderProducts(){
  const list = filteredProducts();
  $('productGrid').innerHTML = list.length ? list.map(p=>`
    <article class="product-card">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="content">
        <h3>${p.name}</h3>
        <p>${p.category}</p>
        <div class="product-meta"><span class="price">${money(p.price)}</span><span class="stock">${p.stock}</span></div>
        <p>${p.tone}</p>
        <div class="product-actions">
          <button class="btn secondary" data-view="${p.id}">View Details</button>
          <button class="btn primary" data-add="${p.id}">Add</button>
        </div>
      </div>
    </article>`).join('') : `<div class="empty-state">No products found. Try another search or category.</div>`;
  document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>openProduct(+b.dataset.view)));
  document.querySelectorAll('[data-add]').forEach(b=>b.addEventListener('click',()=>addToCart(+b.dataset.add)));
}

function openProduct(id){
  const p = products.find(x=>x.id===id); if(!p) return;
  $('productModalContent').innerHTML = `<div class="product-detail"><img src="${p.img}" alt="${p.name}"><div><p class="eyebrow">${p.category}</p><h2>${p.name}</h2><div class="product-meta"><span class="price">${money(p.price)}</span><span class="stock">${p.stock}</span></div><p>${p.desc}</p><div class="detail-tags">${p.genres.map(g=>`<span class="tag">${g}</span>`).join('')}</div><div class="detail-grid"><div><strong>Tone:</strong><br>${p.tone}</div><div><strong>Best playing styles:</strong><br>${p.styles.join(', ')}</div><div><strong>Recommended skill level:</strong><br>${p.level}</div><div><strong>Online shop info:</strong><br>Rating ${p.rating}/5 • ${p.reviews} reviews • Warranty inquiry available</div></div><button class="btn primary" data-add-modal="${p.id}">Add to Cart</button></div></div>`;
  openModal('productModal');
  document.querySelector('[data-add-modal]').addEventListener('click',()=>addToCart(p.id));
}

function addToCart(id){
  const item = cart.find(i=>i.id===id);
  if(item) item.qty += 1; else cart.push({id,qty:1});
  saveCart(); showToast('Added to cart');
}
function updateCartCount(){ $('cartCount').textContent = cart.reduce((s,i)=>s+i.qty,0); }
function cartTotal(){ return cart.reduce((s,i)=>{const p=products.find(x=>x.id===i.id); return s+(p?p.price*i.qty:0)},0); }
function renderCart(){
  if(!cart.length){ $('cartItems').innerHTML = '<div class="empty-state">Your cart is empty.</div>'; }
  else $('cartItems').innerHTML = cart.map(i=>{ const p=products.find(x=>x.id===i.id); if(!p) return ''; return `<div class="cart-item"><img src="${p.img}" alt="${p.name}"><div><strong>${p.name}</strong><br><span>${money(p.price)} each</span><br><small>Subtotal: ${money(p.price*i.qty)}</small></div><div><div class="qty-controls"><button data-minus="${p.id}">−</button><strong>${i.qty}</strong><button data-plus="${p.id}">+</button></div><button class="remove-btn" data-remove="${p.id}">Remove</button></div></div>`; }).join('');
  $('cartTotal').textContent = money(cartTotal());
  $('checkoutTotal').textContent = money(cartTotal());
  document.querySelectorAll('[data-plus]').forEach(b=>b.addEventListener('click',()=>{cart.find(i=>i.id==b.dataset.plus).qty++; saveCart(); renderCart();}));
  document.querySelectorAll('[data-minus]').forEach(b=>b.addEventListener('click',()=>{const item=cart.find(i=>i.id==b.dataset.minus); item.qty--; if(item.qty<=0) cart=cart.filter(i=>i.id!=b.dataset.minus); saveCart(); renderCart();}));
  document.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click',()=>{cart=cart.filter(i=>i.id!=b.dataset.remove); saveCart(); renderCart();}));
}

function setupEvents(){
  $('mobileMenuBtn').addEventListener('click',()=>$('navLinks').classList.toggle('active'));
  $('searchToggle').addEventListener('click',()=>$('searchBar').classList.toggle('active'));
  $('searchInput').addEventListener('input',e=>{currentSearch=e.target.value; renderProducts(); document.querySelector('#best-sellers').scrollIntoView({behavior:'smooth'});});
  document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>setFilter(c.dataset.filter)));
  $('cartButton').addEventListener('click',()=>{renderCart(); openModal('cartModal');});
  document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',()=>closeModal(el.dataset.close+'Modal')));
  $('clearCartBtn').addEventListener('click',()=>{cart=[]; saveCart(); renderCart(); showToast('Cart cleared');});
  $('checkoutBtn').addEventListener('click',()=>{ if(!cart.length){showToast('Your cart is empty.'); return;} renderCart(); closeModal('cartModal'); openModal('checkoutModal');});
  $('paymentMethod').addEventListener('change',e=>{
    document.querySelectorAll('.payment-fields').forEach(f=>f.classList.remove('active'));
    $(`${e.target.value}Fields`).classList.add('active');
  });
  $('checkoutForm').addEventListener('submit',e=>{
    e.preventDefault();
    if(!cart.length){showToast('Your cart is empty.');return;}
    const method=$('paymentMethod').value;
    const basic=[$('fullName').value,$('contactNumber').value,$('address').value].every(v=>v.trim());
    let paymentOk=true;
    if(method==='gcash') paymentOk=!!$('gcashNumber').value.trim();
    if(method==='card') paymentOk=[$('cardNumber').value,$('cardHolder').value,$('expirationDate').value,$('cvv').value].every(v=>v.trim());
    if(!basic || !paymentOk){showToast('Please complete your checkout details.');return;}
    cart=[]; saveCart(); renderCart(); closeModal('checkoutModal'); $('checkoutForm').reset(); document.querySelectorAll('.payment-fields').forEach(f=>f.classList.remove('active')); $('codFields').classList.add('active'); showToast('Thank you for ordering from MR ToneWorks! Your order has been received.');
  });
  $('contactForm').addEventListener('submit',e=>{e.preventDefault(); e.target.reset(); showToast('Thank you for contacting MR ToneWorks!');});
}

renderCategories(); renderGenres(); renderProducts(); updateCartCount(); setupEvents();

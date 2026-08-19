const SHIPPING_FEE = 5000;
let currentPaymentMethod = "COD";
let selectedQuantity = 1;

let defaultProfile = {
    email: "azariya.azariya@email.com",
    username: "Azariya",
    phone: "+62 812-3456-7890",
    address: "Jl. Cempaka Indah No. 45, Komplek Green Residence, Jakarta Selatan, 12410"
};

let defaultProducts = [
    { id: 1, name: "Nike Free Flyknit 4.0", price: 2499000, isBestseller: true, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", desc: "Sepatu edisi terbatas dengan warna merah ikonik. Nyaman dipakai harian.", rating: 4.9, sold: 320, colors: ["Merah", "Hitam"], sizes: ["EU:39", "EU:40", "EU:41", "EU:42"] },
    { id: 2, name: "Nike Air Max 1", price: 2899000, isBestseller: true, image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80", desc: "Desain hypebeast bernuansa streetwear modern dengan bantalan empuk.", rating: 4.8, sold: 215, colors: ["Putih/Abu", "Hitam"], sizes: ["EU:38.5", "EU:40", "EU:41", "EU:43"] },
    { id: 3, name: "Nike Air Force 1 Shadow", price: 2199000, isBestseller: true, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80", desc: "Sepatu warna pastel kasual yang elegan dan modis di segala situasi.", rating: 4.9, sold: 450, colors: ["Pastel", "Putih"], sizes: ["EU:38", "EU:39", "EU:40"] },
    { id: 4, name: "Puma Smash v2", price: 2650000, isBestseller: true, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80", desc: "Silhouette klasik berbalut material premium yang kokoh dan tahan lama.", rating: 4.7, sold: 180, colors: ["Hitam/Putih", "Cokelat"], sizes: ["EU:39", "EU:40", "EU:41", "EU:42"] },
    { id: 9, name: "Vans Old Skool", price: 2250000, isBestseller: true, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80", desc: "Desain kasual trendi dengan bahan kanvas premium dan kenyamanan ekstra.", rating: 4.8, sold: 210, colors: ["Kuning/Putih", "Hitam"], sizes: ["EU:39", "EU:40", "EU:41", "EU:42"] },
    { id: 10, name: "Puma RS-X", price: 1899000, isBestseller: true, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80", desc: "Tampil gaya dan stylish setiap hari dengan kombinasi warna yang atraktif.", rating: 4.7, sold: 195, colors: ["Multicolor", "Hijau"], sizes: ["EU:39", "EU:40", "EU:41"] },
    { id: 11, name: "New Balance 247", price: 2399000, isBestseller: true, image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80", desc: "Sepatu harian fleksibel, tahan lama, dan sangat ringan digunakan.", rating: 4.8, sold: 280, colors: ["Cokelat Muda", "Abu-abu"], sizes: ["EU:40", "EU:41", "EU:42"] },
    { id: 12, name: "Nike Free RN Flyknit", price: 2999000, isBestseller: true, image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=500&q=80", desc: "Material premium berdaya tahan tinggi dengan sentuhan desain minimalis eksklusif.", rating: 4.9, sold: 410, colors: ["Putih", "Hitam Polos"], sizes: ["EU:39", "EU:40", "EU:41", "EU:42", "EU:43"] },
    { id: 5, name: "Nike Flyknit Lunar", price: 1499000, isBestseller: false, image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500&q=80", desc: "Sneakers bernuansa biru klasik, cocok dikombinasikan dengan denim.", rating: 4.6, sold: 95, colors: ["Biru", "Hitam"], sizes: ["EU:39", "EU:40", "EU:41"] },
    { id: 6, name: "Nike Air Force 1", price: 1599000, isBestseller: false, image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=500&q=80", desc: "Desain futuristik dengan fleksibilitas tinggi untuk workout santai.", rating: 4.8, sold: 140, colors: ["Putih Polos"], sizes: ["EU:40", "EU:41", "EU:42"] },
    { id: 7, name: "Nike Kyrie 6", price: 1399000, isBestseller: false, image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&q=80", desc: "Sepatu serba hitam yang simpel dan gagah untuk segala suasana.", rating: 4.7, sold: 110, colors: ["Hitam"], sizes: ["EU:40", "EU:41", "EU:42", "EU:43"] },
    { id: 8, name: "Nike Air Max 90", price: 1199000, isBestseller: false, image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&q=80", desc: "Sepatu bergaya retro runner yang ramping dan ringan saat melangkah.", rating: 4.9, sold: 300, colors: ["Merah/Putih"], sizes: ["EU:38", "EU:39", "EU:40"] }
];

let defaultSuppliers = [
    { id: 1, name: "PT Wijaya Kusuma", phone: "+62 0987-654-7907", address: "Jl. Mangkang Kulon SMK Texmaco Semarang", category: "Nike Series" },
    { id: 2, name: "PT Nike Distribution Indonesia", phone: "+62 811-2233-4455", address: "Kawasan Industri Pulogadung, Jakarta Timur", category: "Nike Series" },
    { id: 3, name: "CV Footwear Jaya Utama", phone: "+62 812-9988-7766", address: "Jl. Industri Sepatu No. 12, Bandung", category: "Puma & Vans" },
    { id: 4, name: "Global Sport Supplier Ltd", phone: "+62 857-1122-3344", address: "Komplek Pergudangan Sunter, Jakarta Utara", category: "New Balance" }
];

function getStoredProfile() {
    return JSON.parse(localStorage.getItem('userProfile')) || defaultProfile;
}

function saveProfile(profile) {
    localStorage.setItem('userProfile', JSON.stringify(profile));
}

function getStoredProducts() {
    return JSON.parse(localStorage.getItem('products')) || defaultProducts;
}

function saveProducts(prods) {
    localStorage.setItem('products', JSON.stringify(prods));
}

function getStoredCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function getStoredOrders() {
    return JSON.parse(localStorage.getItem('myOrders')) || [];
}

function saveOrders(orders) {
    localStorage.setItem('myOrders', JSON.stringify(orders));
}

function getStoredSuppliers() {
    return JSON.parse(localStorage.getItem('suppliers')) || defaultSuppliers;
}

function saveSuppliers(sups) {
    localStorage.setItem('suppliers', JSON.stringify(sups));
}

let products = getStoredProducts();
let cart = getStoredCart();
let myOrders = getStoredOrders();
let userProfile = getStoredProfile();
let suppliers = getStoredSuppliers();

let selectedDetailProduct = null;
let selectedColor = "";
let selectedSize = "";
let uploadedImageBase64 = "";

function handleAdminLogin(e) {
    e.preventDefault();
    const user = document.getElementById('admin-username').value;
    const pass = document.getElementById('admin-password').value;

    if (user === 'azariya' && pass === '54321') {
        window.location.href = 'admin-menu.html';
    } else {
        document.getElementById('admin-login-error').style.display = 'block';
    }
}

function adminLogout() {
    document.getElementById('admin-logout-modal').classList.add('active');
}

function closeAdminLogoutModal() {
    document.getElementById('admin-logout-modal').classList.remove('active');
}

function confirmAdminLogout() {
    window.location.href = 'index.html';
}

function handleAuthStep1(e) {
    e.preventDefault();
    const emailInput = document.getElementById('input-email').value;
    if (emailInput.trim() !== '') {
        userProfile.email = emailInput;
        saveProfile(userProfile);
        window.location.href = 'buyer-auth-step2.html';
    }
}

function handleAuthStep2(e) {
    e.preventDefault();
    const usernameInput = document.getElementById('input-username').value;
    if (usernameInput.trim() !== '') {
        userProfile.username = usernameInput;
        saveProfile(userProfile);
        window.location.href = 'buyer-auth-step3.html';
    }
}

function handleAuthStep3(e) {
    e.preventDefault();
    const phoneInput = document.getElementById('input-phone').value;
    const addressInput = document.getElementById('input-address').value;

    if (phoneInput.trim() !== '' && addressInput.trim() !== '') {
        userProfile.phone = phoneInput;
        userProfile.address = addressInput;
        saveProfile(userProfile);
        window.location.href = 'buyer-welcome.html';
    }
}

function updateProfileUI() {
    userProfile = getStoredProfile();
    let nameEl = document.getElementById('profile-display-name');
    let emailEl = document.getElementById('profile-display-email');
    let phoneEl = document.getElementById('profile-display-phone');
    let addressEl = document.getElementById('profile-display-address');

    if (nameEl) nameEl.innerText = userProfile.username;
    if (emailEl) emailEl.innerText = userProfile.email;
    if (phoneEl) phoneEl.innerText = userProfile.phone;
    if (addressEl) addressEl.innerText = userProfile.address;

    let cNameEl = document.getElementById('checkout-display-name');
    let cPhoneEl = document.getElementById('checkout-display-phone');
    let cAddressEl = document.getElementById('checkout-display-address');

    if (cNameEl) cNameEl.innerText = userProfile.username;
    if (cPhoneEl) cPhoneEl.innerText = userProfile.phone;
    if (cAddressEl) cAddressEl.innerText = userProfile.address;
}

function showLogoutModal() {
    document.getElementById('logout-modal').classList.add('active');
}

function closeLogoutModal() {
    document.getElementById('logout-modal').classList.remove('active');
}

function confirmLogout() {
    localStorage.removeItem('userProfile');
    window.location.href = 'index.html';
}

function formatRupiah(num) {
    return "Rp " + num.toLocaleString('id-ID');
}

function renderProducts() {
    products = getStoredProducts();
    const bestsellerGrid = document.getElementById('bestseller-grid');
    const regularGrid = document.getElementById('regular-grid');

    if (!bestsellerGrid || !regularGrid) return;

    bestsellerGrid.innerHTML = '';
    regularGrid.innerHTML = '';

    products.forEach(p => {
        const cardHTML = `
            <div class="product-card" onclick="openProductDetail(${p.id})">
                ${p.isBestseller ? '<span class="badge-bestseller">Bestseller</span>' : ''}
                <img src="${p.image}" alt="${p.name}" class="product-image">
                <div class="product-info">
                    <div class="product-title">${p.name}</div>
                    <div class="product-price">${formatRupiah(p.price)}</div>
                    <div class="product-description">${p.desc}</div>
                    <div class="product-meta">⭐ ${p.rating} <span>| terjual ${p.sold}</span></div>
                    <div class="product-actions" onclick="event.stopPropagation();">
                        <button class="btn btn-cart" onclick="addToCart(${p.id})"><i class="fas fa-cart-plus"></i></button>
                        <button class="btn btn-buy" onclick="directBuy(${p.id})">Beli</button>
                    </div>
                </div>
            </div>
        `;

        if (p.isBestseller) {
            bestsellerGrid.innerHTML += cardHTML;
        } else {
            regularGrid.innerHTML += cardHTML;
        }
    });
}

function openProductDetail(id) {
    localStorage.setItem('selectedProductId', id);
    window.location.href = 'product-detail.html';
}

function renderProductDetailPage(id) {
    products = getStoredProducts();
    const product = products.find(p => p.id === id);
    if(!product) return;

    selectedDetailProduct = product;
    selectedColor = product.colors[0];
    selectedSize = product.sizes[0];

    const detailContainer = document.getElementById('detail-card-content');
    if (!detailContainer) return;

    detailContainer.innerHTML = `
        <div style="width:100%; border-radius:12px; overflow:hidden; margin-bottom:15px; border:1px solid #f0f0f0;">
            <img src="${product.image}" alt="${product.name}" style="width:100%; height:auto; display:block;">
        </div>
        <div style="display:flex; justify-content:space-between; align-items:baseline;">
            <span style="font-size:1.4rem; font-weight:bold; color:#e63946;">${formatRupiah(product.price)}</span>
            <span style="font-size:0.8rem; color:#888;">${product.sold} Terjual</span>
        </div>
        <h2 style="font-size:1.1rem; color:#222; margin: 8px 0 15px 0;">${product.name}</h2>

        <div class="option-group" style="margin-bottom:12px;">
            <div class="option-label" style="font-size:0.85rem; font-weight:500; color:#555; margin-bottom:6px;">Pilih Warna:</div>
            <div class="option-buttons" style="display:flex; gap:8px;">
                ${product.colors.map((c, idx) => `
                    <button class="opt-btn ${idx === 0 ? 'active' : ''}" onclick="selectColor('${c}', this)">${c}</button>
                `).join('')}
            </div>
        </div>

        <div class="option-group" style="margin-bottom:15px;">
            <div class="option-label" style="font-size:0.85rem; font-weight:500; color:#555; margin-bottom:6px;">Pilih Ukuran (Size):</div>
            <div class="option-buttons" style="display:flex; gap:8px; flex-wrap:wrap;">
                ${product.sizes.map((s, idx) => `
                    <button class="opt-btn ${idx === 0 ? 'active' : ''}" onclick="selectSize('${s}', this)">${s}</button>
                `).join('')}
            </div>
        </div>

        <div style="background:#f9f9f9; padding:10px 12px; border-radius:8px; font-size:0.8rem; color:#444; margin-bottom:15px; border:1px solid #eee;">
            <div>🚚 <strong>Estimasi Pengiriman:</strong> 8 - 10 Ags • Bebas Pengembalian</div>
            <div style="margin-top:4px;">💳 <strong>Metode Pembayaran:</strong> COD &amp; QRIS</div>
        </div>

        <div style="background:#f9f9f9; padding:10px 12px; border-radius:8px; font-size:0.8rem; color:#444; margin-bottom:15px; border:1px solid #eee;">
            <strong>Deskripsi Produk:</strong>
            <p style="margin-top:4px; color:#555; line-height:1.4;">${product.desc}</p>
        </div>

        <div style="border-top:1px solid #eee; padding-top:12px; margin-bottom:40px;">
            <div style="font-size:0.85rem; font-weight:bold; color:#333; margin-bottom:10px;">⭐ ${product.rating} Penilaian Produk (295)</div>
            <div style="display:flex; gap:10px; align-items:center; margin-bottom:6px;">
                <div style="width:28px; height:28px; border-radius:50%; background:#2a9d8f; color:#fff; display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:bold;">Z</div>
                <span style="font-size:0.8rem; font-weight:bold;">zaaaa396</span>
            </div>
            <div style="font-size:0.7rem; color:#888; margin-bottom:4px;">Variasi: ${product.colors[0]}, ${product.sizes[0]}</div>
            <p style="font-size:0.8rem; color:#555; line-height:1.3;">Sepatunya sangat bagus dan pas di kaki. Bantalannya empuk banget dipake seharian, recommended seller!</p>
        </div>

        <div style="position:fixed; bottom:0; left:0; right:0; max-width:500px; margin:0 auto; background:#fff; padding:12px 15px; border-top:1px solid #eee; display:flex; gap:10px; z-index:100; box-shadow: 0 -2px 10px rgba(0,0,0,0.05);">
            <button class="btn btn-cart" style="flex:1; padding:12px; font-size:0.85rem;" onclick="openVariantSheet('cart')"><i class="fas fa-cart-plus"></i> + Keranjang</button>
            <button class="btn btn-buy" style="flex:1; padding:12px; font-size:0.85rem; background:#004b36;" onclick="openVariantSheet('buy')">Beli Sekarang</button>
        </div>
    `;
}

function openVariantSheet(mode) {
    if (!selectedDetailProduct) return;
    const overlay = document.getElementById('variant-sheet-overlay');
    const sheetBody = document.getElementById('sheet-modal-body');
    if (!overlay || !sheetBody) return;

    selectedQuantity = 1;

    const sizeMap = {
        "EU:38": "EUR 38/24cm",
        "EU:38.5": "EUR 38.5/24.2cm",
        "EU:39": "EUR 39/24.5cm",
        "EU:40": "EUR 40/25cm",
        "EU:41": "EUR 41/26cm",
        "EU:42": "EUR 42/26.5cm",
        "EU:43": "EUR 43/27.5cm"
    };

    const formattedSizes = selectedDetailProduct.sizes.map(s => sizeMap[s] || `${s}/25cm`);

    sheetBody.innerHTML = `
        <div style="display: flex; gap: 12px; padding-bottom: 12px; border-bottom: 1px solid #f0f0f0; align-items: flex-start;">
            <div style="position: relative; width: 90px; height: 90px; border: 1px solid #eee; border-radius: 8px; overflow: hidden; flex-shrink: 0;">
                <img src="${selectedDetailProduct.image}" style="width: 100%; height: 100%; object-fit: cover;">
                <i class="fas fa-expand-alt" style="position: absolute; top: 5px; right: 5px; font-size: 0.7rem; color: #666; background: rgba(255,255,255,0.8); padding: 3px; border-radius: 50%;"></i>
            </div>
            <div style="flex: 1;">
                <div style="display: flex; align-items: baseline; gap: 6px;">
                    <span style="font-size: 1.25rem; font-weight: bold; color: #e63946;">${formatRupiah(selectedDetailProduct.price)}</span>
                    <span style="font-size: 0.75rem; color: #aaa; text-decoration: line-through;">${formatRupiah(Math.round(selectedDetailProduct.price * 1.35))}</span>
                </div>
                <div style="font-size: 0.75rem; color: #e63946; font-weight: bold; margin-top: 2px;">Harga Flash Sale</div>
                <div style="font-size: 0.78rem; color: #666; margin-top: 4px;">Stok: 31</div>
            </div>
        </div>

        <div style="display: flex; align-items: center; gap: 8px; padding: 10px 0; font-size: 0.82rem; color: #2a9d8f; font-weight: bold; border-bottom: 1px solid #f0f0f0;">
            <i class="fas fa-truck"></i> Besok
        </div>

        <div class="option-group" style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
            <div class="option-label" style="font-weight: 500; font-size: 0.82rem; color: #444; margin-bottom: 8px;">Warna</div>
            <div class="option-buttons" style="display: flex; gap: 8px; flex-wrap: wrap;">
                ${selectedDetailProduct.colors.map((c, idx) => `
                    <button class="opt-btn ${idx === 0 ? 'active' : ''}" onclick="selectColor('${c}', this)" style="padding: 6px 12px; border-radius: 6px; font-size: 0.78rem;">${c}</button>
                `).join('')}
            </div>
        </div>

        <div class="option-group" style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span class="option-label" style="font-weight: 500; font-size: 0.82rem; color: #444;">Ukuran</span>
                <span onclick="alert('Panduan Ukuran:\\nEUR 38 = 24 cm\\nEUR 39 = 24.5 cm\\nEUR 40 = 25 cm\\nEUR 41 = 26 cm\\nEUR 42 = 26.5 cm')" style="font-size: 0.75rem; color: #888; cursor: pointer; text-decoration: underline;">Tabel Ukuran</span>
            </div>
            <div class="option-buttons" style="display: flex; gap: 8px; flex-wrap: wrap;">
                ${formattedSizes.map((s, idx) => `
                    <button class="opt-btn ${idx === 0 ? 'active' : ''}" onclick="selectSize('${s}', this)" style="padding: 6px 10px; border-radius: 6px; font-size: 0.75rem;">${s}</button>
                `).join('')}
            </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
            <span style="font-weight: 500; font-size: 0.82rem; color: #444;">Jumlah</span>
            <div style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 4px; overflow: hidden;">
                <button onclick="changeQuantity(-1)" style="border: none; background: #f8f8f8; width: 30px; height: 30px; font-size: 0.9rem; font-weight: bold; cursor: pointer; color: #555;">-</button>
                <span id="detail-quantity-val" style="width: 36px; text-align: center; font-size: 0.82rem; font-weight: bold;">1</span>
                <button onclick="changeQuantity(1)" style="border: none; background: #f8f8f8; width: 30px; height: 30px; font-size: 0.9rem; font-weight: bold; cursor: pointer; color: #555;">+</button>
            </div>
        </div>

        <div style="margin-top: 15px;">
            <button class="btn btn-buy" style="width: 100%; padding: 12px; font-size: 0.9rem; font-weight: bold; background-color: #e63946; color: white; border: none; border-radius: 8px; cursor: pointer;" onclick="confirmVariantSubmit('${mode}')">
                Masukkan Keranjang
            </button>
        </div>
    `;

    overlay.classList.add('active');
}

function closeVariantSheet(e) {
    const overlay = document.getElementById('variant-sheet-overlay');
    if (overlay) overlay.classList.remove('active');
}

function changeQuantity(delta) {
    selectedQuantity = Math.max(1, selectedQuantity + delta);
    const qtyEl = document.getElementById('detail-quantity-val');
    if (qtyEl) qtyEl.innerText = selectedQuantity;
}

function selectColor(color, btn) {
    selectedColor = color;
    btn.parentElement.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function selectSize(size, btn) {
    selectedSize = size;
    btn.parentElement.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function confirmVariantSubmit(mode) {
    if (!selectedDetailProduct) return;

    if (mode === 'buy') {
        localStorage.setItem('checkoutItems', JSON.stringify([selectedDetailProduct]));
        window.location.href = 'checkout.html';
    } else {
        cart = getStoredCart();
        for (let i = 0; i < selectedQuantity; i++) {
            cart.push({
                cartId: Date.now() + Math.random(),
                product: selectedDetailProduct,
                color: selectedColor,
                size: selectedSize,
                selected: true
            });
        }
        saveCart(cart);
        updateCartBadge();
        window.location.href = 'cart.html';
    }
}

function addToCart(id) {
    products = getStoredProducts();
    const product = products.find(p => p.id === id);
    cart = getStoredCart();
    cart.push({
        cartId: Date.now() + Math.random(),
        product: product,
        color: product.colors[0],
        size: product.sizes[0],
        selected: true
    });
    saveCart(cart);
    updateCartBadge();
}

function updateCartBadge() {
    cart = getStoredCart();
    const badge = document.getElementById('cart-badge');
    if (badge) {
        if (cart.length > 0) {
            badge.style.display = 'block';
            badge.innerText = cart.length;
        } else {
            badge.style.display = 'none';
        }
    }
}

function toggleCartItemSelection(index) {
    cart = getStoredCart();
    cart[index].selected = !cart[index].selected;
    saveCart(cart);
    calculateCartTotal();
}

function calculateCartTotal() {
    cart = getStoredCart();
    const totalPriceEl = document.getElementById('cart-total-price');
    if (!totalPriceEl) return;

    let itemTotal = 0;
    let hasSelectedItems = false;

    cart.forEach(item => {
        if (item.selected) {
            itemTotal += item.product.price;
            hasSelectedItems = true;
        }
    });

    let finalTotal = hasSelectedItems ? itemTotal + SHIPPING_FEE : 0;
    totalPriceEl.innerText = formatRupiah(finalTotal);
}

function renderCart() {
    cart = getStoredCart();
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding: 40px; color: var(--text-muted);">Keranjangmu masih kosong.</div>`;
        document.getElementById('cart-total-price').innerText = "Rp 0";
        return;
    }

    container.innerHTML = '';
    cart.forEach((item, index) => {
        container.innerHTML += `
            <div class="cart-item">
                <input type="checkbox" class="cart-checkbox" ${item.selected ? 'checked' : ''} onchange="toggleCartItemSelection(${index})">
                <img src="${item.product.image}" alt="${item.product.name}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.product.name}</div>
                    <div style="font-size:0.7rem; color:var(--text-muted); margin:2px 0;">Variasi: ${item.color || 'Default'}, ${item.size || 'Free Size'}</div>
                    <div class="cart-item-price">${formatRupiah(item.product.price)}</div>
                </div>
                <button style="border:none; background:none; color: #e63946; cursor:pointer;" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });

    calculateCartTotal();
}

function removeFromCart(index) {
    cart = getStoredCart();
    cart.splice(index, 1);
    saveCart(cart);
    updateCartBadge();
    renderCart();
}

function directBuy(id) {
    products = getStoredProducts();
    const product = products.find(p => p.id === id);
    localStorage.setItem('checkoutItems', JSON.stringify([product]));
    window.location.href = 'checkout.html';
}

function goToCheckoutFromCart() {
    cart = getStoredCart();
    const selectedCartItems = cart.filter(item => item.selected);

    if (cart.length === 0) {
        alert("Keranjang kamu kosong!");
        return;
    }

    if (selectedCartItems.length === 0) {
        alert("Pilih minimal satu produk untuk di-checkout!");
        return;
    }

    let checkoutItems = selectedCartItems.map(item => item.product);
    localStorage.setItem('checkoutItems', JSON.stringify(checkoutItems));
    window.location.href = 'checkout.html';
}

function selectPaymentMethod(method) {
    currentPaymentMethod = method;
    const codBox = document.getElementById('pay-opt-cod');
    const qrisBox = document.getElementById('pay-opt-qris');
    const barcodeBox = document.getElementById('qris-barcode-box');
    const btnSubmit = document.getElementById('btn-submit-checkout');

    if (method === 'QRIS') {
        qrisBox.style.border = '2px solid var(--primary-green)';
        qrisBox.style.background = 'var(--light-green)';
        codBox.style.border = '2px solid #ddd';
        codBox.style.background = '#ffffff';
        barcodeBox.style.display = 'block';
        btnSubmit.innerHTML = `<i class="fas fa-check-circle"></i> Selesai`;
    } else {
        codBox.style.border = '2px solid var(--primary-green)';
        codBox.style.background = 'var(--light-green)';
        qrisBox.style.border = '2px solid #ddd';
        qrisBox.style.background = '#ffffff';
        barcodeBox.style.display = 'none';
        btnSubmit.innerHTML = `<i class="fas fa-check-circle"></i> Klik Checkout`;
    }
}

function openCheckoutPage() {
    let checkoutItems = JSON.parse(localStorage.getItem('checkoutItems')) || [];
    const container = document.getElementById('checkout-summary-items');
    const totalEl = document.getElementById('checkout-total-price');

    if(!container || !totalEl) return;

    container.innerHTML = '';
    let itemTotal = 0;

    checkoutItems.forEach(item => {
        itemTotal += item.price;
        container.innerHTML += `
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:5px;">
                <span>${item.name}</span>
                <strong>${formatRupiah(item.price)}</strong>
            </div>
        `;
    });

    let grandTotal = itemTotal + SHIPPING_FEE;
    totalEl.innerText = formatRupiah(grandTotal);
}

/* REVISI PESANAN: Menyimpan data pembeli secara lengkap */
function processCheckout() {
    let checkoutItems = JSON.parse(localStorage.getItem('checkoutItems')) || [];
    let itemTotal = checkoutItems.reduce((sum, item) => sum + item.price, 0);
    let grandTotal = itemTotal + SHIPPING_FEE;
    let buyer = getStoredProfile();

    myOrders = getStoredOrders();
    myOrders.unshift({
        id: "AZR-" + Math.floor(100000 + Math.random() * 900000),
        items: [...checkoutItems],
        total: grandTotal,
        paymentMethod: currentPaymentMethod,
        status: "Dikemas",
        date: new Date().toLocaleDateString('id-ID'),
        buyerName: buyer.username || "Azariya",
        buyerPhone: buyer.phone || "+62 812-3456-7890",
        buyerAddress: buyer.address || "Jl. Cempaka Indah No. 45, Jakarta"
    });
    saveOrders(myOrders);

    cart = getStoredCart().filter(item => !item.selected);
    saveCart(cart);

    window.location.href = 'thankyou.html';
}

function clearOrderHistory() {
    if (confirm("Apakah kamu yakin ingin menghapus semua riwayat pesanan?")) {
        localStorage.removeItem('myOrders');
        renderOrders();
    }
}

/* REVISI HALAMAN PESANAN PEMBELI: Menampilkan Nama, No Telp, Alamat */
function renderOrders() {
    myOrders = getStoredOrders();
    const container = document.getElementById('orders-container');
    if (!container) return;

    if (myOrders.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding: 40px; color: var(--text-muted);">Belum ada pesanan aktif.</div>`;
        return;
    }

    let htmlContent = `
        <div style="text-align: right; margin-bottom: 15px;">
            <button onclick="clearOrderHistory()" style="background: #e63946; color: white; border: none; padding: 6px 12px; border-radius: 6px; font-size: 0.75rem; cursor: pointer;">
                <i class="fas fa-trash"></i> Hapus Riwayat
            </button>
        </div>
    `;

    myOrders.forEach(order => {
        let itemNames = order.items.map(i => i.name).join(', ');
        let payLabel = order.paymentMethod || "COD";
        let buyerName = order.buyerName || userProfile.username;
        let buyerPhone = order.buyerPhone || userProfile.phone;
        let buyerAddress = order.buyerAddress || userProfile.address;

        htmlContent += `
            <div class="order-card" style="margin-bottom: 15px; background: #fff; border-radius: 10px; padding: 14px; border-left: 4px solid var(--primary-green); box-shadow: 0 2px 5px rgba(0,0,0,0.03);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <strong style="font-size:0.9rem;">#${order.id}</strong>
                    <span class="order-status-badge" style="background: var(--light-green); color: var(--dark-green); padding: 3px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: bold;">
                        <i class="fas fa-box"></i> ${order.status}
                    </span>
                </div>
                
                <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px; border-bottom: 1px dashed #eee; padding-bottom: 6px;">
                    <strong>Produk:</strong> ${itemNames} (Inc. Ongkir Rp 5.000)
                </div>

                <div style="font-size:0.78rem; color:#444; background: #f9f9f9; padding: 8px; border-radius: 6px; margin-bottom: 8px;">
                    <div><i class="fas fa-user" style="color:var(--primary-green);"></i> <strong>Pembeli:</strong> ${buyerName} (${buyerPhone})</div>
                    <div style="margin-top: 3px;"><i class="fas fa-map-marker-alt" style="color:var(--primary-green);"></i> <strong>Alamat:</strong> ${buyerAddress}</div>
                </div>

                <div style="font-size:0.88rem; font-weight:bold; color:var(--dark-green); text-align: right;">
                    ${formatRupiah(order.total)} (${payLabel})
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

function switchAdminDashTab(tab) {
    const inputContainer = document.getElementById('admin-sub-input');
    const viewContainer = document.getElementById('admin-sub-view');
    const supplierContainer = document.getElementById('admin-sub-supplier');
    const pricesContainer = document.getElementById('admin-sub-prices');
    const ordersContainer = document.getElementById('admin-sub-orders');

    const btnInput = document.getElementById('btn-tab-input');
    const btnView = document.getElementById('btn-tab-view');
    const btnSupplier = document.getElementById('btn-tab-supplier');
    const btnPrices = document.getElementById('btn-tab-prices');
    const btnOrders = document.getElementById('btn-tab-orders');

    if(inputContainer) inputContainer.style.display = 'none';
    if(viewContainer) viewContainer.style.display = 'none';
    if(supplierContainer) supplierContainer.style.display = 'none';
    if(pricesContainer) pricesContainer.style.display = 'none';
    if(ordersContainer) ordersContainer.style.display = 'none';

    [btnInput, btnView, btnSupplier, btnPrices, btnOrders].forEach(btn => {
        if (btn) btn.style.backgroundColor = 'var(--accent-green)';
    });

    if (tab === 'input' && inputContainer && btnInput) {
        inputContainer.style.display = 'block';
        btnInput.style.backgroundColor = 'var(--dark-green)';
    } else if (tab === 'view' && viewContainer && btnView) {
        viewContainer.style.display = 'block';
        btnView.style.backgroundColor = 'var(--dark-green)';
        renderAdminProductTable();
    } else if (tab === 'supplier' && supplierContainer && btnSupplier) {
        supplierContainer.style.display = 'block';
        btnSupplier.style.backgroundColor = 'var(--dark-green)';
        renderAdminSupplierTable();
    } else if (tab === 'prices' && pricesContainer && btnPrices) {
        pricesContainer.style.display = 'block';
        btnPrices.style.backgroundColor = 'var(--dark-green)';
        renderAdminPricesTable();
    } else if (tab === 'orders' && ordersContainer && btnOrders) {
        ordersContainer.style.display = 'block';
        btnOrders.style.backgroundColor = 'var(--dark-green)';
        renderAdminOrdersTable();
    }
}

function previewUploadImage(e) {
    const file = e.target.files[0];
    const previewImg = document.getElementById('preview-img');
    const previewText = document.getElementById('preview-text');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
            uploadedImageBase64 = evt.target.result;
            previewImg.src = uploadedImageBase64;
            previewImg.style.display = 'block';
            previewText.style.display = 'none';
        };
        reader.readAsDataURL(file);
    } else {
        uploadedImageBase64 = "";
        previewImg.style.display = 'none';
        previewText.style.display = 'block';
    }
}

function handleAdminAddProduct(e) {
    e.preventDefault();
    const name = document.getElementById('admin-prod-name').value;
    const price = parseInt(document.getElementById('admin-prod-price').value);
    const desc = document.getElementById('admin-prod-desc').value;

    if (!uploadedImageBase64) {
        alert("Silakan pilih foto produk dari galeri terlebih dahulu!");
        return;
    }

    const newProduct = {
        id: Date.now(),
        name: name,
        price: price,
        isBestseller: false,
        image: uploadedImageBase64,
        desc: desc,
        rating: 0,
        sold: 0,
        colors: ["Hitam", "Putih"],
        sizes: ["EU:39", "EU:40", "EU:41", "EU:42"]
    };

    products = getStoredProducts();
    products.unshift(newProduct);
    saveProducts(products);

    document.getElementById('admin-prod-name').value = '';
    document.getElementById('admin-prod-price').value = '';
    document.getElementById('admin-prod-desc').value = '';
    document.getElementById('admin-prod-file').value = '';
    document.getElementById('preview-img').style.display = 'none';
    document.getElementById('preview-text').style.display = 'block';
    uploadedImageBase64 = "";

    alert("Produk berhasil ditambahkan ke toko online!");
    switchAdminDashTab('view');
}

function renderAdminProductTable() {
    products = getStoredProducts();
    const tbody = document.getElementById('admin-product-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';
    products.forEach(p => {
        tbody.innerHTML += `
            <tr>
                <td><img src="${p.image}" style="width: 45px; height: 45px; border-radius: 6px; object-fit: cover;"></td>
                <td><strong>${p.name}</strong></td>
                <td>${formatRupiah(p.price)}</td>
                <td>${p.sold}</td>
                <td>⭐ ${p.rating}</td>
                <td style="text-align: center;">
                    <button style="background: #f39c12; color: #fff; border: none; padding: 5px 8px; border-radius: 4px; cursor: pointer; font-size: 0.75rem; margin-bottom: 4px;" onclick="editProductDesc(${p.id})">
                        <i class="fas fa-edit"></i> Edit Deskripsi
                    </button>
                    <button style="background: #e63946; color: #fff; border: none; padding: 5px 8px; border-radius: 4px; cursor: pointer; font-size: 0.75rem;" onclick="deleteAdminProduct(${p.id})">
                        <i class="fas fa-trash"></i> Hapus
                    </button>
                </td>
            </tr>
        `;
    });
}

function editProductDesc(id) {
    products = getStoredProducts();
    const product = products.find(p => p.id === id);
    if (!product) return;

    const newDesc = prompt("Masukkan deskripsi produk baru untuk: " + product.name, product.desc);
    if (newDesc !== null && newDesc.trim() !== "") {
        product.desc = newDesc.trim();
        saveProducts(products);
        renderAdminProductTable();
        alert("Deskripsi produk berhasil diperbarui!");
    }
}

function deleteAdminProduct(id) {
    if (confirm("Apakah kamu yakin ingin menghapus produk ini dari toko?")) {
        products = getStoredProducts().filter(p => p.id !== id);
        saveProducts(products);
        renderAdminProductTable();
        alert("Produk berhasil dihapus!");
    }
}

/* REVISI SUPPLIER: Tambah, Edit & Hapus Supplier */
function handleAdminAddSupplier(e) {
    e.preventDefault();
    const name = document.getElementById('admin-sup-name').value;
    const phone = document.getElementById('admin-sup-phone').value;
    const address = document.getElementById('admin-sup-address').value;
    const category = document.getElementById('admin-sup-category').value;

    const newSupplier = {
        id: Date.now(),
        name: name,
        phone: phone,
        address: address,
        category: category
    };

    suppliers = getStoredSuppliers();
    suppliers.unshift(newSupplier);
    saveSuppliers(suppliers);

    document.getElementById('admin-sup-name').value = '';
    document.getElementById('admin-sup-phone').value = '';
    document.getElementById('admin-sup-address').value = '';
    document.getElementById('admin-sup-category').value = '';

    alert("Data supplier berhasil ditambahkan!");
    renderAdminSupplierTable();
}

function renderAdminSupplierTable() {
    suppliers = getStoredSuppliers();
    const tbody = document.getElementById('admin-supplier-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';
    if (suppliers.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;">Belum ada supplier tersimpan.</td></tr>`;
        return;
    }

    suppliers.forEach((s, idx) => {
        tbody.innerHTML += `
            <tr>
                <td>${idx + 1}</td>
                <td><strong>${s.name}</strong></td>
                <td>${s.phone}</td>
                <td>${s.category}</td>
                <td>${s.address}</td>
                <td style="text-align: center;">
                    <button style="background: #f39c12; color: #fff; border: none; padding: 5px 8px; border-radius: 4px; cursor: pointer; font-size: 0.75rem; margin-bottom: 4px;" onclick="editSupplier(${s.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button style="background: #e63946; color: #fff; border: none; padding: 5px 8px; border-radius: 4px; cursor: pointer; font-size: 0.75rem;" onclick="deleteSupplier(${s.id})">
                        <i class="fas fa-trash"></i> Hapus
                    </button>
                </td>
            </tr>
        `;
    });
}

function editSupplier(id) {
    suppliers = getStoredSuppliers();
    const sup = suppliers.find(s => s.id === id);
    if (!sup) return;

    const newName = prompt("Ubah Nama Supplier / PT:", sup.name);
    if (newName === null) return;
    const newPhone = prompt("Ubah No Telepon:", sup.phone);
    if (newPhone === null) return;
    const newCategory = prompt("Ubah Kategori Produk:", sup.category);
    if (newCategory === null) return;
    const newAddress = prompt("Ubah Alamat Supplier:", sup.address);
    if (newAddress === null) return;

    sup.name = newName.trim() || sup.name;
    sup.phone = newPhone.trim() || sup.phone;
    sup.category = newCategory.trim() || sup.category;
    sup.address = newAddress.trim() || sup.address;

    saveSuppliers(suppliers);
    renderAdminSupplierTable();
    alert("Data supplier berhasil diperbarui!");
}

function deleteSupplier(id) {
    if (confirm("Apakah kamu yakin ingin menghapus supplier ini?")) {
        suppliers = getStoredSuppliers().filter(s => s.id !== id);
        saveSuppliers(suppliers);
        renderAdminSupplierTable();
        alert("Supplier berhasil dihapus!");
    }
}

function renderAdminPricesTable() {
    products = getStoredProducts();
    const tbody = document.getElementById('admin-prices-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';
    products.forEach(p => {
        tbody.innerHTML += `
            <tr>
                <td><img src="${p.image}" style="width: 40px; height: 40px; border-radius: 6px; object-fit: cover;"></td>
                <td><strong>${p.name}</strong></td>
                <td style="color: var(--dark-green); font-weight: bold;">${formatRupiah(p.price)}</td>
                <td>
                    <button style="background: var(--primary-green); color: #fff; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.75rem;" onclick="updateProductPrice(${p.id})">
                        <i class="fas fa-coins"></i> Ubah Harga
                    </button>
                </td>
            </tr>
        `;
    });
}

function updateProductPrice(id) {
    products = getStoredProducts();
    const product = products.find(p => p.id === id);
    if (!product) return;

    const newPrice = prompt("Masukkan harga baru (Rp) untuk " + product.name, product.price);
    if (newPrice !== null && !isNaN(newPrice) && parseInt(newPrice) >= 1000) {
        product.price = parseInt(newPrice);
        saveProducts(products);
        renderAdminPricesTable();
        alert("Harga produk berhasil diperbarui!");
    }
}

/* REVISI PEMBELIAN ADMIN: Mengubah Status Pengiriman dan Melihat Identitas Pembeli */
function renderAdminOrdersTable() {
    myOrders = getStoredOrders();
    const tbody = document.getElementById('admin-orders-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';
    if (myOrders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;">Belum ada transaksi pembelian masuk.</td></tr>`;
        return;
    }

    myOrders.forEach((o, index) => {
        let itemsStr = o.items.map(i => i.name).join(', ');
        let buyerName = o.buyerName || userProfile.username;
        let buyerPhone = o.buyerPhone || userProfile.phone;
        let buyerAddress = o.buyerAddress || userProfile.address;

        tbody.innerHTML += `
            <tr>
                <td><strong>#${o.id}</strong></td>
                <td>${o.date || '-'}</td>
                <td>
                    <strong>${buyerName}</strong><br>
                    <small style="color:#666;">${buyerPhone}</small><br>
                    <small style="color:#888;">${buyerAddress}</small>
                </td>
                <td>${itemsStr}</td>
                <td style="color: var(--dark-green); font-weight: bold;">${formatRupiah(o.total)} (${o.paymentMethod || 'COD'})</td>
                <td>
                    <span style="font-weight:bold; color:var(--dark-green);">${o.status}</span>
                </td>
                <td>
                    <select onchange="updateOrderStatus(${index}, this.value)" style="padding: 4px 8px; border-radius: 6px; font-size: 0.8rem; border: 1px solid var(--primary-green); cursor: pointer;">
                        <option value="Dikemas" ${o.status === 'Dikemas' ? 'selected' : ''}>Dikemas</option>
                        <option value="Dikirim" ${o.status === 'Dikirim' ? 'selected' : ''}>Dikirim</option>
                        <option value="Selesai" ${o.status === 'Selesai' ? 'selected' : ''}>Selesai</option>
                    </select>
                </td>
            </tr>
        `;
    });
}

function updateOrderStatus(orderIndex, newStatus) {
    myOrders = getStoredOrders();
    if (myOrders[orderIndex]) {
        myOrders[orderIndex].status = newStatus;
        saveOrders(myOrders);
        alert("Status pesanan #" + myOrders[orderIndex].id + " berhasil diubah menjadi: " + newStatus);
        renderAdminOrdersTable();
    }
}

function showReportType(type) {
    const titleEl = document.getElementById('report-title');
    const tbody = document.getElementById('report-table-body');
    if (!tbody || !titleEl) return;

    myOrders = getStoredOrders();

    if (type === 'harian') {
        titleEl.innerText = "Laporan Penjualan Harian";
        tbody.innerHTML = `
            <tr>
                <td>Hari Ini (${new Date().toLocaleDateString('id-ID')})</td>
                <td>${myOrders.length} Transaksi</td>
                <td>${formatRupiah(myOrders.reduce((s, o) => s + o.total, 0))}</td>
            </tr>
        `;
    } else if (type === 'bulanan') {
        titleEl.innerText = "Laporan Penjualan Bulanan";
        tbody.innerHTML = `
            <tr>
                <td>Bulan Ini (Agustus)</td>
                <td>${myOrders.length + 28} Transaksi</td>
                <td>${formatRupiah(myOrders.reduce((s, o) => s + o.total, 0) + 64500000)}</td>
            </tr>
        `;
    } else if (type === 'tahunan') {
        titleEl.innerText = "Laporan Penjualan Tahunan";
        tbody.innerHTML = `
            <tr>
                <td>Tahun Ini (2026)</td>
                <td>320 Transaksi</td>
                <td>Rp 785.400.000</td>
            </tr>
        `;
    }
}

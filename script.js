// ===== VEHICLE DATA =====
const vehicles = {
    bmw: [
        {
            id: 'bmw 7 Series',
            brand: 'BMW',
            model: '7 Series',
            name: 'Regalia Shadow Strike',
            description: 'BMW, exclusive by Regalia: This BMW combines legendary German performance with bespoke luxury. Every detail, from the engine to the interior finishes, reflects precision, refinement, and Regalia exclusivity. More than a car, it is a driving experience that blends power and sophistication.',
            specs: [
                'Widebody Carbon Kit',
                'Forged 21" Gold Wheels',
                'Lowered Sport Suspension',
                'Custom LED Lighting',
                'Diamond Stitched Interior',
                'Gold Accent Package'
            ],
            images: {
                front: 'https://i.postimg.cc/gJhVP72s/image.png',
                side: 'https://i.postimg.cc/ZR76py5Y/image.png',
                rear: 'https://i.postimg.cc/g0CP37R4/image.png',
                gallery: 'https://i.postimg.cc/gJhVP72s/image.png'
            }
        },
        {
            id: 'bmw XM',
            brand: 'BMW',
            model: 'XM',
            name: 'Regalia Phantom Edge',
            description: 'BMW signed by Regalia: bold performance, refined luxury, and precision engineering in every line.',
            specs: [
                'Carbon Widebody Kit',
                'Forged 20" Gold Wheels',
                'Coilover Suspension',
                'Custom Exhaust System',
                'Race Seats with Gold Stitching',
                'Carbon Interior Trim'
            ],
            images: {
                front: 'https://i.postimg.cc/QMDm2kpP/image.png',
                side: 'https://i.postimg.cc/XYs2QXqJ/Whats-App-Image-2026-02-21-at-11-25-01.jpg',
                rear: 'https://i.postimg.cc/Znv6BC8x/image.png',
                gallery: 'https://i.postimg.cc/QMDm2kpP/image.png'
            }
        }
    ],
    ferrari: [
        {
            id: 'ferrari 812',
            brand: 'Ferrari',
            model: '812',
            name: 'Regalia Dominus ',
            description: 'Ferrari presented by Regalia: extreme power, breathtaking speed, and precision engineering united in an exceptional creation.',
            specs: [
                'Carbon Widebody Kit',
                'Forged 21" Gold Wheels',
                'Performance Exhaust',
                'Lowered Suspension',
                'Custom Leather Interior',
                'Gold Badge Package'
            ],
            images: {
                front: 'https://i.postimg.cc/bwMrtRRL/image.png',
                side: 'https://i.postimg.cc/5052DWMY/image.png',
                rear: 'https://i.postimg.cc/wBfCvWcT/image.png',
                gallery: 'https://i.postimg.cc/bwMrtRRL/image.png'
            }
        },
        {
            id: 'ferrari Portofino ',
            brand: 'Ferrari',
            model: 'Portofino',
            name: 'Regalia R-Sport',
            description: 'Ferrari reimagined by Regalia: extreme power, breathtaking speed, and precision engineering, featuring a slightly raised chassis design that enhances its presence while preserving the brand’s iconic DNA.',
            specs: [
                'Widebody Carbon Kit',
                'Forged 20" Gold Wheels',
                'Sport Suspension',
                'Titanium Exhaust',
                'Custom Interior Trim',
                'Gold Accent Package'
            ],
            images: {
                front: 'https://i.postimg.cc/rmDs7kbp/image.png',
                side: 'https://i.postimg.cc/qRd0x6KP/Whats-App-Image-2026-02-21-at-14-46-59.jpg',
                rear: 'https://i.postimg.cc/W3dm8xwy/image.png',
                gallery: 'https://i.postimg.cc/rmDs7kbp/image.png'
            }
        }
    ],
    lamborghini: [
        {
            id: 'lamborghini Initiate for Esteban Ocon',
            brand: 'Lamborghini',
            model: 'Initiate for Esteban Ocon',
            name: 'Regalia Xyverra',
            description: 'Lamborghini by Regalia: This creation embodies the perfect fusion of Italian power and exclusive elegance. Its engine delivers extreme performance, its sculptural silhouette captivates the eye, and its bespoke finish reflects Regalia’s unique craftsmanship. More than a car, it is a statement of prestige and character.',
            specs: [
                'Extreme Widebody Kit',
                'Forged 21" Gold Wheels',
                'Adjustable Suspension',
                'Custom Exhaust System',
                'Diamond Stitched Interior',
                'Full Carbon Package'
            ],
            images: {
                front: 'https://i.postimg.cc/PrdjrVB2/image.png',
                side: 'https://i.postimg.cc/FKLqx0MH/image.png',
                rear: 'https://i.postimg.cc/CLrQTvYB/image.png',
                gallery: 'https://i.postimg.cc/PrdjrVB2/image.png'
                        }
        },
        {
            id: 'lamborghini Venatus Coupé EVO C',
            brand: 'Lamborghini',
            model: 'Venatus Coupé EVO C',
            name: 'Regalia Aventus Royale',
            description: 'Lamborghini by Regalia6The Art of Performance: This Lamborghini combines raw power with refined design. Every line and curve is crafted to captivate, and every detail reflects Regalia’s exclusivity and expertise. Behind the wheel, it is not just driving-it is an experience of prestige and absolute mastery.',
            specs: [
                'Widebody Carbon Kit',
                'Forged 23" Gold Wheels',
                'Air Suspension System',
                'Custom LED Lighting',
                'Premium Leather Interior',
                'Gold Trim Package'
            ],
            images: {
                front: 'https://i.postimg.cc/7hSF90dd/image.png',
                side: 'https://i.postimg.cc/6qwfNK2F/image.png',
                rear: 'https://i.postimg.cc/ncFGRHtD/image.png',
                gallery: 'https://i.postimg.cc/7hSF90dd/image.png'
            }
        }
    ]
};

// ===== GLOBAL STATE =====
let currentPage = 'home';
let currentBrand = '';
let currentVehicle = null;

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
    initSplashScreen();
    initNavigation();
    initSlider();
    initFindModel();
    initMobileMenu();
});

// ===== SPLASH SCREEN =====
function initSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    const header = document.getElementById('header');
    
    setTimeout(() => {
        splashScreen.classList.remove('active');
        header.style.opacity = '1';
    }, 3500);
}

// ===== NAVIGATION =====
function initNavigation() {
    // Desktop navigation
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            const brand = link.getAttribute('data-brand');
            
            if (brand) {
                navigateTo(page, brand);
            } else {
                navigateTo(page);
            }
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('nav-mobile');
            const mobileBtn = document.getElementById('mobile-menu-btn');
            mobileMenu.classList.remove('active');
            mobileBtn.classList.remove('active');
        });
    });

    // Back button
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            navigateTo('models', currentBrand);
        });
    }
}

function navigateTo(page, brand = '') {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show selected page
    const selectedPage = document.getElementById(`page-${page}`);
    if (selectedPage) {
        selectedPage.classList.add('active');
        currentPage = page;
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Load page specific content
        if (page === 'models' && brand) {
            currentBrand = brand;
            loadModelsPage(brand);
        }
    }
}

// ===== MODELS PAGE =====
function loadModelsPage(brand) {
    const brandTitle = document.getElementById('models-brand-title');
    const brandDescription = document.getElementById('models-description');
    const modelsGrid = document.getElementById('models-grid');
    
    brandTitle.textContent = brand.toUpperCase();
    brandDescription.textContent = `Discover our exclusive ${brand.toUpperCase()} transformations`;
    
    const brandVehicles = vehicles[brand.toLowerCase()];
    modelsGrid.innerHTML = '';
    
    brandVehicles.forEach(vehicle => {
        const card = document.createElement('div');
        card.className = 'model-card';
        card.innerHTML = `
            <div class="model-image">
                <img src="${vehicle.images.gallery}" alt="${vehicle.name}">
                <div class="model-overlay"></div>
                <div class="model-image-border"></div>
            </div>
            <p class="model-model">${vehicle.model}</p>
            <h3 class="model-name">${vehicle.name}</h3>
            <p class="model-desc">${vehicle.description}</p>
        `;
        
        card.addEventListener('click', () => {
            loadModelDetail(vehicle);
        });
        
        modelsGrid.appendChild(card);
    });
}

// ===== MODEL DETAIL PAGE =====
function loadModelDetail(vehicle) {
    currentVehicle = vehicle;
    
    document.getElementById('detail-brand').textContent = `${vehicle.brand} ${vehicle.model}`;
    document.getElementById('detail-title').textContent = vehicle.name;
    document.getElementById('detail-description').textContent = vehicle.description;
    
    // Set main image
    const mainImg = document.getElementById('detail-img');
    mainImg.src = vehicle.images.front;
    mainImg.alt = vehicle.name;
    
    // Set view thumbnails
    const views = document.querySelectorAll('.view-thumb');
    views[0].querySelector('img').src = vehicle.images.front;
    views[1].querySelector('img').src = vehicle.images.side;
    views[2].querySelector('img').src = vehicle.images.rear;
    
    // View thumbnail click handlers
    views.forEach(view => {
        view.addEventListener('click', () => {
            views.forEach(v => v.classList.remove('active'));
            view.classList.add('active');
            
            const viewType = view.getAttribute('data-view');
            mainImg.src = vehicle.images[viewType];
        });
    });
    
    // Set specs
    const specsList = document.getElementById('specs-list');
    specsList.innerHTML = '';
    
    vehicle.specs.forEach(spec => {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `
            <div class="spec-icon">✓</div>
            <p>${spec}</p>
        `;
        specsList.appendChild(specItem);
    });
    
    navigateTo('model-detail');
}

// ===== SLIDER =====
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });
    
    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopAutoSlide();
            currentSlide = index;
            showSlide(currentSlide);
            startAutoSlide();
        });
    });
    
    startAutoSlide();
}

// ===== FIND MODEL =====
function initFindModel() {
    const selectBrand = document.getElementById('select-brand');
    const selectModel = document.getElementById('select-model');
    const searchBtn = document.getElementById('search-btn');
    
    selectBrand.addEventListener('change', () => {
        const brand = selectBrand.value;
        
        if (brand) {
            selectModel.disabled = false;
            selectModel.innerHTML = '<option value="">Select Model</option>';
            
            const brandVehicles = vehicles[brand];
            brandVehicles.forEach(vehicle => {
                const option = document.createElement('option');
                option.value = vehicle.id;
                option.textContent = vehicle.model;
                selectModel.appendChild(option);
            });
        } else {
            selectModel.disabled = true;
            selectModel.innerHTML = '<option value="">Select Model</option>';
            searchBtn.disabled = true;
        }
    });
    
    selectModel.addEventListener('change', () => {
        if (selectModel.value) {
            searchBtn.disabled = false;
        } else {
            searchBtn.disabled = true;
        }
    });
    
    searchBtn.addEventListener('click', () => {
        const brand = selectBrand.value;
        const vehicleId = selectModel.value;
        
        if (brand && vehicleId) {
            const vehicle = vehicles[brand].find(v => v.id === vehicleId);
            if (vehicle) {
                loadModelDetail(vehicle);
            }
        }
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('nav-mobile');
    const dropdownToggle = document.querySelector('.dropdown-toggle-mobile');
    const dropdownMenu = document.querySelector('.dropdown-menu-mobile');
    
    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', () => {
            dropdownMenu.classList.toggle('active');
        });
    }
}

// ===== NEWS CARDS CLICK =====
document.addEventListener('DOMContentLoaded', () => {
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
        card.addEventListener('click', () => {
            const vehicleId = card.getAttribute('data-vehicle');
            const [brand, model] = vehicleId.split('-');
            
            let vehicle;
            if (brand === 'bmw') {
                vehicle = vehicles.bmw.find(v => v.id === vehicleId);
            } else if (brand === 'ferrari') {
                vehicle = vehicles.ferrari.find(v => v.id === vehicleId);
            } else if (brand === 'lamborghini') {
                vehicle = vehicles.lamborghini.find(v => v.id === vehicleId);
            }
            
            if (vehicle) {
                loadModelDetail(vehicle);
            }
        });
    });
});

// ===== CONTACT FORM =====
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            console.log('Form submitted:', data);
            
            alert('Thank you for your message! We will contact you soon.');
            contactForm.reset();
        });
    }
});

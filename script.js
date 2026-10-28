// ============================================================
// عودة للعقار — Script كامل
// يتضمن: بيانات العقارات + Hero + Bento Grid + معاينة + خريطة + فلترة + مشاركة
// ============================================================

// ============================================================
// بيانات العقارات
// ============================================================
const propertiesData = [
    {
        id: 1, code: "J101",
        title: "فيلا فاخرة بحي الربيع",
        description: "فيلا فاخرة بمساحة 400م²، 4 غرف نوم، 3 حمامات، مطبخ راقي، صالة واسعة، حديقة خاصة، مواقف سيارات. الفيلا مجهزة بأحدث التقنيات وتتميز بتصميم عصري وأنيق يناسب العائلات الراقية.",
        price: "2,500,000 ريال", type: "للبيع", category: "فلل", area: 400,
        location: "حي الربيع، الرياض", coordinates: [24.7136, 46.6753],
        specs: [
            { icon: "fas fa-bed", value: "4", label: "غرف نوم" },
            { icon: "fas fa-bath", value: "3", label: "حمامات" },
            { icon: "fas fa-vector-square", value: "400", label: "م²" },
            { icon: "fas fa-car", value: "3", label: "مواقف" }
        ],
        features: ["حديقة خاصة", "مسبح", "نظام أمني", "تكييف مركزي"],
        images: [
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        agent: { name: "محمد أحمد", phone: "+966500000000" },
        date: "2023-10-15"
    },
    {
        id: 2, code: "J102",
        title: "شقة راقية بحي النخيل",
        description: "شقة راقية بمساحة 180م²، 3 غرف نوم، 2 حمام، صالة واسعة، مطبخ مفتوح، إطلالة جميلة، خدمات متكاملة. الشقة مجهزة بتكييف مركزي وتطل على مشاهد خلابة للمدينة.",
        price: "4,500 ريال/شهرياً", type: "للإيجار", category: "شقق", area: 180,
        location: "حي النخيل، الرياض", coordinates: [24.7743, 46.7384],
        specs: [
            { icon: "fas fa-bed", value: "3", label: "غرف نوم" },
            { icon: "fas fa-bath", value: "2", label: "حمامات" },
            { icon: "fas fa-vector-square", value: "180", label: "م²" },
            { icon: "fas fa-building", value: "ط 12", label: "موقع" }
        ],
        features: ["إطلالة بانورامية", "نادي صحي", "مسبح مشترك", "مواقف تحت الأرض"],
        images: [
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        agent: { name: "فاطمة السديري", phone: "+966511111111" },
        date: "2023-10-10"
    },
    {
        id: 3, code: "J103",
        title: "أرض سكنية بحي الورود",
        description: "أرض سكنية بمساحة 600م²، موقع مميز، قريبة من الخدمات، تصريح بناء متوفر، فرصة استثمارية رائعة. الأرض تقع في منطقة سكنية هادئة وبها جميع الخدمات القريبة.",
        price: "1,200,000 ريال", type: "للبيع", category: "أراضي", area: 600,
        location: "حي الورود، الرياض", coordinates: [24.7520, 46.6820],
        specs: [
            { icon: "fas fa-map-marker-alt", value: "مميز", label: "الموقع" },
            { icon: "fas fa-vector-square", value: "600", label: "م²" },
            { icon: "fas fa-building", value: "متوفر", label: "تصريح" },
            { icon: "fas fa-road", value: "30", label: "م واجهة" }
        ],
        features: ["موقع استراتيجي", "قريبة من الخدمات", "تصريح بناء", "فرصة استثمارية"],
        images: [
            "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        agent: { name: "خالد الحربي", phone: "+966522222222" },
        date: "2023-10-05"
    },
    {
        id: 4, code: "J104",
        title: "شقة دوبلكس بحي العليا",
        description: "شقة دوبلكس فاخرة بمساحة 220م²، 3 غرف نوم، 3 حمامات، صالة ضيوف، مطبخ مجهز، بلكونة واسعة. الشقة في موقع مميز وتطل على شارع رئيسي.",
        price: "3,200,000 ريال", type: "للبيع", category: "شقق", area: 220,
        location: "حي العليا، الرياض", coordinates: [24.6900, 46.6850],
        specs: [
            { icon: "fas fa-bed", value: "3", label: "غرف نوم" },
            { icon: "fas fa-bath", value: "3", label: "حمامات" },
            { icon: "fas fa-vector-square", value: "220", label: "م²" },
            { icon: "fas fa-home", value: "دوبلكس", label: "النوع" }
        ],
        features: ["دوبلكس", "بلكونة واسعة", "مواقف خاصة", "نظام أمني"],
        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        agent: { name: "نورة القحطاني", phone: "+966533333333" },
        date: "2023-10-01"
    },
    {
        id: 5, code: "J105",
        title: "مشروع سكني بحي المروج",
        description: "مشروع سكني متكامل يضم 20 فيلا فاخرة، مساحات تبدأ من 350م²، تصميم عصري، خدمات متكاملة، موقع استراتيجي قريب من الخدمات الأساسية.",
        price: "من 1,800,000 ريال", type: "للبيع", category: "مشاريع", area: 350,
        location: "حي المروج، الرياض", coordinates: [24.7600, 46.7000],
        specs: [
            { icon: "fas fa-home", value: "20", label: "فيلا" },
            { icon: "fas fa-vector-square", value: "350+", label: "م²" },
            { icon: "fas fa-calendar", value: "2024", label: "التسليم" },
            { icon: "fas fa-building", value: "مشروع", label: "النوع" }
        ],
        features: ["تصميم عصري", "خدمات متكاملة", "موقع استراتيجي", "مساحات خضراء"],
        images: [
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        agent: { name: "أحمد العتيبي", phone: "+966544444444" },
        date: "2023-09-28"
    },
    {
        id: 6, code: "J106",
        title: "شقة مفروشة بحي العقيق",
        description: "شقة مفروشة بتصميم عصري، 2 غرفة نوم، حمام، مطبخ مفتوح، صالة معيشة، خدمة انترنت مجانية، موقع مميز قريب من المرافق التجارية.",
        price: "3,200 ريال/شهرياً", type: "للإيجار", category: "شقق", area: 120,
        location: "حي العقيق، الرياض", coordinates: [24.7800, 46.6700],
        specs: [
            { icon: "fas fa-bed", value: "2", label: "غرف نوم" },
            { icon: "fas fa-bath", value: "1", label: "حمام" },
            { icon: "fas fa-vector-square", value: "120", label: "م²" },
            { icon: "fas fa-wifi", value: "مجاني", label: "انترنت" }
        ],
        features: ["مفروشة", "انترنت مجاني", "تكييف مركزي", "مواقف سيارات"],
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        agent: { name: "سارة الغامدي", phone: "+966555555555" },
        date: "2023-09-25"
    }
];

// ============================================================
// عناصر DOM
// ============================================================
const propertiesContainer = document.getElementById('properties-container');
const heroContainer = document.getElementById('hero-container');
const resultsCount = document.getElementById('results-count');
const previewOverlay = document.querySelector('.property-preview-overlay');
const mapOverlay = document.querySelector('.map-overlay');
const closePreview = document.querySelector('.close-preview');
const closeMap = document.querySelector('.close-map');
const previewContent = document.querySelector('.preview-content');
const propertyMap = document.getElementById('property-map');
const filterModal = document.querySelector('.filter-modal');
const closeFilter = document.querySelector('.close-filter');
const filterModalBtn = document.getElementById('filter-modal-btn');
const filterApplyBtn = document.getElementById('apply-filters');
const filterResetBtn = document.getElementById('reset-filters');
const previewFavoriteBtn = document.getElementById('preview-favorite-btn');
const searchInput = document.getElementById('search-input');
const searchClearBtn = document.getElementById('search-clear');
const shareModal = document.querySelector('.share-modal');
const closeShare = document.querySelector('.close-share');

// ============================================================
// الحالة
// ============================================================
let currentProperties = [...propertiesData];
let map;
let currentPropertyMarker;
let currentPreviewProperty = null;
let currentImageIndex = 0;

// ============================================================
// التهيئة
// ============================================================
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    renderProperties(currentProperties);
    initEventListeners();
    initFilterButtons();
}

// ============================================================
// مستمعو الأحداث
// ============================================================
function initEventListeners() {
    if (closePreview) closePreview.addEventListener('click', closePropertyPreview);
    if (closeMap) closeMap.addEventListener('click', closePropertyMap);
    if (closeFilter) closeFilter.addEventListener('click', closeFilterModal);
    if (filterModalBtn) filterModalBtn.addEventListener('click', openFilterModal);
    if (filterApplyBtn) filterApplyBtn.addEventListener('click', applyFilters);
    if (filterResetBtn) filterResetBtn.addEventListener('click', resetFilters);
    if (previewFavoriteBtn) previewFavoriteBtn.addEventListener('click', togglePreviewFavorite);
    if (searchInput) searchInput.addEventListener('input', handleSearch);
    if (searchClearBtn) searchClearBtn.addEventListener('click', clearSearch);
    if (closeShare) closeShare.addEventListener('click', closeShareModal);

    if (previewOverlay) {
        previewOverlay.addEventListener('click', function (e) {
            if (e.target === previewOverlay) closePropertyPreview();
        });
    }

    if (mapOverlay) {
        mapOverlay.addEventListener('click', function (e) {
            if (e.target === mapOverlay) closePropertyMap();
        });
    }

    if (filterModal) {
        filterModal.addEventListener('click', function (e) {
            if (e.target === filterModal) closeFilterModal();
        });
    }

    if (shareModal) {
        shareModal.addEventListener('click', function (e) {
            if (e.target === shareModal) closeShareModal();
        });
    }

    const shareOptions = document.querySelectorAll('.share-option');
    shareOptions.forEach(option => {
        option.addEventListener('click', function () {
            const type = this.classList[1].split('-')[0];
            shareProperty(type);
        });
    });
}

// ============================================================
// أزرار الفلترة السريعة
// ============================================================
function initFilterButtons() {
    const filterButtons = document.querySelectorAll('.filters-bar .filter-btn[data-filter]');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterByCategory(this.getAttribute('data-filter'));
        });
    });
}

function filterByCategory(category) {
    if (category === 'all') {
        currentProperties = [...propertiesData];
    } else {
        currentProperties = propertiesData.filter(p => p.category === category);
    }
    renderProperties(currentProperties);
}

// ============================================================
// البحث
// ============================================================
function handleSearch() {
    const term = searchInput.value.trim().toLowerCase();
    searchClearBtn.classList.toggle('active', term.length > 0);

    if (term.length < 2) {
        currentProperties = [...propertiesData];
        renderProperties(currentProperties);
        return;
    }

    currentProperties = propertiesData.filter(p =>
        p.title.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.location.toLowerCase().includes(term) ||
        p.code.toLowerCase().includes(term)
    );
    renderProperties(currentProperties);
}

function clearSearch() {
    searchInput.value = '';
    searchClearBtn.classList.remove('active');
    currentProperties = [...propertiesData];
    renderProperties(currentProperties);
}

// ============================================================
// العرض — Hero + Bento Grid
// ============================================================
function renderProperties(properties) {
    // تحديث العداد
    if (resultsCount) {
        resultsCount.textContent = properties.length === 0
            ? 'لا توجد نتائج'
            : `${properties.length} ${properties.length === 1 ? 'عقار' : 'عقارات'}`;
    }

    // حالة فارغة
    if (properties.length === 0) {
        if (heroContainer) heroContainer.innerHTML = '';
        propertiesContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>لا توجد نتائج</h3>
                <p>لم نتمكن من العثور على عقارات تطابق معايير البحث</p>
                <button class="reset-search-btn" onclick="resetFilters()">إعادة تعيين البحث</button>
            </div>
        `;
        return;
    }

    // ⭐ الأول = الهيرو، الباقي = شبكة Bento
    const [first, ...rest] = properties;

    if (heroContainer) {
        heroContainer.innerHTML = createHeroMarkup(first);
        const heroCard = heroContainer.querySelector('.hero-card');
        if (heroCard) {
            heroCard.addEventListener('click', () => openPropertyPreview(first.id));
        }
    }

    propertiesContainer.innerHTML = '';
    rest.forEach((property, index) => {
        const card = createPropertyCard(property);
        card.style.animationDelay = `${index * 0.06}s`;
        propertiesContainer.appendChild(card);
    });
}

// ============================================================
// بناء الهيرو
// ============================================================
function createHeroMarkup(property) {
    const typeLabel = property.type === 'للبيع' ? 'معروض للبيع' : 'متاح للإيجار';
    return `
        <article class="hero-card" data-id="${property.id}">
            <div class="hero-image">
                <img src="${property.images[0]}" alt="${property.title}">
                <div class="hero-overlay"></div>
            </div>
            <div class="hero-badge">
                ✨ مميز هذا الأسبوع
            </div>
            <div class="hero-content">
                <div class="hero-meta-top">
                    <span class="hero-type-tag">${typeLabel}</span>
                    <span class="hero-code-tag">${property.code}</span>
                </div>
                <h1 class="hero-title">${property.title}</h1>
                <div class="hero-info">
                    <span class="hero-location">
                        <i class="fas fa-map-marker-alt"></i> ${property.location}
                    </span>
                    <span class="hero-price">${property.price}</span>
                </div>
                <button class="hero-cta">
                    عرض التفاصيل <i class="fas fa-arrow-left"></i>
                </button>
            </div>
        </article>
    `;
}

// ============================================================
// بناء بطاقة عقار
// ============================================================
function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.setAttribute('data-id', property.id);
    card.setAttribute('data-category', property.category);

    card.innerHTML = `
        <div class="property-image">
            <img src="${property.images[0]}" alt="${property.title}" loading="lazy">
            <div class="property-badge" data-type="${property.type}">${property.type}</div>
            <div class="property-code">${property.code}</div>
            <div class="property-actions-top">
                <button class="property-action-top property-favorite" aria-label="مفضلة">
                    <i class="far fa-heart"></i>
                </button>
                <button class="property-action-top property-share" aria-label="مشاركة">
                    <i class="fas fa-share-alt"></i>
                </button>
            </div>
        </div>

        <div class="property-content">
            <div class="property-header">
                <h3 class="property-title">${property.title}</h3>
                <div class="property-price">${property.price}</div>
            </div>

            <div class="property-location">
                <i class="fas fa-map-marker-alt"></i>
                <span>${property.location}</span>
            </div>

            <p class="property-description">${property.description}</p>

            <div class="property-specs">
                ${property.specs.map(spec => `
                    <div class="spec-item">
                        <div class="spec-icon">
                            <i class="${spec.icon}"></i>
                        </div>
                        <div class="spec-value">${spec.value}</div>
                        <div class="spec-label">${spec.label}</div>
                    </div>
                `).join('')}
            </div>

            <div class="property-footer">
                <div class="property-meta">
                    <i class="far fa-clock"></i>
                    <span>${formatDate(property.date)}</span>
                </div>
                <div class="property-actions">
                    <button class="property-action-btn share-btn" aria-label="مشاركة">
                        <i class="fas fa-share-alt"></i>
                    </button>
                    <button class="property-action-btn visit-btn" aria-label="الخريطة">
                        <i class="fas fa-map-marker-alt"></i>
                    </button>
                    <button class="property-action-btn preview-btn" aria-label="معاينة">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

    // نقرة على البطاقة
    card.addEventListener('click', function (e) {
        if (!e.target.closest('.property-actions') && !e.target.closest('.property-actions-top')) {
            openPropertyPreview(property.id);
        }
    });

    // المفضلة
    const favoriteBtn = card.querySelector('.property-favorite');
    favoriteBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleFavorite(favoriteBtn);
    });

    // المشاركة العلوية
    const shareTopBtn = card.querySelector('.property-share');
    shareTopBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        openShareModal(property);
    });

    // المعاينة
    const previewBtn = card.querySelector('.preview-btn');
    previewBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        openPropertyPreview(property.id);
    });

    // الخريطة
    const visitBtn = card.querySelector('.visit-btn');
    visitBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        openPropertyMap(property.id);
    });

    // المشاركة السفلية
    const shareBottomBtn = card.querySelector('.share-btn');
    shareBottomBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        openShareModal(property);
    });

    return card;
}

// ============================================================
// المعاينة
// ============================================================
function openPropertyPreview(propertyId) {
    const property = propertiesData.find(p => p.id === propertyId);
    if (!property) return;

    currentPreviewProperty = property;
    currentImageIndex = 0;

    previewContent.innerHTML = generatePreviewContent(property);

    if (property.images.length > 1) {
        initGalleryNavigation(property);
    }

    const previewVisitBtn = document.querySelector('.preview-visit-btn');
    const previewWhatsappBtn = document.querySelector('.preview-whatsapp-btn');

    if (previewVisitBtn) {
        previewVisitBtn.addEventListener('click', function () {
            closePropertyPreview();
            setTimeout(() => openPropertyMap(property.id), 300);
        });
    }

    if (previewWhatsappBtn) {
        previewWhatsappBtn.addEventListener('click', function () {
            contactViaWhatsapp(property);
        });
    }

    if (previewFavoriteBtn) {
        previewFavoriteBtn.classList.remove('active');
        const favIcon = previewFavoriteBtn.querySelector('i');
        favIcon.classList.remove('fas');
        favIcon.classList.add('far');
    }

    previewOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePropertyPreview() {
    previewOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentPreviewProperty = null;
}

// ============================================================
// الخريطة
// ============================================================
function openPropertyMap(propertyId) {
    const property = propertiesData.find(p => p.id === propertyId);
    if (!property) return;

    if (!map) {
        initMap(property.coordinates);
    } else {
        map.setView(property.coordinates, 16);
    }

    if (currentPropertyMarker) {
        map.removeLayer(currentPropertyMarker);
    }

    currentPropertyMarker = L.marker(property.coordinates)
        .addTo(map)
        .bindPopup(`
            <div class="map-popup">
                <img src="${property.images[0]}" alt="${property.title}" style="width: 130px; height: 90px; object-fit: cover; border-radius: 8px;">
                <h3 style="margin: 8px 0 4px; font-size: 13px; color: #F2EEF5; font-family: Tajawal, sans-serif; font-weight: 700;">${property.title}</h3>
                <p style="margin: 0; color: #F25C93; font-weight: 800; font-size: 13px; font-family: Tajawal, sans-serif;">${property.price}</p>
                <button onclick="openPropertyPreview(${property.id})" style="margin-top: 8px; background: linear-gradient(135deg, #FF6B6B, #F25C93, #A855F7); color: white; border: none; padding: 6px 12px; border-radius: 999px; cursor: pointer; width: 100%; font-size: 12px; font-family: Tajawal, sans-serif; font-weight: 700;">عرض التفاصيل</button>
            </div>
        `)
        .openPopup();

    mapOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';

    setTimeout(() => map.setView(property.coordinates, 16), 100);
}

function closePropertyMap() {
    mapOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function initMap(center) {
    map = L.map('property-map').setView(center, 16);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CartoDB',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);
}

// ============================================================
// الفلترة
// ============================================================
function openFilterModal() {
    filterModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeFilterModal() {
    filterModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function applyFilters() {
    const selectedTypes = Array.from(document.querySelectorAll('input[name="property-type"]:checked'))
        .map(input => input.value);

    const selectedTransactions = Array.from(document.querySelectorAll('input[name="transaction-type"]:checked'))
        .map(input => input.value);

    const minPrice = document.querySelector('#min-price').value;
    const maxPrice = document.querySelector('#max-price').value;
    const minArea = document.querySelector('#min-area').value;
    const maxArea = document.querySelector('#max-area').value;

    currentProperties = propertiesData.filter(property => {
        if (selectedTypes.length > 0 && !selectedTypes.includes(property.category)) return false;

        if (selectedTransactions.length > 0) {
            const transactionMatch = selectedTransactions.some(transaction =>
                property.type.includes(transaction)
            );
            if (!transactionMatch) return false;
        }

        if (minPrice || maxPrice) {
            const price = extractNumber(property.price);
            if (minPrice && price < parseInt(minPrice)) return false;
            if (maxPrice && price > parseInt(maxPrice)) return false;
        }

        if (minArea || maxArea) {
            if (minArea && property.area < parseInt(minArea)) return false;
            if (maxArea && property.area > parseInt(maxArea)) return false;
        }

        return true;
    });

    renderProperties(currentProperties);
    closeFilterModal();
}

function resetFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = true;
    });

    document.querySelectorAll('.price-input, .area-input').forEach(input => {
        input.value = '';
    });

    document.querySelectorAll('.filters-bar .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const allBtn = document.querySelector('.filters-bar .filter-btn[data-filter="all"]');
    if (allBtn) allBtn.classList.add('active');

    currentProperties = [...propertiesData];
    renderProperties(currentProperties);
    closeFilterModal();
}

// ============================================================
// المشاركة
// ============================================================
function openShareModal(property) {
    shareModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    currentPreviewProperty = property;
}

function closeShareModal() {
    shareModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function shareProperty(type) {
    const property = currentPreviewProperty;
    if (!property) return;

    const url = window.location.href.split('?')[0] + `?property=${property.id}`;
    const text = `تفضل بمعاينة هذا العقار: ${property.title} (${property.code}) - ${property.price}`;

    switch (type) {
        case 'whatsapp':
            window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
            break;
        case 'telegram':
            window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
            break;
        case 'link':
            navigator.clipboard.writeText(url).then(() => {
                alert('تم نسخ الرابط إلى الحافظة');
            });
            break;
    }

    closeShareModal();
}

// ============================================================
// توليد محتوى المعاينة
// ============================================================
function generatePreviewContent(property) {
    return `
        <div class="preview-gallery">
            <div class="gallery-slider">
                ${property.images.map((img, index) => `
                    <div class="gallery-slide">
                        <img src="${img}" alt="${property.title} - صورة ${index + 1}">
                    </div>
                `).join('')}
            </div>

            ${property.images.length > 1 ? `
            <div class="gallery-nav">
                <button class="gallery-nav-btn prev-btn" aria-label="السابق">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <button class="gallery-nav-btn next-btn" aria-label="التالي">
                    <i class="fas fa-chevron-left"></i>
                </button>
            </div>

            <div class="gallery-indicators">
                ${property.images.map((_, index) => `
                    <button class="gallery-indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
                `).join('')}
            </div>
            ` : ''}
        </div>

        <div class="preview-details">
            <div class="preview-header-info">
                <div>
                    <h2 class="preview-name">${property.title}</h2>
                    <div class="preview-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${property.location}</span>
                    </div>
                </div>
                <div class="preview-price">${property.price}</div>
            </div>

            <div class="preview-code">
                <i class="fas fa-hashtag"></i>
                <span>رمز العقار: <strong>${property.code}</strong></span>
            </div>

            <p class="preview-description">${property.description}</p>

            <div class="preview-specs-grid">
                ${property.specs.map(spec => `
                    <div class="preview-spec-item">
                        <i class="${spec.icon}"></i>
                        <div>
                            <div class="preview-spec-value">${spec.value}</div>
                            <div class="preview-spec-label">${spec.label}</div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="preview-features">
                <h3 class="preview-features-title">المميزات</h3>
                <div class="preview-features-list">
                    ${property.features.map(feature => `
                        <div class="preview-feature">${feature}</div>
                    `).join('')}
                </div>
            </div>
        </div>

        <div class="preview-map" id="preview-mini-map">
            <div class="preview-map-overlay">
                <div class="preview-map-address">${property.location}</div>
                <button class="preview-map-btn">
                    <i class="fas fa-expand"></i>
                    عرض كامل
                </button>
            </div>
        </div>

        <div class="preview-contact-buttons">
            <button class="preview-contact-btn preview-visit-btn">
                <i class="fas fa-map-marked-alt"></i>
                زيارة الموقع
            </button>
            <button class="preview-contact-btn preview-whatsapp-btn">
                <i class="fab fa-whatsapp"></i>
                تواصل عبر واتساب
            </button>
        </div>
    `;
}

// ============================================================
// التنقل بين الصور
// ============================================================
function initGalleryNavigation(property) {
    const slider = document.querySelector('.gallery-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.gallery-indicator');
    const totalImages = property.images.length;

    function updateGallery() {
        slider.style.transform = `translateX(-${currentImageIndex * 100}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentImageIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            currentImageIndex = (currentImageIndex + 1) % totalImages;
            updateGallery();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
            updateGallery();
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            currentImageIndex = index;
            updateGallery();
        });
    });

    const previewMapBtn = document.querySelector('.preview-map-btn');
    if (previewMapBtn) {
        previewMapBtn.addEventListener('click', function () {
            closePropertyPreview();
            setTimeout(() => openPropertyMap(property.id), 300);
        });
    }
}

// ============================================================
// واتساب
// ============================================================
function contactViaWhatsapp(property) {
    const phone = property.agent.phone;
    const message = `مرحباً، أنا مهتم بالعقار ${property.title} (${property.code}) - ${property.price}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
}

// ============================================================
// المفضلة
// ============================================================
function toggleFavorite(button) {
    button.classList.toggle('active');
    const icon = button.querySelector('i');

    if (button.classList.contains('active')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
    }
}

function togglePreviewFavorite() {
    previewFavoriteBtn.classList.toggle('active');
    const icon = previewFavoriteBtn.querySelector('i');

    if (previewFavoriteBtn.classList.contains('active')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
    }
}

// ============================================================
// أدوات مساعدة
// ============================================================
function extractNumber(priceString) {
    const number = priceString.replace(/[^\d]/g, '');
    return parseInt(number) || 0;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'منذ يوم';
    if (diffDays <= 7) return `منذ ${diffDays} أيام`;
    if (diffDays <= 30) return `منذ ${Math.floor(diffDays / 7)} أسابيع`;

    return `منذ ${Math.floor(diffDays / 30)} أشهر`;
}

// ============================================================
// دعم السحب للإغلاق (للجوال)
// ============================================================
let startY = 0;
let currentY = 0;

if (previewOverlay) {
    previewOverlay.addEventListener('touchstart', function (e) {
        startY = e.touches[0].clientY;
    });
    previewOverlay.addEventListener('touchmove', function (e) {
        currentY = e.touches[0].clientY;
        if (currentY - startY > 80) closePropertyPreview();
    });
}

if (mapOverlay) {
    mapOverlay.addEventListener('touchstart', function (e) {
        startY = e.touches[0].clientY;
    });
    mapOverlay.addEventListener('touchmove', function (e) {
        currentY = e.touches[0].clientY;
        if (currentY - startY > 80) closePropertyMap();
    });
}

if (filterModal) {
    filterModal.addEventListener('touchstart', function (e) {
        startY = e.touches[0].clientY;
    });
    filterModal.addEventListener('touchmove', function (e) {
        currentY = e.touches[0].clientY;
        if (currentY - startY > 80) closeFilterModal();
    });
}

if (shareModal) {
    shareModal.addEventListener('touchstart', function (e) {
        startY = e.touches[0].clientY;
    });
    shareModal.addEventListener('touchmove', function (e) {
        currentY = e.touches[0].clientY;
        if (currentY - startY > 80) closeShareModal();
    });
}
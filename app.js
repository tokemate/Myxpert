// Marketing Strategy Application JavaScript - Fixed Version

class MarketingApp {
    constructor() {
        this.currentPhase = 'overview';
        this.currentFilter = 'all';
        this.data = this.initData();
        this.init();
    }

    initData() {
        return {
            "phases": {
                "see": {
                    "title": "SEE - Tudatosság építés",
                    "description": "A legnagyobb elérhető célközönség, akik még nem ismerik a kurzusokat, de potenciálisan érdekeltek a digitális marketing területén.",
                    "objective": "Márkatudatosság építése és széles célcsoport elérése",
                    "platforms": {
                        "tiktok": {
                            "tactics": [
                                "Trendekre épülő oktatási videók készítése",
                                "Hashtag kihívások indítása #MarketingTips témában",
                                "Influenszer együttműködések marketing témában",
                                "Behind-the-scenes tartalmak kurzusfelvételekről"
                            ],
                            "content": [
                                "60 másodperces 'Marketing tippek' videók",
                                "Gyors tutorial videók hirdetésekről",
                                "Marketing mémek és trendek",
                                "Napi marketing tippek sorozat"
                            ],
                            "budget": "50,000-100,000 Ft/hó",
                            "kpi": "Reach, View Rate, Hashtag Performance, Follower Growth"
                        },
                        "meta": {
                            "tactics": [
                                "Brand awareness kampányok széles targetinggel",
                                "Video view kampányok oktatási tartalmakkal",
                                "Engagement kampányok interaktív posztokhoz",
                                "Lookalike audience építése meglévő ügyfelekből"
                            ],
                            "content": [
                                "Inspiráló success story videók",
                                "Marketing alapok infografikák",
                                "Carousel hirdetések kurzus előnyökkel",
                                "Live videók marketing témákban"
                            ],
                            "budget": "80,000-150,000 Ft/hó",
                            "kpi": "Reach, CPM, Video View Rate, Brand Recall Lift"
                        },
                        "google": {
                            "tactics": [
                                "YouTube hirdetések marketing témában",
                                "Display hirdetések szakmai oldalakon",
                                "Discovery kampányok érdeklődési alapon",
                                "Gmail promotion hirdetések"
                            ],
                            "content": [
                                "YouTube bumper hirdetések (6 mp)",
                                "Banner hirdetések szakmai dizájnnal",
                                "Responsive display hirdetések",
                                "Gmail responsive hirdetések"
                            ],
                            "budget": "70,000-120,000 Ft/hó",
                            "kpi": "Impressions, View Rate, CTR, Brand Lift"
                        },
                        "email": {
                            "tactics": [
                                "Lead magnet terjesztése (ingyenes e-book)",
                                "Heti newsletter marketing tippekkel",
                                "Webinar meghívók széles listának",
                                "Content upgrades blog posztokhoz"
                            ],
                            "content": [
                                "Ingyenes 'Digital Marketing Starter Kit'",
                                "Heti marketing hírek és tippek",
                                "Exkluzív webinar meghívók",
                                "Template-ek és eszközök megosztása"
                            ],
                            "budget": "20,000-40,000 Ft/hó",
                            "kpi": "Open Rate, Click Rate, List Growth, Lead Quality"
                        }
                    }
                },
                "think": {
                    "title": "THINK - Megfontolás fázis",
                    "description": "Azok, akik már ismerik a márkatudatosságot, és elkezdtek gondolkodni az online marketing tanulásáról, de még összehasonlítják a lehetőségeket.",
                    "objective": "Bizalom építése és kurzusok értékének bemutatása",
                    "platforms": {
                        "tiktok": {
                            "tactics": [
                                "Kurzus előzetes tartalmak megosztása",
                                "Diák success story videók",
                                "Comparison videók más képzésekkel",
                                "FAQ válaszok videó formában"
                            ],
                            "content": [
                                "Kurzus sneak peek videók",
                                "Előtte-utána történetek diákoktól",
                                "Oktatói bemutatók személyes sztorival",
                                "Gyakorlati tippek a kurzusokból"
                            ],
                            "budget": "60,000-120,000 Ft/hó",
                            "kpi": "Engagement Rate, Save Rate, Share Rate, Profile Visits"
                        },
                        "meta": {
                            "tactics": [
                                "Lead generation kampányok ingyenes tartalmakért",
                                "Retargeting kampányok website látogatóknak",
                                "Lookalike kampányok email feliratkozókból",
                                "Event promotion webinarokhoz"
                            ],
                            "content": [
                                "Carousel hirdetések kurzus modulokkal",
                                "Video testimonials diákoktól",
                                "Interactive polls és quiz-ek",
                                "Webinar landing page hirdetések"
                            ],
                            "budget": "100,000-200,000 Ft/hó",
                            "kpi": "Lead Cost, Conversion Rate, Engagement Quality, Webinar Attendance"
                        },
                        "google": {
                            "tactics": [
                                "Search kampányok online marketing kulcsszavakra",
                                "YouTube hirdetések oktatási tartalmakkal",
                                "Remarketing kampányok website látogatóknak",
                                "Shopping kampányok kurzus csomagokhoz"
                            ],
                            "content": [
                                "Ad extensions kurzus előnyökkel",
                                "Landing page optimalizált konverzióra",
                                "YouTube demo videók kurzusokról",
                                "Responsive search hirdetések"
                            ],
                            "budget": "150,000-250,000 Ft/hó",
                            "kpi": "Quality Score, Search Impression Share, Cost per Lead, Conversion Rate"
                        },
                        "email": {
                            "tactics": [
                                "Nurture sequence indítása feliratkozóknak",
                                "Szegmentált kampányok érdeklődési területek szerint",
                                "Case study és success story emailek",
                                "Limited time ajánlatok küldése"
                            ],
                            "content": [
                                "5-részes email sorozat kurzus előnyökről",
                                "Weekly case study emails",
                                "Personal story az oktatóktól",
                                "Exclusive early bird ajánlatok"
                            ],
                            "budget": "30,000-60,000 Ft/hó",
                            "kpi": "Email Sequence Completion Rate, Click-through Rate, Lead Scoring"
                        }
                    }
                },
                "do": {
                    "title": "DO - Vásárlás ösztönzése",
                    "description": "Akik már döntésre készek és konkrétan keresnek online marketing kurzust. Erős vásárlási szándékkal rendelkeznek.",
                    "objective": "Konverzió maximalizálása és értékesítés lezárása",
                    "platforms": {
                        "tiktok": {
                            "tactics": [
                                "Limited time offer videók",
                                "Urgency és scarcity messaging",
                                "Direct CTA videók kurzus vásárláshoz",
                                "Live sales events"
                            ],
                            "content": [
                                "Flash sale announcement videók",
                                "Last chance reminder videók",
                                "Bonus értékű tartalmak showcase",
                                "Payment plan bemutatók"
                            ],
                            "budget": "40,000-80,000 Ft/hó",
                            "kpi": "Conversion Rate, Cost per Acquisition, Revenue Attribution"
                        },
                        "meta": {
                            "tactics": [
                                "Conversion kampányok purchase objektívummal",
                                "Dynamic product ads kurzus katalógussal",
                                "Retargeting high-intent audienceknek",
                                "Instant Experience hirdetések"
                            ],
                            "content": [
                                "Carousel hirdetések árak és előnyökkel",
                                "Video sales letter hirdetések",
                                "Social proof hirdetések testimonialokkal",
                                "Urgency messaging limitált ajánlatokkal"
                            ],
                            "budget": "200,000-400,000 Ft/hó",
                            "kpi": "ROAS, Cost per Purchase, Purchase Conversion Rate, Revenue"
                        },
                        "google": {
                            "tactics": [
                                "High-intent keresési kampányok",
                                "Smart Shopping kampányok",
                                "YouTube action kampányok",
                                "Local campaigns ha van offline helyszín"
                            ],
                            "content": [
                                "Ad extensions árakkal és akciókkal",
                                "Responsive display retargeting hirdetések",
                                "YouTube skippable action videók",
                                "Smart bidding purchase optimalizálás"
                            ],
                            "budget": "300,000-500,000 Ft/hó",
                            "kpi": "Conversion Value, Target CPA, Search Absolute Top IS, Shopping CTR"
                        },
                        "email": {
                            "tactics": [
                                "Abandoned cart recovery emails",
                                "Flash sale announcements",
                                "Last chance emails series",
                                "Payment reminder és instalment options"
                            ],
                            "content": [
                                "Abandoned registration recovery sequence",
                                "Limited time discount emails",
                                "Payment plan option emails",
                                "Course comparison és recommendation emails"
                            ],
                            "budget": "25,000-50,000 Ft/hó",
                            "kpi": "Revenue per Email, Purchase Conversion Rate, Cart Recovery Rate"
                        }
                    }
                },
                "care": {
                    "title": "CARE - Ügyfélmegtartás",
                    "description": "Azok, akik már megvásárolták legalább az egyik kurzust. Cél az újravásárlás, upsell és advocacy.",
                    "objective": "Ügyfélérték maximalizálása és brand advocacy építése",
                    "platforms": {
                        "tiktok": {
                            "tactics": [
                                "Student success showcase videók",
                                "Advanced tips meglévő diákoknak",
                                "Community challenges kurzus végzetteknek",
                                "Referral program promotion"
                            ],
                            "content": [
                                "Alumni success story videók",
                                "Advanced strategy videók",
                                "Community highlight videók",
                                "Refer-a-friend campaign videók"
                            ],
                            "budget": "30,000-60,000 Ft/hó",
                            "kpi": "Advocacy Rate, Referral Conversions, Community Engagement"
                        },
                        "meta": {
                            "tactics": [
                                "Lookalike audiencek meglévő vásárlókból",
                                "Upsell kampányok további kurzusokhoz",
                                "Community building és engagement",
                                "Referral program hirdetések"
                            ],
                            "content": [
                                "Advanced course promotion existing customers számára",
                                "Community group promotion",
                                "User generated content campaigns",
                                "Exclusive offers további kurzusokhoz"
                            ],
                            "budget": "80,000-150,000 Ft/hó",
                            "kpi": "Customer Lifetime Value, Upsell Rate, Referral Rate, Net Promoter Score"
                        },
                        "google": {
                            "tactics": [
                                "Customer match campaigns email listákkal",
                                "Similar audiences meglévő vásárlókból",
                                "Cross-sell és upsell kampányok",
                                "YouTube subscriber campaigns"
                            ],
                            "content": [
                                "Advanced course YouTube hirdetések",
                                "Cross-sell display hirdetések",
                                "Gmail hirdetések kurzus ajánlásokkal",
                                "YouTube community building videók"
                            ],
                            "budget": "100,000-200,000 Ft/hó",
                            "kpi": "Customer Lifetime Value, Cross-sell Conversion Rate, Retention Rate"
                        },
                        "email": {
                            "tactics": [
                                "Post-purchase onboarding sequence",
                                "Kurzus completion congratulations",
                                "Advanced course recommendations",
                                "Referral program emails és loyalty rewards"
                            ],
                            "content": [
                                "Welcome to community emails",
                                "Course completion certificates",
                                "Advanced learning path recommendations",
                                "VIP exclusive offers és early access"
                            ],
                            "budget": "40,000-80,000 Ft/hó",
                            "kpi": "Customer Retention Rate, Repeat Purchase Rate, Referral Conversion Rate, Lifetime Value"
                        }
                    }
                }
            }
        };
    }

    init() {
        this.setupEventListeners();
        this.showPhase('overview');
    }

    setupEventListeners() {
        // Navigation buttons
        const navButtons = document.querySelectorAll('.nav__button');
        navButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const phase = e.target.getAttribute('data-phase');
                this.switchPhase(phase);
            });
        });

        // Model cards in overview - delegate event handling
        document.addEventListener('click', (e) => {
            if (e.target.closest('.model-card')) {
                const card = e.target.closest('.model-card');
                const classes = Array.from(card.classList);
                const phaseClass = classes.find(cls => cls.startsWith('model-card--'));
                if (phaseClass) {
                    const phase = phaseClass.replace('model-card--', '');
                    this.switchPhase(phase);
                }
            }
        });

        // Platform filters - delegate event handling
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                e.preventDefault();
                const platform = e.target.getAttribute('data-platform');
                this.filterPlatforms(platform, e.target);
            }
        });
    }

    switchPhase(phase) {
        this.currentPhase = phase;
        this.currentFilter = 'all';
        this.showPhase(phase);
        this.updateNavigation(phase);
    }

    showPhase(phase) {
        // Hide all sections
        const sections = document.querySelectorAll('.phase-section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(phase);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Render content for detail phases
        if (phase !== 'overview') {
            this.renderPhaseContent(phase);
        }
    }

    updateNavigation(phase) {
        // Update nav buttons
        const navButtons = document.querySelectorAll('.nav__button');
        navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-phase') === phase) {
                btn.classList.add('active');
            }
        });
    }

    filterPlatforms(platform, button) {
        this.currentFilter = platform;

        // Update filter buttons in the current phase
        const currentSection = document.getElementById(this.currentPhase);
        if (currentSection) {
            const filterButtons = currentSection.querySelectorAll('.filter-btn');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show/hide platform cards
            const platformCards = currentSection.querySelectorAll('.platform-card');
            platformCards.forEach(card => {
                if (platform === 'all') {
                    card.classList.remove('hidden');
                } else {
                    if (card.classList.contains(`platform-card--${platform}`)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        }
    }

    renderPhaseContent(phase) {
        if (phase === 'overview' || !this.data.phases[phase]) return;

        const container = document.getElementById(`${phase}-platforms`);
        if (!container) return;

        const phaseData = this.data.phases[phase];
        container.innerHTML = '';

        Object.entries(phaseData.platforms).forEach(([platformName, platformData]) => {
            const card = this.createPlatformCard(platformName, platformData);
            container.appendChild(card);
        });

        // Reset filter to "all" when rendering new content
        const filterButtons = document.querySelectorAll(`#${phase} .filter-btn`);
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-platform') === 'all') {
                btn.classList.add('active');
            }
        });
    }

    createPlatformCard(platformName, data) {
        const card = document.createElement('div');
        card.className = `platform-card platform-card--${platformName}`;

        const platformIcons = {
            tiktok: '📱',
            meta: '📘',
            google: '🔍',
            email: '📧'
        };

        const platformNames = {
            tiktok: 'TikTok',
            meta: 'Meta',
            google: 'Google Ads',
            email: 'Email Marketing'
        };

        card.innerHTML = `
            <div class="platform-card__header">
                <div class="platform-card__icon platform-card__icon--${platformName}">
                    ${platformIcons[platformName]}
                </div>
                <h3 class="platform-card__title">${platformNames[platformName]}</h3>
                <div class="platform-card__budget">${data.budget}</div>
            </div>
            
            <div class="platform-section">
                <h4>Taktikák</h4>
                <ul>
                    ${data.tactics.map(tactic => `<li>${tactic}</li>`).join('')}
                </ul>
            </div>
            
            <div class="platform-section">
                <h4>Tartalom</h4>
                <ul>
                    ${data.content.map(content => `<li>${content}</li>`).join('')}
                </ul>
            </div>
            
            <div class="platform-section">
                <h4>KPI Mérőszámok</h4>
                <div class="platform-kpi">${data.kpi}</div>
            </div>
        `;

        return card;
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MarketingApp();
});
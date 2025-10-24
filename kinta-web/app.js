// ================================
// Navigation & Section Switching
// ================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setupDarkMode();
    setupNavigation();
    setupMobileNav();
    populateAboutSection();
    populateDictionary();
    populateGrammar();
    populateExamples();
    populatePhonology();
    setupSearch();
    setupDictionarySearch();
}

// ================================
// Dark Mode
// ================================
function setupDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved preference or default to light mode
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Save preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}

// ================================
// Navigation between sections
// ================================
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');

            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Update active section
            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(targetSection).classList.add('active');

            // Close mobile nav if open
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('active');
            }

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Mobile navigation toggle
function setupMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const sidebar = document.getElementById('sidebar');

    navToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

// ================================
// About Section
// ================================
function populateAboutSection() {
    // Populate principles
    const principleList = document.getElementById('principleList');
    kintasData.about.principles.forEach(principle => {
        const li = document.createElement('li');
        li.textContent = principle;
        principleList.appendChild(li);
    });

    // Populate stats
    const statsGrid = document.getElementById('statsGrid');
    const stats = [
        { value: kintasData.about.stats.totalRoots, label: 'Core Roots' },
        { value: kintasData.about.stats.consonants, label: 'Consonants' },
        { value: kintasData.about.stats.vowels, label: 'Vowels' },
        { value: kintasData.about.stats.possibleSyllables, label: 'Possible Syllables' }
    ];

    stats.forEach(stat => {
        const statCard = document.createElement('div');
        statCard.className = 'stat-card';
        statCard.innerHTML = `
            <span class="stat-value">${stat.value}</span>
            <span class="stat-label">${stat.label}</span>
        `;
        statsGrid.appendChild(statCard);
    });
}

// ================================
// Dictionary Section
// ================================
function populateDictionary() {
    const dictionaryContent = document.getElementById('dictionaryContent');
    const categoryFilters = document.getElementById('categoryFilters');

    // Create filter buttons
    const categories = [
        { id: 'all', label: 'All' },
        { id: 'pronouns', label: 'Pronouns' },
        { id: 'verbs', label: 'Verbs' },
        { id: 'nouns', label: 'Nouns' },
        { id: 'adjectives', label: 'Adjectives' },
        { id: 'colors', label: 'Colors' },
        { id: 'animals', label: 'Animals' },
        { id: 'numbers', label: 'Numbers' },
        { id: 'functionWords', label: 'Function Words' },
        { id: 'questionWords', label: 'Question Words' },
        { id: 'compounds', label: 'Compounds' }
    ];

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        if (cat.id === 'all') btn.classList.add('active');
        btn.textContent = cat.label;
        btn.onclick = () => filterDictionary(cat.id, btn);
        categoryFilters.appendChild(btn);
    });

    // Render all dictionary entries
    renderDictionaryCategory('Pronouns', kintasData.pronouns);
    renderDictionaryCategory('Verbs', kintasData.verbs);

    // Render noun subcategories
    Object.keys(kintasData.nouns).forEach(subcategory => {
        renderDictionaryCategory(
            `Nouns - ${capitalize(subcategory)}`,
            kintasData.nouns[subcategory]
        );
    });

    // Render adjective subcategories
    Object.keys(kintasData.adjectives).forEach(subcategory => {
        renderDictionaryCategory(
            `Adjectives - ${capitalize(subcategory)}`,
            kintasData.adjectives[subcategory]
        );
    });

    renderDictionaryCategory('Colors', kintasData.colors);
    renderDictionaryCategory('Animals', kintasData.animals);
    renderDictionaryCategory('Numbers', kintasData.numbers);
    renderDictionaryCategory('Function Words', kintasData.functionWords);
    renderDictionaryCategory('Question Words', kintasData.questionWords);
    renderDictionaryCategory('Compound Words', kintasData.compounds);
}

function renderDictionaryCategory(title, words) {
    const dictionaryContent = document.getElementById('dictionaryContent');
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'word-category';
    categoryDiv.setAttribute('data-category', title.toLowerCase().split(' ')[0]);

    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = title;
    categoryDiv.appendChild(categoryTitle);

    const wordGrid = document.createElement('div');
    wordGrid.className = 'word-grid';

    words.forEach(word => {
        const wordItem = document.createElement('div');
        wordItem.className = 'word-item';
        wordItem.setAttribute('data-kintas', word.kintas.toLowerCase());
        wordItem.setAttribute('data-english', word.english.toLowerCase());

        let content = `
            <span class="word-kintas">${word.kintas}</span>
            <span class="word-english">${word.english}</span>
        `;

        // Add extra info for specific categories
        if (word.possessive) {
            content += `<div class="word-meta">${word.possessive}</div>`;
        }
        if (word.breakdown) {
            content += `<div class="word-meta">${word.breakdown}</div>`;
        }
        if (word.literal) {
            content += `<div class="word-meta">${word.literal}</div>`;
        }
        if (word.emoji) {
            content = content.replace('</span>', ` ${word.emoji}</span>`);
        }

        // Add color indicator for colors
        if (title === 'Colors') {
            const colorMap = {
                'ripkol': '#2A2A2A',
                'lunkol': '#F7F7F7',
                'solkol': '#FFD700',
                'firkol': '#FF6B35',
                'akkol': '#4ECDC4',
                'terkol': '#8B7355',
                'vitkol': '#95E1D3'
            };
            if (colorMap[word.kintas]) {
                content += `<span class="color-indicator" style="background-color: ${colorMap[word.kintas]}"></span>`;
            }
        }

        wordItem.innerHTML = content;
        wordGrid.appendChild(wordItem);
    });

    categoryDiv.appendChild(wordGrid);
    dictionaryContent.appendChild(categoryDiv);
}

function filterDictionary(category, button) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Show/hide categories
    const categories = document.querySelectorAll('.word-category');
    categories.forEach(cat => {
        if (category === 'all') {
            cat.style.display = 'block';
        } else {
            const catName = cat.getAttribute('data-category');
            cat.style.display = catName === category ? 'block' : 'none';
        }
    });
}

// ================================
// Dictionary Search
// ================================
function setupDictionarySearch() {
    const searchInput = document.getElementById('dictionarySearch');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const wordItems = document.querySelectorAll('.word-item');

        wordItems.forEach(item => {
            const kintas = item.getAttribute('data-kintas');
            const english = item.getAttribute('data-english');

            if (kintas.includes(query) || english.includes(query) || query === '') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        // Hide empty categories
        const categories = document.querySelectorAll('.word-category');
        categories.forEach(cat => {
            const visibleWords = cat.querySelectorAll('.word-item[style="display: block;"], .word-item:not([style])');
            cat.style.display = visibleWords.length > 0 ? 'block' : 'none';
        });
    });
}

// ================================
// Grammar Section
// ================================
function populateGrammar() {
    const grammarContent = document.getElementById('grammarContent');

    kintasData.grammar.forEach((rule, index) => {
        const ruleDiv = document.createElement('div');
        ruleDiv.className = 'grammar-rule';
        if (index === 0) ruleDiv.classList.add('active'); // First rule open by default

        const header = document.createElement('div');
        header.className = 'grammar-header';
        header.innerHTML = `
            <h3 class="grammar-title">${rule.title}</h3>
            <span class="grammar-toggle">▼</span>
        `;
        header.onclick = () => toggleGrammarRule(ruleDiv);

        const body = document.createElement('div');
        body.className = 'grammar-body';

        const explanation = document.createElement('div');
        explanation.className = 'grammar-explanation';
        explanation.textContent = rule.rule;
        body.appendChild(explanation);

        const examplesDiv = document.createElement('div');
        examplesDiv.className = 'grammar-examples';

        rule.examples.forEach(example => {
            const exampleDiv = document.createElement('div');
            exampleDiv.className = 'grammar-example';
            exampleDiv.innerHTML = `
                <div class="example-kintas">${example.kintas}</div>
                <div class="example-english">${example.english}</div>
            `;
            examplesDiv.appendChild(exampleDiv);
        });

        body.appendChild(examplesDiv);
        ruleDiv.appendChild(header);
        ruleDiv.appendChild(body);
        grammarContent.appendChild(ruleDiv);
    });
}

function toggleGrammarRule(ruleDiv) {
    ruleDiv.classList.toggle('active');
}

// ================================
// Examples Section
// ================================
function populateExamples() {
    const examplesContent = document.getElementById('examplesContent');
    const exampleFilters = document.getElementById('exampleFilters');

    // Create filter buttons
    const exampleCategories = Object.keys(kintasData.examples);
    const filters = [
        { id: 'all', label: 'All' },
        ...exampleCategories.map(cat => ({ id: cat, label: formatCategoryName(cat) }))
    ];

    filters.forEach(filter => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        if (filter.id === 'all') btn.classList.add('active');
        btn.textContent = filter.label;
        btn.onclick = () => filterExamples(filter.id, btn);
        exampleFilters.appendChild(btn);
    });

    // Render examples
    exampleCategories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'example-category';
        categoryDiv.setAttribute('data-category', category);

        const title = document.createElement('h3');
        title.textContent = formatCategoryName(category);
        categoryDiv.appendChild(title);

        const exampleList = document.createElement('div');
        exampleList.className = 'example-list';

        kintasData.examples[category].forEach(example => {
            const exampleItem = document.createElement('div');
            exampleItem.className = 'example-item';
            exampleItem.innerHTML = `
                <div class="example-kintas">${example.kintas}</div>
                <div class="example-english">${example.english}</div>
            `;
            exampleList.appendChild(exampleItem);
        });

        categoryDiv.appendChild(exampleList);
        examplesContent.appendChild(categoryDiv);
    });
}

function filterExamples(category, button) {
    // Update active button
    document.querySelectorAll('#exampleFilters .filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Show/hide categories
    const categories = document.querySelectorAll('.example-category');
    categories.forEach(cat => {
        if (category === 'all') {
            cat.style.display = 'block';
        } else {
            const catName = cat.getAttribute('data-category');
            cat.style.display = catName === category ? 'block' : 'none';
        }
    });
}

function formatCategoryName(name) {
    // Convert camelCase to Title Case
    return name
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .trim();
}

// ================================
// Phonology Section
// ================================
function populatePhonology() {
    // Populate consonants
    const consonantGrid = document.getElementById('consonantGrid');
    kintasData.phonology.consonants.forEach(consonant => {
        const phonemeDiv = document.createElement('div');
        phonemeDiv.className = 'phoneme';
        phonemeDiv.textContent = consonant;
        consonantGrid.appendChild(phonemeDiv);
    });

    // Populate vowels
    const vowelList = document.getElementById('vowelList');
    kintasData.phonology.vowels.forEach(vowel => {
        const vowelItem = document.createElement('div');
        vowelItem.className = 'vowel-item';
        vowelItem.innerHTML = `
            <div class="vowel-letter">${vowel.letter}</div>
            <div class="vowel-sound">${vowel.sound}</div>
        `;
        vowelList.appendChild(vowelItem);
    });

    // Populate syllable structure
    const syllableStructure = document.getElementById('syllableStructure');
    syllableStructure.textContent = kintasData.phonology.syllableStructure;
}

// ================================
// Global Search
// ================================
function setupSearch() {
    const searchInput = document.getElementById('globalSearch');
    const searchResults = document.getElementById('searchResults');
    let searchTimeout;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.toLowerCase().trim();

        if (query.length < 2) {
            searchResults.classList.add('hidden');
            return;
        }

        searchTimeout = setTimeout(() => {
            const results = performGlobalSearch(query);
            displaySearchResults(results, searchResults);
        }, 300);
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.add('hidden');
        }
    });

    searchInput.addEventListener('focus', (e) => {
        if (e.target.value.length >= 2) {
            const results = performGlobalSearch(e.target.value.toLowerCase().trim());
            displaySearchResults(results, searchResults);
        }
    });
}

function performGlobalSearch(query) {
    const results = [];

    // Search pronouns
    kintasData.pronouns.forEach(word => {
        if (word.kintas.toLowerCase().includes(query) || word.english.toLowerCase().includes(query)) {
            results.push({ ...word, category: 'Pronouns' });
        }
    });

    // Search verbs
    kintasData.verbs.forEach(word => {
        if (word.kintas.toLowerCase().includes(query) || word.english.toLowerCase().includes(query)) {
            results.push({ ...word, category: 'Verbs' });
        }
    });

    // Search nouns
    Object.keys(kintasData.nouns).forEach(subcategory => {
        kintasData.nouns[subcategory].forEach(word => {
            if (word.kintas.toLowerCase().includes(query) || word.english.toLowerCase().includes(query)) {
                results.push({ ...word, category: `Nouns - ${capitalize(subcategory)}` });
            }
        });
    });

    // Search adjectives
    Object.keys(kintasData.adjectives).forEach(subcategory => {
        kintasData.adjectives[subcategory].forEach(word => {
            if (word.kintas.toLowerCase().includes(query) || word.english.toLowerCase().includes(query)) {
                results.push({ ...word, category: `Adjectives - ${capitalize(subcategory)}` });
            }
        });
    });

    // Search colors
    kintasData.colors.forEach(word => {
        if (word.kintas.toLowerCase().includes(query) || word.english.toLowerCase().includes(query)) {
            results.push({ ...word, category: 'Colors' });
        }
    });

    // Search animals
    kintasData.animals.forEach(word => {
        if (word.kintas.toLowerCase().includes(query) || word.english.toLowerCase().includes(query)) {
            results.push({ ...word, category: 'Animals' });
        }
    });

    // Search function words
    kintasData.functionWords.forEach(word => {
        if (word.kintas.toLowerCase().includes(query) || word.english.toLowerCase().includes(query)) {
            results.push({ ...word, category: 'Function Words' });
        }
    });

    // Search question words
    kintasData.questionWords.forEach(word => {
        if (word.kintas.toLowerCase().includes(query) || word.english.toLowerCase().includes(query)) {
            results.push({ ...word, category: 'Question Words' });
        }
    });

    // Search compounds
    kintasData.compounds.forEach(word => {
        if (word.kintas.toLowerCase().includes(query) || word.english.toLowerCase().includes(query)) {
            results.push({ ...word, category: 'Compounds' });
        }
    });

    // Search examples
    Object.keys(kintasData.examples).forEach(category => {
        kintasData.examples[category].forEach(example => {
            if (example.kintas.toLowerCase().includes(query) || example.english.toLowerCase().includes(query)) {
                results.push({
                    kintas: example.kintas,
                    english: example.english,
                    category: `Example - ${formatCategoryName(category)}`
                });
            }
        });
    });

    return results.slice(0, 20); // Limit to 20 results
}

function displaySearchResults(results, container) {
    container.innerHTML = '';

    if (results.length === 0) {
        container.innerHTML = '<div class="search-result-item">No results found</div>';
        container.classList.remove('hidden');
        return;
    }

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
            <div class="search-result-word">${result.kintas}</div>
            <div class="search-result-meaning">${result.english}</div>
            <div class="search-result-category">${result.category}</div>
        `;
        container.appendChild(resultItem);
    });

    container.classList.remove('hidden');
}

// ================================
// Utility Functions
// ================================
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

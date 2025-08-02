class MessiRonaldoComparison {
    constructor() {
        this.currentData = {};
        this.charts = {};
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadData('all-time-career');
        this.setupMobileMenu();
    }

    setupEventListeners() {
        // Filter changes
        document.getElementById('categoryFilter').addEventListener('change', (e) => {
            this.loadData(e.target.value);
        });

        document.getElementById('yearFilter').addEventListener('change', (e) => {
            if (e.target.value !== 'all') {
                this.loadData(e.target.value);
            } else {
                this.loadData(document.getElementById('categoryFilter').value);
            }
        });

        document.getElementById('statTypeFilter').addEventListener('change', () => {
            this.filterStats();
        });

        // Export functionality
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportToCSV();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupMobileMenu() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.querySelector('.nav-menu');

        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    loadData(category) {
        if (!messiRonaldoData[category]) {
            console.error(`No data found for category: ${category}`);
            return;
        }

        this.currentData = messiRonaldoData[category];
        this.renderStats();
        this.renderCharts();
    }

    renderStats() {
        const statsGrid = document.getElementById('statsGrid');
        statsGrid.innerHTML = '';

        const statCategories = [
            {
                title: 'Goals',
                messiValue: this.currentData.messi.goals || 0,
                ronaldoValue: this.currentData.ronaldo.goals || 0,
                type: 'number'
            },
            {
                title: 'Assists',
                messiValue: this.currentData.messi.assists || 0,
                ronaldoValue: this.currentData.ronaldo.assists || 0,
                type: 'number'
            },
            {
                title: 'Appearances',
                messiValue: this.currentData.messi.appearances || 0,
                ronaldoValue: this.currentData.ronaldo.appearances || 0,
                type: 'number'
            },
            {
                title: 'Goals Per Game',
                messiValue: this.currentData.messi.goalsPerGame || 0,
                ronaldoValue: this.currentData.ronaldo.goalsPerGame || 0,
                type: 'decimal'
            },
            {
                title: 'Hat-tricks',
                messiValue: this.currentData.messi.hatTricks || 0,
                ronaldoValue: this.currentData.ronaldo.hatTricks || 0,
                type: 'number'
            },
            {
                title: 'Penalties',
                messiValue: this.currentData.messi.penalties || '0/0',
                ronaldoValue: this.currentData.ronaldo.penalties || '0/0',
                type: 'text'
            },
            {
                title: 'Free Kick Goals',
                messiValue: this.currentData.messi.freeKicks || 0,
                ronaldoValue: this.currentData.ronaldo.freeKicks || 0,
                type: 'number'
            },
            {
                title: 'Minutes Per Goal',
                messiValue: this.currentData.messi.minutesPerGoal || 0,
                ronaldoValue: this.currentData.ronaldo.minutesPerGoal || 0,
                type: 'decimal',
                lowerIsBetter: true
            }
        ];

        // Add conditional stats if they exist
        if (this.currentData.messi.motm || this.currentData.ronaldo.motm) {
            statCategories.push({
                title: 'Man of the Match',
                messiValue: this.currentData.messi.motm || 0,
                ronaldoValue: this.currentData.ronaldo.motm || 0,
                type: 'number'
            });
        }

        if (this.currentData.messi.avgRating || this.currentData.ronaldo.avgRating) {
            statCategories.push({
                title: 'Average Rating',
                messiValue: this.currentData.messi.avgRating || 0,
                ronaldoValue: this.currentData.ronaldo.avgRating || 0,
                type: 'decimal'
            });
        }

        statCategories.forEach(stat => {
            const statCard = this.createStatCard(stat);
            statsGrid.appendChild(statCard);
        });

        // Add fade-in animation
        setTimeout(() => {
            document.querySelectorAll('.stat-card').forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('fade-in-up');
                }, index * 100);
            });
        }, 50);
    }

    createStatCard(stat) {
        const card = document.createElement('div');
        card.className = 'stat-card';

        const winner = this.determineWinner(stat.messiValue, stat.ronaldoValue, stat.lowerIsBetter);
        
        card.innerHTML = `
            <div class="stat-header">
                <h3 class="stat-title">${stat.title}</h3>
            </div>
            <div class="stat-comparison">
                <div class="player-stat messi-stat">
                    ${winner === 'messi' ? '<div class="winner-badge">👑</div>' : ''}
                    <div class="player-name">Messi</div>
                    <div class="stat-value">${this.formatValue(stat.messiValue, stat.type)}</div>
                    <div class="stat-label">${stat.title}</div>
                </div>
                <div class="player-stat ronaldo-stat">
                    ${winner === 'ronaldo' ? '<div class="winner-badge">👑</div>' : ''}
                    <div class="player-name">Ronaldo</div>
                    <div class="stat-value">${this.formatValue(stat.ronaldoValue, stat.type)}</div>
                    <div class="stat-label">${stat.title}</div>
                </div>
            </div>
        `;

        return card;
    }

    determineWinner(messiValue, ronaldoValue, lowerIsBetter = false) {
        const messiNum = this.extractNumber(messiValue);
        const ronaldoNum = this.extractNumber(ronaldoValue);

        if (messiNum === ronaldoNum) return 'tie';
        
        if (lowerIsBetter) {
            return messiNum < ronaldoNum ? 'messi' : 'ronaldo';
        } else {
            return messiNum > ronaldoNum ? 'messi' : 'ronaldo';
        }
    }

    extractNumber(value) {
        if (typeof value === 'number') return value;
        if (typeof value === 'string') {
            // Handle penalty format "24/29"
            if (value.includes('/')) {
                const parts = value.split('/');
                return parseInt(parts[0]) || 0;
            }
            return parseFloat(value) || 0;
        }
        return 0;
    }

    formatValue(value, type) {
        if (type === 'decimal') {
            return typeof value === 'number' ? value.toFixed(2) : value;
        }
        if (type === 'number' && typeof value === 'number') {
            return value.toLocaleString();
        }
        return value;
    }

    renderCharts() {
        this.renderGoalsChart();
        this.renderAssistsChart();
        this.renderYearlyChart();
        this.renderPerformanceChart();
    }

    renderGoalsChart() {
        const ctx = document.getElementById('goalsChart');
        if (!ctx) return;

        if (this.charts.goals) {
            this.charts.goals.destroy();
        }

        this.charts.goals = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Goals', 'Assists', 'Appearances'],
                datasets: [{
                    label: 'Messi',
                    data: [
                        this.currentData.messi.goals || 0,
                        this.currentData.messi.assists || 0,
                        this.currentData.messi.appearances || 0
                    ],
                    backgroundColor: '#74b9ff',
                    borderColor: '#0984e3',
                    borderWidth: 2,
                    borderRadius: 8
                }, {
                    label: 'Ronaldo',
                    data: [
                        this.currentData.ronaldo.goals || 0,
                        this.currentData.ronaldo.assists || 0,
                        this.currentData.ronaldo.appearances || 0
                    ],
                    backgroundColor: '#fd79a8',
                    borderColor: '#e84393',
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Goals, Assists & Appearances',
                        font: { size: 16, weight: 'bold' }
                    },
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    renderAssistsChart() {
        const ctx = document.getElementById('assistsChart');
        if (!ctx) return;

        if (this.charts.assists) {
            this.charts.assists.destroy();
        }

        this.charts.assists = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Messi Goals', 'Ronaldo Goals'],
                datasets: [{
                    data: [
                        this.currentData.messi.goals || 0,
                        this.currentData.ronaldo.goals || 0
                    ],
                    backgroundColor: ['#74b9ff', '#fd79a8'],
                    borderWidth: 3,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Goals Distribution',
                        font: { size: 16, weight: 'bold' }
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    renderYearlyChart() {
        const ctx = document.getElementById('yearlyChart');
        if (!ctx) return;

        if (this.charts.yearly) {
            this.charts.yearly.destroy();
        }

        // Get last 10 years of data
        const years = Object.keys(yearlyData).filter(year => year >= 2015).sort();
        const messiGoals = years.map(year => yearlyData[year]?.messi.goals || 0);
        const ronaldoGoals = years.map(year => yearlyData[year]?.ronaldo.goals || 0);

        this.charts.yearly = new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Messi',
                    data: messiGoals,
                    borderColor: '#74b9ff',
                    backgroundColor: 'rgba(116, 185, 255, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Ronaldo',
                    data: ronaldoGoals,
                    borderColor: '#fd79a8',
                    backgroundColor: 'rgba(253, 121, 168, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Goals by Year (2015-2025)',
                        font: { size: 16, weight: 'bold' }
                    },
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    renderPerformanceChart() {
        const ctx = document.getElementById('performanceChart');
        if (!ctx) return;

        if (this.charts.performance) {
            this.charts.performance.destroy();
        }

        const data = {
            labels: ['Goals/Game', 'Hat-tricks', 'Free Kicks'],
            datasets: [{
                label: 'Messi',
                data: [
                    this.currentData.messi.goalsPerGame || 0,
                    this.currentData.messi.hatTricks || 0,
                    this.currentData.messi.freeKicks || 0
                ],
                backgroundColor: 'rgba(116, 185, 255, 0.8)',
                borderColor: '#0984e3',
                borderWidth: 2
            }, {
                label: 'Ronaldo',
                data: [
                    this.currentData.ronaldo.goalsPerGame || 0,
                    this.currentData.ronaldo.hatTricks || 0,
                    this.currentData.ronaldo.freeKicks || 0
                ],
                backgroundColor: 'rgba(253, 121, 168, 0.8)',
                borderColor: '#e84393',
                borderWidth: 2
            }]
        };

        this.charts.performance = new Chart(ctx, {
            type: 'radar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Performance Comparison',
                        font: { size: 16, weight: 'bold' }
                    },
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    }
                }
            }
        });
    }

    filterStats() {
        const filter = document.getElementById('statTypeFilter').value;
        const statCards = document.querySelectorAll('.stat-card');
        
        statCards.forEach(card => {
            const title = card.querySelector('.stat-title').textContent.toLowerCase();
            let show = true;

            switch(filter) {
                case 'goals':
                    show = title.includes('goal') || title.includes('hat-trick');
                    break;
                case 'assists':
                    show = title.includes('assist');
                    break;
                case 'performance':
                    show = title.includes('rating') || title.includes('match') || title.includes('per game');
                    break;
                case 'trophies':
                    show = title.includes('trophy') || title.includes('title') || title.includes('cup');
                    break;
                default:
                    show = true;
            }

            card.style.display = show ? 'block' : 'none';
        });
    }

    exportToCSV() {
        const data = this.currentData;
        let csv = 'Category,Messi,Ronaldo\n';
        
        Object.keys(data.messi).forEach(key => {
            const messiValue = data.messi[key] || 0;
            const ronaldoValue = data.ronaldo[key] || 0;
            csv += `${key},${messiValue},${ronaldoValue}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `messi_vs_ronaldo_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MessiRonaldoComparison();
});

// Add some utility functions
function showLoading() {
    const statsGrid = document.getElementById('statsGrid');
    statsGrid.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `;
}

function hideLoading() {
    const loadingElement = document.querySelector('.loading');
    if (loadingElement) {
        loadingElement.remove();
    }
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.getElementById('navToggle');
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ULTIMATE Movement Guide - Maximum Excitement + Perfect Functionality + MANDATORY Chart
document.addEventListener('DOMContentLoaded', function() {
    console.log('ðŸš€ ULTIMATE Movement Guide Loading...');
    
    // Initialize all systems
    initLogoProtection();
    initPerformanceChart();
    initContentFromJSON();
    initVisualEffects();
    initResponsiveHandling();
    initInteractiveElements();
    initBattleMode();
    initScrollAnimations();
    initTouchOptimizations();
    initPerformanceMonitoring();
    
    console.log('âš¡ ALL SYSTEMS LOADED - MAXIMUM EXCITEMENT ACTIVATED!');
});
// Cached loader for local JSON data
let __appDataCache = null;
async function loadAppData() {
    if (__appDataCache) return __appDataCache;
    try {
        const res = await fetch('./mr_eatwell_correct_colors_data.json', { cache: 'no-store' });
        if (!res.ok) throw new Error('app data not found');
        __appDataCache = await res.json();
        return __appDataCache;
    } catch (e) {
        console.warn('Failed to load app data', e);
        return null;
    }
}

// Populate experience and decision lists from JSON
async function initContentFromJSON() {
    const data = await loadAppData();
    if (!data) return;

    try {
        const daily = data.comparison_sections?.daily_experience;
        if (daily) {
            const nh35Ul = document.querySelector('.nh35-experience .experience-list');
            const swUl = document.querySelector('.sw200-experience .experience-list');
            if (nh35Ul && Array.isArray(daily.nh35_highlights)) {
                nh35Ul.innerHTML = daily.nh35_highlights.map(t => `<li><span class="check-icon">✓</span>${t}</li>`).join('');
            }
            if (swUl && Array.isArray(daily.sw200_highlights)) {
                swUl.innerHTML = daily.sw200_highlights.map(t => `<li><span class="check-icon">✓</span>${t}</li>`).join('');
            }
        }

        const mv = data.movements;
        if (mv) {
            const nhWhy = mv['NH35']?.why_choose || [];
            const swWhy = mv['SW200-1']?.why_choose || [];
            const nhWhyUl = document.querySelector('.nh35-decision .decision-list');
            const swWhyUl = document.querySelector('.sw200-decision .decision-list');
            if (nhWhyUl && nhWhy.length) {
                nhWhyUl.innerHTML = nhWhy.map(t => `<li><span class="arrow">→</span>${t}</li>`).join('');
            }
            if (swWhyUl && swWhy.length) {
                swWhyUl.innerHTML = swWhy.map(t => `<li><span class="arrow">→</span>${t}</li>`).join('');
            }
        }
    } catch (err) {
        console.warn('Failed to populate content from JSON', err);
    }
}

/**
 * CRITICAL: Logo Protection System - ALWAYS VISIBLE
 */
function initLogoProtection() {
    const logos = document.querySelectorAll('.header-logo, .footer-logo');
    
    function ensureLogoVisibility() {
        logos.forEach(logo => {
            if (logo) {
                // Force visibility with maximum priority
                logo.style.display = 'block';
                logo.style.opacity = '1';
                logo.style.visibility = 'visible';
                logo.style.position = 'relative';
                logo.style.zIndex = '100';
            }
        });
    }
    
    // Initial protection
    ensureLogoVisibility();
    
    // Enhanced event handling
    logos.forEach(logo => {
        if (logo) {
            // Remove any problematic handlers
            logo.onerror = null;
            logo.onload = ensureLogoVisibility;
            
            // Continuous protection
            logo.addEventListener('load', ensureLogoVisibility);
            logo.addEventListener('error', (e) => {
                console.warn('Logo error caught, maintaining visibility');
                ensureLogoVisibility();
            });
            
            // Interaction protection
            logo.addEventListener('mouseenter', () => {
                logo.style.transform = 'scale(1.1) rotate(5deg)';
                logo.style.filter = 'brightness(1.2) drop-shadow(0 0 30px rgba(204,104,0,0.8))';
                ensureLogoVisibility(); // Always ensure visibility
            });
            
            logo.addEventListener('mouseleave', () => {
                logo.style.transform = 'scale(1) rotate(0deg)';
                logo.style.filter = 'drop-shadow(0 0 20px rgba(204,104,0,0.5))';
                ensureLogoVisibility(); // Always ensure visibility
            });
        }
    });
    
    // Continuous monitoring system (reduced frequency)
    setInterval(() => {
        if (!document.hidden) ensureLogoVisibility();
    }, 5000);
    
    console.log('ðŸ›¡ï¸ Logo Protection System: ACTIVE');
}

/**
 * MANDATORY: Performance Chart Implementation
 */
async function initPerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) {
        console.error('âŒ Performance chart canvas not found!');
        return;
    }
    // Build Chart data from local JSON with fallback
    let chartData;
    try {
        const res = await fetch('./mr_eatwell_correct_colors_data.json', { cache: 'no-store' });
        if (!res.ok) throw new Error('JSON not found');
        const json = await res.json();
        const labels = json.technical_performance?.categories || [];
        const nh35 = json.technical_performance?.nh35_ratings || [];
        const sw200 = json.technical_performance?.sw200_ratings || [];
        chartData = {
            labels: labels.length ? labels : [
                'Sweep Smoothness','Daily Accuracy','Shock Resistance','Long-term Reliability','Service Convenience','Build Quality Feel','Heritage Value','Versatility'
            ],
            datasets: [
                {
                    label: 'NH35 - The Reliable Workhorse',
                    data: nh35.length ? nh35 : [7,8,9,9,9,7,7,9],
                    backgroundColor: 'rgba(31, 184, 205, 0.2)',
                    borderColor: '#1FB8CD',
                    borderWidth: 3,
                    pointBackgroundColor: '#1FB8CD',
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: '#1FB8CD',
                    pointHoverBorderColor: '#FFFFFF',
                    pointHoverBorderWidth: 3
                },
                {
                    label: 'SW200-1 - The Swiss Precision Master',
                    data: sw200.length ? sw200 : [10,9,7,8,6,9,10,8],
                    backgroundColor: 'rgba(255, 193, 133, 0.2)',
                    borderColor: '#FFC185',
                    borderWidth: 3,
                    pointBackgroundColor: '#FFC185',
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: '#FFC185',
                    pointHoverBorderColor: '#FFFFFF',
                    pointHoverBorderWidth: 3
                }
            ]
        };
    } catch (e) {
        console.warn('Using fallback chart data', e);
        chartData = {
            labels: [
                'Sweep Smoothness','Daily Accuracy','Shock Resistance','Long-term Reliability','Service Convenience','Build Quality Feel','Heritage Value','Versatility'
            ],
            datasets: [
                {
                    label: 'NH35 - The Reliable Workhorse',
                    data: [7,8,9,9,9,7,7,9],
                    backgroundColor: 'rgba(31, 184, 205, 0.2)',
                    borderColor: '#1FB8CD',
                    borderWidth: 3,
                    pointBackgroundColor: '#1FB8CD',
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: '#1FB8CD',
                    pointHoverBorderColor: '#FFFFFF',
                    pointHoverBorderWidth: 3
                },
                {
                    label: 'SW200-1 - The Swiss Precision Master',
                    data: [10,9,7,8,6,9,10,8],
                    backgroundColor: 'rgba(255, 193, 133, 0.2)',
                    borderColor: '#FFC185',
                    borderWidth: 3,
                    pointBackgroundColor: '#FFC185',
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: '#FFC185',
                    pointHoverBorderColor: '#FFFFFF',
                    pointHoverBorderWidth: 3
                }
            ]
        };
    }

    const chartConfig = {
        type: 'radar',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1, // keep radar chart square
            resizeDelay: 150,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#002D13',
                    bodyColor: '#002D13',
                    borderColor: '#CC6800',
                    borderWidth: 2,
                    cornerRadius: 8,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.r}/10`;
                        },
                        title: function(tooltipItems) {
                            return tooltipItems[0].label;
                        }
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 10,
                    min: 0,
                    ticks: {
                        stepSize: 2,
                        color: '#002D13',
                        font: {
                            size: 12,
                            weight: '500'
                        },
                        backdropColor: 'rgba(255, 255, 255, 0.8)',
                        backdropPadding: 4
                    },
                    grid: {
                        color: 'rgba(204, 104, 0, 0.3)',
                        lineWidth: 2
                    },
                    angleLines: {
                        color: 'rgba(204, 104, 0, 0.4)',
                        lineWidth: 1
                    },
                    pointLabels: {
                        color: '#002D13',
                        font: {
                            size: 14,
                            weight: '600'
                        },
                        padding: 20
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'nearest'
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart',
                animateScale: true,
                animateRotate: true
            },
            elements: {
                line: {
                    tension: 0.1
                }
            }
        }
    };

    // Create the chart with error handling
    try {
        const performanceChart = new Chart(ctx, chartConfig);
        // Render custom legend
        const legendContainer = document.getElementById('performanceLegend');
        if (legendContainer) {
            legendContainer.innerHTML = '';
            chartData.datasets.forEach((ds) => {
                const item = document.createElement('div');
                item.className = 'legend-item';
                const dot = document.createElement('span');
                dot.className = 'legend-dot ' + (ds.label.includes('NH35') ? 'nh35' : 'sw200');
                const text = document.createElement('span');
                text.textContent = ds.label.replace(/[\u{1F1E6}-\u{1F1FF}\u{2600}-\u{27BF}]/gu, '').trim();
                item.appendChild(dot);
                item.appendChild(text);
                legendContainer.appendChild(item);
            });
        }
        
        // Add epic hover effects to chart container
        const chartContainer = ctx.closest('.chart-container');
        if (chartContainer) {
            chartContainer.addEventListener('mouseenter', () => {
                chartContainer.style.transform = 'scale(1.02)';
                chartContainer.style.boxShadow = '0 15px 50px rgba(204,104,0,0.3)';
            });
            
            chartContainer.addEventListener('mouseleave', () => {
                chartContainer.style.transform = 'scale(1)';
                chartContainer.style.boxShadow = 'inset 0 2px 10px rgba(0,0,0,0.05)';
            });
        }
        
        console.log('ðŸ“Š MANDATORY Performance Chart: LOADED & INTERACTIVE!');
        
        // Mobile touch optimization
        if ('ontouchstart' in window) {
            ctx.addEventListener('touchstart', (e) => {
                if (navigator.vibrate) navigator.vibrate(10);
            }, { passive: true });
        }
        
        return performanceChart;
        
    } catch (error) {
        console.error('âŒ Chart creation failed:', error);
        // Fallback display
        const fallback = document.createElement('div');
        fallback.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #002D13;">
                <h3>ðŸ“Š Performance Comparison</h3>
                <p>Chart.js required for interactive visualization</p>
            </div>
        `;
        ctx.parentNode.replaceChild(fallback, ctx);
    }
}

/**
 * Visual Effects System - MAXIMUM EXCITEMENT
 */
function initVisualEffects() {
    // Floating particles animation
    initFloatingParticles();
    
    // Epic glow effects
    initGlowEffects();
    
    // Gear animations
    initGearAnimations();
    
    // Crystal effects
    initCrystalEffects();
    
    // Epic VS divider
    initVSDividerEffects();
    
    console.log('âœ¨ Visual Effects: MAXIMUM EXCITEMENT ACTIVATED!');
}

function initFloatingParticles() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        // Random properties for each particle
        const duration = 15 + Math.random() * 10; // 15-25 seconds
        const delay = Math.random() * 5; // 0-5 seconds
        const size = 3 + Math.random() * 4; // 3-7px
        
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `-${delay}s`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random horizontal movement
        particle.style.setProperty('--random-x', `${(Math.random() - 0.5) * 100}px`);
    });
}

function initGlowEffects() {
    const glowElements = document.querySelectorAll('[class*="glow"], [class*="aurora"]');
    
    glowElements.forEach(element => {
        // Add random variation to glow animations
        const duration = 3 + Math.random() * 2; // 3-5 seconds
        const delay = Math.random() * 2; // 0-2 seconds
        
        element.style.animationDuration = `${duration}s`;
        element.style.animationDelay = `${delay}s`;
    });
}

function initGearAnimations() {
    const gears = document.querySelectorAll('.gear, .card-gear');
    
    gears.forEach(gear => {
        // Vary rotation speeds
        const speed = 8 + Math.random() * 12; // 8-20 seconds
        const direction = Math.random() > 0.5 ? 'normal' : 'reverse';
        
        gear.style.animationDuration = `${speed}s`;
        gear.style.animationDirection = direction;
        
        // Add hover interaction
        gear.addEventListener('mouseenter', () => {
            gear.style.animationDuration = '2s';
            gear.style.transform = 'scale(1.2)';
        });
        
        gear.addEventListener('mouseleave', () => {
            gear.style.animationDuration = `${speed}s`;
            gear.style.transform = 'scale(1)';
        });
    });
}

function initCrystalEffects() {
    const crystals = document.querySelectorAll('.crystal, .vs-crystal');
    
    crystals.forEach(crystal => {
        // Add sparkle interaction
        crystal.addEventListener('mouseenter', () => {
            crystal.style.animation = 'crystalExplode 0.6s ease-out';
            crystal.style.transform = 'scale(2)';
            crystal.style.filter = 'brightness(2)';
        });
        
        crystal.addEventListener('mouseleave', () => {
            crystal.style.animation = '';
            crystal.style.transform = 'scale(1)';
            crystal.style.filter = 'brightness(1)';
        });
    });
}

function initVSDividerEffects() {
    const vsText = document.querySelector('.vs-text');
    const lightningBolts = document.querySelectorAll('.lightning');
    const energyRings = document.querySelectorAll('.energy-ring');
    
    if (vsText) {
        let clickCount = 0;
        let clickTimer;
        
        vsText.addEventListener('click', () => {
            clickCount++;
            
            // Epic click effect
            vsText.style.animation = 'vsExplode 0.8s ease-out';
            
            // Lightning burst
            lightningBolts.forEach((bolt, index) => {
                setTimeout(() => {
                    bolt.style.animation = 'lightningBurst 0.5s ease-out';
                }, index * 100);
            });
            
            // Energy ring explosion
            energyRings.forEach((ring, index) => {
                setTimeout(() => {
                    ring.style.animation = 'ringExplode 1s ease-out';
                }, index * 200);
            });
            
            // Battle mode activation
            if (clickCount === 1) {
                clickTimer = setTimeout(() => {
                    clickCount = 0;
                }, 3000);
            }
            
            if (clickCount >= 5) {
                clearTimeout(clickTimer);
                activateBattleMode();
                clickCount = 0;
            }
            
            // Reset animations
            setTimeout(() => {
                vsText.style.animation = 'vsCore 3s ease-in-out infinite';
                lightningBolts.forEach(bolt => {
                    bolt.style.animation = '';
                });
                energyRings.forEach(ring => {
                    ring.style.animation = '';
                });
            }, 1000);
        });
        
        // Add dynamic keyframes
        addDynamicKeyframes();
    }
}

function addDynamicKeyframes() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes vsExplode {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.5); filter: brightness(2); }
            100% { transform: rotate(360deg) scale(1.2); filter: brightness(1.5); }
        }
        
        @keyframes lightningBurst {
            0% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(2); color: #FFFFFF; }
            100% { opacity: 0.8; transform: scale(1.5); }
        }
        
        @keyframes ringExplode {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
            50% { transform: translate(-50%, -50%) scale(1.8); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.7; }
        }
        
        @keyframes crystalExplode {
            0% { transform: scale(1) rotate(0deg); opacity: 1; }
            50% { transform: scale(3) rotate(180deg); opacity: 0.8; }
            100% { transform: scale(2) rotate(360deg); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Interactive Elements - PERFECT CONTRAST
 */
function initInteractiveElements() {
    // Movement card interactions
    initMovementCardInteractions();
    
    // Experience item interactions  
    initExperienceInteractions();
    
    // Table row interactions
    initTableInteractions();
    
    // Winner badge interactions
    initWinnerBadgeInteractions();
    
    // Summary card interactions
    initSummaryInteractions();
    
    console.log('ðŸŽ¯ Interactive Elements: PERFECT CONTRAST ACTIVATED!');
}

function initMovementCardInteractions() {
    // Works with current DOM structure in index.html
    const movementCards = document.querySelectorAll('.movement-card, .nh35-card, .sw200-card');
    
    movementCards.forEach(card => {
        const aurora = card.querySelector('.card-aurora');
        const gears = card.querySelectorAll('.card-gear');
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.03)';
            card.style.boxShadow = '0 30px 120px rgba(0,0,0,0.25)';
            
            if (aurora) {
                aurora.style.opacity = '0.5';
                aurora.style.animation = 'auroraFlow 2s ease-in-out infinite alternate';
            }
            
            gears.forEach(gear => {
                gear.style.opacity = '0.4';
                gear.style.animationDuration = '3s';
            });
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 15px 60px rgba(0,0,0,0.1)';
            
            if (aurora) {
                aurora.style.opacity = '0';
                aurora.style.animation = '';
            }
            
            gears.forEach(gear => {
                gear.style.opacity = '0.1';
                gear.style.animationDuration = '8s';
            });
        });
    });
}

function initExperienceInteractions() {
    // Map existing list items to interaction targets
    const experienceItems = document.querySelectorAll('.experience-card .experience-list li');
    
    experienceItems.forEach((item, index) => {
        const icon = item.querySelector('.exp-icon, .experience-icon');
        const glow = item.querySelector('.item-glow');
        
        item.addEventListener('mouseenter', () => {
            // PERFECT CONTRAST: Solid white background with dark text
            item.style.background = 'rgba(255,255,255,1)';
            item.style.color = '#002D13';
            item.style.fontWeight = '600';
            item.style.transform = 'translateX(12px) scale(1.03)';
            item.style.boxShadow = '0 10px 40px rgba(204,104,0,0.3)';
            item.style.borderLeftColor = '#002D13';
            
            if (icon) {
                icon.style.transform = 'scale(1.3) rotate(15deg)';
                icon.style.filter = 'brightness(1.3)';
            }
            
            if (glow) {
                glow.style.opacity = '0.4';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.background = 'rgba(255,255,255,0.9)';
            item.style.color = '#002D13';
            item.style.fontWeight = '500';
            item.style.transform = 'translateX(0) scale(1)';
            item.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
            item.style.borderLeftColor = '#CC6800';
            
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.filter = 'brightness(1)';
            }
            
            if (glow) {
                glow.style.opacity = '0';
            }
        });
        
        // Staggered entrance animation
        setTimeout(() => {
            item.style.animation = `slideInLeft 0.6s ease-out ${index * 0.1}s forwards`;
        }, 200);
    });
}

function initTableInteractions() {
    // Use current div-based rows in comparison tables
    const specRows = document.querySelectorAll('.comparison-table .table-row');
    
    specRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            // PERFECT CONTRAST: Solid background with high contrast text
            row.style.background = 'rgba(255,255,255,1)';
            row.style.color = '#002D13';
            row.style.fontWeight = '600';
            row.style.transform = 'translateX(8px) scale(1.01)';
            row.style.boxShadow = '6px 0 0 0 #CC6800';
            
            // Highlight corresponding spec in other table
            const specNameEl = row.querySelector('.spec-name') || row.querySelector('.spec-column');
            const specName = specNameEl ? specNameEl.textContent : '';
            highlightCorrespondingSpec(specName, row);
        });
        
        row.addEventListener('mouseleave', () => {
            row.style.background = '';
            row.style.color = '#002D13';
            row.style.fontWeight = '500';
            row.style.transform = 'translateX(0) scale(1)';
            row.style.boxShadow = 'none';
            clearSpecHighlights();
        });
    });
}

function highlightCorrespondingSpec(specName, currentRow) {
    const allRows = document.querySelectorAll('.comparison-table .table-row');
    
    allRows.forEach(row => {
        const nameEl = row.querySelector('.spec-name') || row.querySelector('.spec-column');
        const rowSpecName = nameEl ? nameEl.textContent : '';
        if (rowSpecName === specName && row !== currentRow) {
            row.style.background = 'rgba(255,255,255,0.95)';
            row.style.color = '#002D13';
            row.style.fontWeight = '600';
            row.style.transform = 'translateX(4px)';
            row.style.boxShadow = '4px 0 0 0 #CC6800';
        }
    });
}

function clearSpecHighlights() {
    const allRows = document.querySelectorAll('.spec-row');
    
    allRows.forEach(row => {
        if (!row.matches(':hover')) {
            row.style.background = '';
            row.style.color = '#002D13';
            row.style.fontWeight = '500';
            row.style.transform = '';
            row.style.boxShadow = 'none';
        }
    });
}

function initWinnerBadgeInteractions() {
    const winnerBadges = document.querySelectorAll('.spec-value.winner');
    
    winnerBadges.forEach(badge => {
        const icon = badge.querySelector('.winner-icon');
        const burst = badge.querySelector('.winner-burst');
        
        badge.addEventListener('mouseenter', () => {
            // PERFECT CONTRAST: Maintain high visibility
            badge.style.background = 'rgba(40,167,69,0.2)';
            badge.style.color = '#28a745';
            badge.style.fontWeight = 'bold';
            badge.style.transform = 'scale(1.08)';
            badge.style.borderColor = '#28a745';
            badge.style.boxShadow = '0 8px 30px rgba(40,167,69,0.4)';
            
            if (icon) {
                icon.style.animation = 'trophyDance 0.6s ease-out';
                icon.style.transform = 'scale(1.3)';
            }
            
            if (burst) {
                burst.style.animation = 'winnerBurstExplode 0.6s ease-out';
            }
        });
        
        badge.addEventListener('mouseleave', () => {
            badge.style.background = 'rgba(40,167,69,0.1)';
            badge.style.color = '#28a745';
            badge.style.fontWeight = 'bold';
            badge.style.transform = 'scale(1)';
            badge.style.boxShadow = '0 4px 15px rgba(40,167,69,0.3)';
            
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
}

function initSummaryInteractions() {
    const summaryItems = document.querySelectorAll('.summary-item');
    
    summaryItems.forEach(item => {
        const badge = item.querySelector('.summary-badge');
        const gems = item.querySelectorAll('.gem');
        
        item.addEventListener('mouseenter', () => {
            // PERFECT CONTRAST: Solid white background
            item.style.background = 'rgba(255,255,255,1)';
            item.style.color = '#002D13';
            item.style.transform = 'translateY(-12px) scale(1.03)';
            item.style.boxShadow = '0 20px 80px rgba(0,0,0,0.25)';
            
            if (badge) {
                badge.style.animation = 'badgeMajestic 1s ease-out infinite';
                badge.style.transform = 'scale(1.2)';
            }
            
            gems.forEach(gem => {
                gem.style.animation = 'gemTwinkle 0.8s ease-out infinite';
                gem.style.opacity = '1';
            });
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.background = 'rgba(255,255,255,0.9)';
            item.style.color = '#002D13';
            item.style.transform = 'translateY(0) scale(1)';
            item.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
            
            if (badge) {
                badge.style.transform = 'scale(1)';
            }
            
            gems.forEach(gem => {
                gem.style.opacity = '0.3';
            });
        });
    });
}

/**
 * Battle Mode System - EPIC ACTIVATION
 */
function initBattleMode() {
    // Konami code activation
    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateBattleMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    console.log('âš”ï¸ Battle Mode System: ARMED AND READY');
}

function activateBattleMode() {
    console.log('âš¡ BATTLE MODE: ACTIVATED!');
    
    // Add battle mode class
    document.body.classList.add('battle-mode-active');
    
    // Create epic notification
    showBattleNotification();
    
    // Add battle effects
    addBattleEffects();
    
    // Auto-deactivate after 10 seconds
    setTimeout(deactivateBattleMode, 10000);
}

function showBattleNotification() {
    const notification = document.createElement('div');
    notification.className = 'battle-notification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #CC6800, #FF7A00);
            color: white;
            padding: 30px 50px;
            border-radius: 20px;
            font-size: 28px;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 20px 100px rgba(0,0,0,0.5);
            text-align: center;
            animation: battleNotification 4s ease-out forwards;
        ">
            âš¡ ULTIMATE BATTLE MODE âš¡<br>
            <span style="font-size: 18px; opacity: 0.9;">MAXIMUM EXCITEMENT UNLEASHED!</span>
        </div>
    `;
    
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        @keyframes battleNotification {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3) rotate(-10deg); }
            20% { opacity: 1; transform: translate(-50%, -50%) scale(1.2) rotate(5deg); }
            30% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
            70% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8) rotate(10deg); }
        }
    `;
    document.head.appendChild(notificationStyle);
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
        notificationStyle.remove();
    }, 4000);
}

function addBattleEffects() {
    const battleStyle = document.createElement('style');
    battleStyle.className = 'battle-effects';
    battleStyle.textContent = `
        .battle-mode-active .movement-card {
            animation: battleCardShake 0.3s ease-in-out infinite !important;
        }
        
        .battle-mode-active .vs-text {
            animation: battleVsSpin 0.4s linear infinite !important;
            background: linear-gradient(45deg, #FF0000, #FF7A00, #FFD700, #00FF00, #00FFFF, #FF00FF, #FF0000) !important;
            background-size: 300% 300% !important;
            animation: battleVsSpin 0.4s linear infinite, battleGradient 2s ease-in-out infinite !important;
        }
        
        .battle-mode-active .winner {
            animation: battleWinnerFlash 0.5s ease-in-out infinite alternate !important;
        }
        
        .battle-mode-active .particle {
            animation-duration: 2s !important;
            background: #FFD700 !important;
        }
        
        .battle-mode-active .header-logo, .battle-mode-active .footer-logo {
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
            animation: logoEpicBattle 1s ease-in-out infinite alternate !important;
        }
        
        @keyframes battleCardShake {
            0%, 100% { transform: translateY(-15px) translateX(0) scale(1.03); }
            25% { transform: translateY(-15px) translateX(-3px) scale(1.03); }
            50% { transform: translateY(-15px) translateX(3px) scale(1.03); }
            75% { transform: translateY(-15px) translateX(-2px) scale(1.03); }
        }
        
        @keyframes battleVsSpin {
            from { transform: rotate(0deg) scale(1.3); }
            to { transform: rotate(360deg) scale(1.3); }
        }
        
        @keyframes battleGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        @keyframes battleWinnerFlash {
            from { 
                background: rgba(40,167,69,0.3) !important; 
                color: #28a745 !important;
                box-shadow: 0 0 20px #28a745;
            }
            to { 
                background: rgba(255,215,0,0.3) !important; 
                color: #FFD700 !important;
                box-shadow: 0 0 30px #FFD700;
            }
        }
        
        @keyframes logoEpicBattle {
            from { 
                transform: scale(1.1) rotate(0deg);
                filter: brightness(1.2) drop-shadow(0 0 30px #CC6800);
            }
            to { 
                transform: scale(1.2) rotate(5deg);
                filter: brightness(1.5) drop-shadow(0 0 50px #FFD700);
            }
        }
    `;
    document.head.appendChild(battleStyle);
}

function deactivateBattleMode() {
    document.body.classList.remove('battle-mode-active');
    
    // Remove battle effects
    const battleEffects = document.querySelector('.battle-effects');
    if (battleEffects) {
        battleEffects.remove();
    }
    
    // Ensure logos remain visible
    setTimeout(() => {
        initLogoProtection();
    }, 100);
    
    console.log('ðŸ›¡ï¸ Battle Mode: DEACTIVATED - Systems Restored');
}

/**
 * Responsive Handling
 */
function initResponsiveHandling() {
    // Enhanced viewport handling
    function updateViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    updateViewportHeight();
    window.addEventListener('resize', debounce(updateViewportHeight, 100));
    window.addEventListener('orientationchange', updateViewportHeight);
    
    // VS divider positioning
    function handleVSPositioning() {
        const vsDiv = document.querySelector('.vs-divider');
        const comparison = document.querySelector('.comparison-grid, .movement-overview-flex');
        
        if (vsDiv && comparison) {
            const isMobile = window.innerWidth < 768;
            
            if (isMobile) {
                vsDiv.style.order = '1';
                comparison.style.flexDirection = 'column';
            } else {
                vsDiv.style.order = '';
                comparison.style.flexDirection = '';
            }
        }
    }
    
    handleVSPositioning();
    window.addEventListener('resize', debounce(handleVSPositioning, 100));
    
    // Table height consistency
    function ensureTableConsistency() {
        const tableContainers = document.querySelectorAll('.table-container');
        
        if (tableContainers.length >= 2) {
            let maxHeight = 0;
            
            tableContainers.forEach(container => {
                container.style.minHeight = '';
                const height = container.offsetHeight;
                maxHeight = Math.max(maxHeight, height);
            });
            
            const targetHeight = Math.max(maxHeight, 360);
            tableContainers.forEach(container => {
                container.style.minHeight = `${targetHeight}px`;
            });
        }
    }
    
    setTimeout(ensureTableConsistency, 500);
    window.addEventListener('resize', debounce(ensureTableConsistency, 200));
    
    console.log('ðŸ“± Responsive Handling: OPTIMIZED');
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special animations for different elements
                if (entry.target.classList.contains('performance-card')) {
                    animatePerformanceCard(entry.target);
                } else if (entry.target.classList.contains('battle-card')) {
                    animateBattleCard(entry.target);
                }
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll(
        '.movement-card, .battle-card, .performance-card, .summary-card'
    );
    
    animatedElements.forEach(el => observer.observe(el));
    
    // Add animate-in styles
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        .animate-in {
            animation: epicEntranceAnimation 1.2s cubic-bezier(0.2, 0, 0.2, 1) forwards;
        }
        
        @keyframes epicEntranceAnimation {
            from {
                opacity: 0;
                transform: translateY(50px) scale(0.9) rotateX(15deg);
                filter: blur(5px);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1) rotateX(0deg);
                filter: blur(0px);
            }
        }
    `;
    document.head.appendChild(animationStyle);
    
    console.log('ðŸŽ¬ Scroll Animations: EPIC ENTRANCES READY');
}

function animatePerformanceCard(card) {
    const title = card.querySelector('.performance-title');
    const chart = card.querySelector('.chart-container');
    const legend = card.querySelector('.chart-legend');
    
    if (title) {
        setTimeout(() => {
            title.style.animation = 'epicTitleReveal 0.8s ease-out';
        }, 200);
    }
    
    if (chart) {
        setTimeout(() => {
            chart.style.animation = 'chartReveal 1s ease-out';
        }, 400);
    }
    
    if (legend) {
        setTimeout(() => {
            legend.style.animation = 'legendReveal 0.6s ease-out';
        }, 600);
    }
}

function animateBattleCard(card) {
    const title = card.querySelector('.battle-title');
    const sparks = card.querySelectorAll('.spark');
    
    if (title) {
        title.style.animation = 'battleTitleEpic 1s ease-out';
    }
    
    sparks.forEach((spark, index) => {
        setTimeout(() => {
            spark.style.animation = 'sparkEpicReveal 0.5s ease-out';
        }, index * 100);
    });
}

/**
 * Touch Optimizations
 */
function initTouchOptimizations() {
    if ('ontouchstart' in window) {
        const touchElements = document.querySelectorAll(
            '.movement-card, .experience-item, .vs-text, .summary-item'
        );
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function(e) {
                this.classList.add('touch-active');
                
                // Haptic feedback
                if (navigator.vibrate) {
                    navigator.vibrate(10);
                }
                
                // Visual feedback with perfect contrast
                this.style.transform = 'scale(0.98)';
                this.style.transition = 'transform 0.1s ease-out';
                this.style.background = 'rgba(255,255,255,1)';
                this.style.color = '#002D13';
            }, { passive: true });
            
            element.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
                this.style.transform = '';
                setTimeout(() => {
                    this.style.transition = '';
                    this.style.background = '';
                    this.style.color = '';
                }, 100);
            }, { passive: true });
            
            element.addEventListener('touchcancel', function() {
                this.classList.remove('touch-active');
                this.style.transform = '';
                this.style.transition = '';
                this.style.background = '';
                this.style.color = '';
            }, { passive: true });
        });
    }
    
    console.log('ðŸ“± Touch Optimizations: PERFECT MOBILE EXPERIENCE');
}

/**
 * Performance Monitoring
 */
function initPerformanceMonitoring() {
    let frameCount = 0;
    let lastTime = performance.now();
    
    function measureFPS() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
            const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            
            // Adjust animations based on performance
            if (fps < 30) {
                document.body.classList.add('low-performance');
                console.warn('âš ï¸ Low performance detected, optimizing animations');
            } else {
                document.body.classList.remove('low-performance');
            }
            
            // CRITICAL: Always ensure logo visibility regardless of performance
            const logos = document.querySelectorAll('.header-logo, .footer-logo');
            logos.forEach(logo => {
                if (logo) {
                    logo.style.display = 'block';
                    logo.style.opacity = '1';
                    logo.style.visibility = 'visible';
                }
            });
            
            frameCount = 0;
            lastTime = currentTime;
        }
        
        requestAnimationFrame(measureFPS);
    }
    
    // Start monitoring after initial load
    setTimeout(measureFPS, 2000);
    
    console.log('âš¡ Performance Monitor: ACTIVE');
}

/**
 * Utility Functions
 */
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Export functions for external access
window.MovementGuide = {
    activateBattleMode,
    initLogoProtection,
    version: '3.0.0-ultimate-excitement'
};

// Final initialization check
window.addEventListener('load', () => {
    console.log('ðŸŽ¯ ULTIMATE Movement Guide: 100% LOADED!');
    console.log('âœ¨ Features Active: Visual Excitement, Perfect Contrast, Chart.js Performance, Battle Mode');
    console.log('ðŸ›¡ï¸ Logo Protection: MAXIMUM SECURITY');
    console.log('ðŸ’¡ Try clicking the VS button 5 times for BATTLE MODE!');
    
    // Final logo protection
    initLogoProtection();
});
// Dashboard JavaScript for Zendesk Demo Site

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Charts
    initializeCharts();
    
    // Initialize Interactive Elements
    initializeInteractiveElements();
    
    // Initialize Real-time Updates
    initializeRealTimeUpdates();
});

// Chart Initialization
function initializeCharts() {
    // User Growth Chart
    const userGrowthCtx = document.getElementById('userGrowthChart');
    if (userGrowthCtx) {
        const userGrowthChart = new Chart(userGrowthCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Total Users',
                    data: [85000, 92000, 98000, 105000, 112000, 118000, 124000, 130000, 135000, 140000, 145000, 150000],
                    borderColor: '#1f73b7',
                    backgroundColor: 'rgba(31, 115, 183, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#1f73b7',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: '#1f73b7',
                        borderWidth: 1,
                        cornerRadius: 8,
                        displayColors: false
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            color: '#6c757d'
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            color: '#6c757d',
                            callback: function(value) {
                                return (value / 1000) + 'K';
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
        
        // Mark chart as loaded
        userGrowthCtx.classList.add('loaded');
    }
    
    // User Engagement Chart
    const engagementCtx = document.getElementById('engagementChart');
    if (engagementCtx) {
        const engagementChart = new Chart(engagementCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Daily Active Users',
                    data: [12500, 13200, 11800, 14100, 15600, 16800, 14500],
                    backgroundColor: [
                        'rgba(31, 115, 183, 0.8)',
                        'rgba(31, 115, 183, 0.8)',
                        'rgba(31, 115, 183, 0.8)',
                        'rgba(31, 115, 183, 0.8)',
                        'rgba(31, 115, 183, 0.8)',
                        'rgba(31, 115, 183, 0.8)',
                        'rgba(31, 115, 183, 0.8)'
                    ],
                    borderColor: '#1f73b7',
                    borderWidth: 1,
                    borderRadius: 6,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: '#1f73b7',
                        borderWidth: 1,
                        cornerRadius: 8,
                        displayColors: false
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            color: '#6c757d'
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            color: '#6c757d',
                            callback: function(value) {
                                return (value / 1000) + 'K';
                            }
                        }
                    }
                }
            }
        });
        
        // Mark chart as loaded
        engagementCtx.classList.add('loaded');
    }
}

// Interactive Elements
function initializeInteractiveElements() {
    // Chart Control Buttons
    const chartBtns = document.querySelectorAll('.chart-btn');
    chartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons in the same group
            const parent = this.closest('.chart-controls');
            parent.querySelectorAll('.chart-btn').forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Simulate chart update
            simulateChartUpdate(this.textContent);
        });
    });
    
    // Action Buttons
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.querySelector('span:last-child').textContent;
            showNotification(`Action "${action}" clicked! This is a demo.`, 'info');
        });
    });
    
    // Metric Cards Hover Effects
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Simulate Chart Updates
function simulateChartUpdate(timeframe) {
    const notification = document.createElement('div');
    notification.className = 'chart-update-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <span>📊 Chart updated to show ${timeframe} data</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #17a2b8;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 300px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
}

// Real-time Updates Simulation
function initializeRealTimeUpdates() {
    // Update metrics every 5 seconds
    setInterval(() => {
        updateMetrics();
    }, 5000);
    
    // Update activity feed every 10 seconds
    setInterval(() => {
        updateActivityFeed();
    }, 10000);
}

// Update Metrics
function updateMetrics() {
    const metricValues = document.querySelectorAll('.metric-value');
    const metricChanges = document.querySelectorAll('.metric-change');
    
    // Simulate small changes
    metricValues.forEach((value, index) => {
        const currentValue = parseInt(value.textContent.replace(/[^0-9]/g, ''));
        const change = Math.floor(Math.random() * 100) - 50; // Random change between -50 and +50
        
        // Animate the change
        value.style.transform = 'scale(1.1)';
        value.style.color = change > 0 ? '#28a745' : '#dc3545';
        
        setTimeout(() => {
            value.style.transform = 'scale(1)';
            value.style.color = 'var(--text-dark)';
        }, 500);
    });
}

// Update Activity Feed
function updateActivityFeed() {
    const activityList = document.querySelector('.activity-list');
    if (!activityList) return;
    
    const activities = [
        {
            icon: '📱',
            title: 'User Login',
            desc: 'user_' + Math.floor(Math.random() * 1000) + ' logged in from mobile app',
            time: 'Just now'
        },
        {
            icon: '🛒',
            title: 'Purchase Completed',
            desc: 'user_' + Math.floor(Math.random() * 1000) + ' completed $' + (Math.floor(Math.random() * 200) + 50) + ' purchase',
            time: '1 minute ago'
        },
        {
            icon: '📧',
            title: 'Email Sent',
            desc: 'Welcome email sent to user_' + Math.floor(Math.random() * 1000),
            time: '2 minutes ago'
        }
    ];
    
    // Add new activity at the top
    const newActivity = activities[Math.floor(Math.random() * activities.length)];
    const activityItem = document.createElement('div');
    activityItem.className = 'activity-item';
    activityItem.style.opacity = '0';
    activityItem.style.transform = 'translateY(-20px)';
    
    activityItem.innerHTML = `
        <div class="activity-icon">${newActivity.icon}</div>
        <div class="activity-content">
            <div class="activity-title">${newActivity.title}</div>
            <div class="activity-desc">${newActivity.desc}</div>
            <div class="activity-time">${newActivity.time}</div>
        </div>
    `;
    
    activityList.insertBefore(activityItem, activityList.firstChild);
    
    // Animate in
    setTimeout(() => {
        activityItem.style.transition = 'all 0.3s ease';
        activityItem.style.opacity = '1';
        activityItem.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove old activities if too many
    const allActivities = activityList.querySelectorAll('.activity-item');
    if (allActivities.length > 5) {
        const lastActivity = allActivities[allActivities.length - 1];
        lastActivity.style.opacity = '0';
        lastActivity.style.transform = 'translateY(20px)';
        setTimeout(() => {
            if (lastActivity.parentNode) {
                lastActivity.remove();
            }
        }, 300);
    }
}

// Show Notification (if not already defined)
if (typeof showNotification === 'undefined') {
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            max-width: 400px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            removeNotification(notification);
        }, 5000);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            removeNotification(notification);
        });
        
        function removeNotification(notification) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }
}

// Console welcome message for dashboard
console.log(`
📊 Welcome to the Analytics Dashboard Demo!
    
This dashboard showcases how the Zendesk messaging widget
can be integrated into analytics applications for customer support.
    
Features:
- Interactive charts with Chart.js
- Real-time metrics updates
- Activity feed simulation
- Responsive design
- Zendesk widget integration ready
    
To add your Zendesk widget:
1. Get your widget key from Zendesk admin panel
2. Replace the placeholder script in dashboard.html
3. Customize the widget for analytics support context
`);

// Profile links array
const sliceLinks = [
'https://leetcode.com/u/__sandeep9723__/',
'https://www.codechef.com/users/sandeep_wh',
'https://www.geeksforgeeks.org/user/sandeepchtiyn/',
'https://www.naukri.com/code360/profile/Sandeep_reddy'
];

// Full passing effect with particles
const passingEffectPlugin = {
id: 'passingEffect',
beforeDraw: (chart) => {
    const { ctx, chartArea: { left, right, top, bottom } } = chart;
    const centerX = (left + right) / 2;
    const centerY = (top + bottom) / 2;
    const radius = Math.min(right - left, bottom - top) / 2;
    const time = Date.now();
    
    // Main sweeping effect
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((time % 4000) / 4000 * 2 * Math.PI);
    const grad = ctx.createRadialGradient(0, 0, radius*0.3, 0, 0, radius*1.2);
    grad.addColorStop(0, 'rgba(255,255,255,0.8)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.beginPath();
    ctx.arc(0, 0, radius, -Math.PI/10, Math.PI/10);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.globalCompositeOperation = 'screen';
    ctx.fill();
    ctx.restore();

    // Particle effect
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((time % 2000)/2000 * 2 * Math.PI);
    for(let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(radius*0.8 * Math.cos(i*Math.PI/2.5), 
            radius*0.8 * Math.sin(i*Math.PI/2.5), 3, 0, 2*Math.PI);
    ctx.fillStyle = `hsla(${(time/10 % 360)}, 80%, 60%, 0.8)`;
    ctx.fill();
    }
    ctx.restore();
}
};

// Initialize chart
const ctx = document.getElementById('portfolioChart').getContext('2d');
const portfolioChart = new Chart(ctx, {
type: 'pie',
data: {
    labels: ['LeetCode', 'CodeChef', 'GeeksforGeeks', 'Naukri'],
    datasets: [{
    data: [213, 831, 225, 516],
    backgroundColor: ['#E57373', '#64B5F6', '#FFD54F', '#4DB6AC'],
    hoverBackgroundColor: ['#EF5350', '#42A5F5', '#FFCA28', '#26A69A'],
    borderWidth: 3,
    borderColor: '#ffffff',
    hoverOffset: 30,
    hoverBorderWidth: 5,
    hoverShadowOffsetX: 5,
    hoverShadowOffsetY: 5,
    hoverShadowBlur: 15,
    hoverShadowColor: 'rgba(0,0,0,0.2)'
    }]
},
options: {
    responsive: true,
    animation: {
    animateRotate: true,
    animateScale: true,
    duration: 2000,
    easing: 'elasticOut'
    },
    plugins: {
    title: {
        display: true,
        text: 'Problems Solved (2.5k+)',
        font: {
        size: 28,
        family: "'Arial', sans-serif",
        weight: 'bold'
        },
        color: '#333',
        padding: { top: 10, bottom: 10 }
    },
    legend: {
        position: 'top',
        labels: {
        font: { size: 16 },
        padding: 20,
        usePointStyle: true,
        pointStyle: 'circle'
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleFont: { size: 18 },
        bodyFont: { size: 16 },
        cornerRadius: 10,
        displayColors: false,
        callbacks: {
        label: (context) => `${context.label}: ${context.parsed}+ (${((context.parsed/2500)*100).toFixed(1)}%)`
        }
    },
    datalabels: {
        color: '#fff',
        font: { weight: 'bold', size: 18 },
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        formatter: (value) => `${value}+`
    }
    },
    onClick: (evt, elements) => {
    if (elements.length > 0) {
        window.open(sliceLinks[elements[0].index], '_blank');
    }
    }
},
plugins: [passingEffectPlugin, ChartDataLabels]
});

// Sparkle effect
document.getElementById('portfolioChart').addEventListener('mousemove', (e) => {
const rect = e.target.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const sparkle = document.createElement('div');
sparkle.style.position = 'absolute';
sparkle.style.left = `${x}px`;
sparkle.style.top = `${y}px`;
sparkle.style.width = '8px';
sparkle.style.height = '8px';
sparkle.style.background = 'radial-gradient(#fff, transparent)';
sparkle.style.pointerEvents = 'none';
sparkle.style.animation = 'sparkle 0.8s linear';
e.target.parentElement.appendChild(sparkle);

setTimeout(() => sparkle.remove(), 800);
});

console.log('Happy developing ✨')

// 1) Canvas
const canvas = document.querySelector("#genderChart");

// 2) Data
const labels = [
    "Datalogi (LVU)",
    "Ingeniør (LVU)",
    "HUM/SAMF IT (LVU)",
    "KVU IKT",
    "IT-elektronik (KVU)"
];

const men = [81, 85, 69, 45, 95];
const women = [19, 15, 31, 55, 5];

const menColor = "rgba(110, 110, 110, 0.85)";
const womenColor = "rgba(247, 165, 165, 0.9)";

new Chart(canvas.getContext("2d"), {
    type: "bar",
    data: {
        labels,
        datasets: [
            {
                label: "Mænd (%)",
                data: men,
                backgroundColor: menColor,
                borderColor: "rgba(110, 110, 110, 1)",
                borderWidth: 1,
                borderRadius: 10,
                hoverBackgroundColor: "rgba(110, 110, 110, 1)"
            },
            {
                label: "Kvinder (%)",
                data: women,
                backgroundColor: womenColor,
                borderColor: "rgba(247, 165, 165, 1)",
                borderWidth: 1,
                borderRadius: 10,
                hoverBackgroundColor: "rgba(247, 165, 165, 1)"
            }
        ]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        animation: {
            duration: 2000,
            easing: "easeOutBounce",  // TYDELIG animation
            animateScale: true,
            animateRotate: true
        },


        scales: {
            x: {
                ticks: {
                    color: "#1A2A4F",
                    font: {
                        family: "Oswald",
                        size: 14,
                        weight: "600"
                    }
                },
                grid: { display: false }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: "#1A2A4F",
                    font: {
                        family: "Oswald",
                        size: 14
                    }
                },
                grid: { color: "rgba(200,200,200,0.2)" }
            }
        },

        plugins: {
            legend: {
                labels: {
                    color: "#1A2A4F",
                    font: {
                        family: "Oswald",
                        size: 16,
                        weight: "700"
                    }
                }
            },
            tooltip: {
                backgroundColor: "#ffffff",
                titleColor: "#1A2A4F",
                bodyColor: "#333",
                borderColor: "#ccc",
                borderWidth: 1,
                padding: 10
            }
        }
    }
});

console.log("Happy developing ✨");

/* ------------------------------------------------------------
   SCROLL ANIMATION
------------------------------------------------------------- */

const animatedElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));


/* ------------------------------------------------------------
   GRAF 1 — Kreative IT-uddannelser (Horizontal)
------------------------------------------------------------- */
const creativeCanvas = document.querySelector("#creativeChart");

new Chart(creativeCanvas, {
    type: "bar",
    data: {
        labels: [
            "Designteknolog",
            "Digital Konceptudvikling",
            "E-designer AK",
            "Multimediedesigner",
            "PB Design & Business"
        ],
        datasets: [
            {
                label: "Kvinder",
                data: [158, 37, 52, 115, 111],
                backgroundColor: "rgba(247,165,165,0.9)",
                borderColor: "rgba(247,165,165,1)",
                borderWidth: 2,
                borderRadius: 12
            },
            {
                label: "Mænd",
                data: [29, 19, 32, 48, 20],
                backgroundColor: "rgba(26,42,79,0.7)",
                borderColor: "rgba(26,42,79,1)",
                borderWidth: 2,
                borderRadius: 12
            }
        ]
    },
    options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false
    }
});


/* ------------------------------------------------------------
   GRAF 2 — Kønsfordeling på IT-uddannelser
------------------------------------------------------------- */

const genderCanvas = document.querySelector("#genderChart");

new Chart(genderCanvas, {
    type: "bar",
    data: {
        labels: [
            "Datalogi (LVU)",
            "Ingeniør (LVU)",
            "HUM/SAMF IT (LVU)",
            "KVU IKT",
            "IT-elektronik (KVU)"
        ],
        datasets: [
            {
                label: "Mænd (%)",
                data: [81, 85, 69, 45, 95],
                backgroundColor: "rgba(110,110,110,0.85)",
                borderRadius: 10
            },
            {
                label: "Kvinder (%)",
                data: [19, 15, 31, 55, 5],
                backgroundColor: "rgba(247,165,165,0.9)",
                borderRadius: 10
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});


/* ------------------------------------------------------------
   GRAF 3 — Doughnut Chart
------------------------------------------------------------- */

const donutCanvas = document.querySelector("#genderDonut");

new Chart(donutCanvas, {
    type: "doughnut",
    data: {
        labels: ["Kvinder (%)", "Mænd (%)"],
        datasets: [{
            data: [31, 69],
            backgroundColor: [
                "rgba(247,165,165,0.9)",
                "rgba(110,110,110,0.85)"
            ],
            borderRadius: 10,
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "60%"
    }
});


/* ------------------------------------------------------------
   GRAF 4 — Lønudvikling (LINE CHART)
------------------------------------------------------------- */

const salaryCanvas = document.querySelector("#salaryChart");

new Chart(salaryCanvas, {
    type: "line",
    data: {
        labels: ["2021", "2022", "2023", "2024"],
        datasets: [
            {
                label: "Kvinder (IT-løn)",
                data: [42000, 44000, 46000, 49000],
                borderColor: "rgba(247,165,165,1)",
                backgroundColor: "rgba(247,165,165,0.2)",
                borderWidth: 4,
                tension: 0.4,
                fill: true
            },
            {
                label: "Mænd (IT-løn)",
                data: [47000, 49500, 52000, 55000],
                borderColor: "rgba(26,42,79,1)",
                backgroundColor: "rgba(26,42,79,0.2)",
                borderWidth: 4,
                tension: 0.4,
                fill: true
            }
        ]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                labels: {
                    color: "#1A2A4F",
                    font: { size: 16, family: "Oswald" }
                }
            }
        }
    }
});

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
   GRAF 1 — Kreative IT-uddannelser (HENTES FRA DATABASE)
------------------------------------------------------------- */

async function loadCreativePrograms() {
    const response = await fetch("http://localhost:3000/creative-programs");

    // ⭐ TEST API CONNECTION
    console.log("Creative API status:", response.status);

    const data = await response.json();
    console.log("Creative API data:", data);

    const labels = data.map(item => item.name);
    const women = data.map(item => item.women);
    const men = data.map(item => item.men);

    const creativeCanvas = document.querySelector("#creativeChart");

    new Chart(creativeCanvas, {
        type: "bar",
        data: {
            labels,
            datasets: [
                {
                    label: "Kvinder",
                    data: women,
                    backgroundColor: "rgba(247,165,165,0.9)"
                },
                {
                    label: "Mænd",
                    data: men,
                    backgroundColor: "rgba(26,42,79,0.7)"
                }
            ]
        },
        options: {
            indexAxis: "y",
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

loadCreativePrograms();



/* ------------------------------------------------------------
   GRAF 2 — Kønsfordeling på IT-uddannelser (DATABASE)
------------------------------------------------------------- */

async function loadGenderDistribution() {
    const response = await fetch("http://localhost:3000/gender-distribution");

    // ⭐ TEST API CONNECTION
    console.log("Gender API status:", response.status);

    const data = await response.json();
    console.log("Gender API data:", data);

    const labels = data.map(item => item.category);
    const men = data.map(item => item.men);
    const women = data.map(item => item.women);

    const genderCanvas = document.querySelector("#genderChart");

    new Chart(genderCanvas, {
        type: "bar",
        data: {
            labels,
            datasets: [
                {
                    label: "Mænd (%)",
                    data: men,
                    backgroundColor: "rgba(110,110,110,0.85)",
                },
                {
                    label: "Kvinder (%)",
                    data: women,
                    backgroundColor: "rgba(247,165,165,0.9)",
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

loadGenderDistribution();



/* ------------------------------------------------------------
   GRAF 3 — Doughnut (Hardcoded)
------------------------------------------------------------- */

/* ------------------------------------------------------------
   GRAF 3 — Doughnut (DYNAMISK FRA SERVER)
------------------------------------------------------------- */

const donutCanvas = document.querySelector("#genderDonut");

fetch("http://localhost:3000/overall-gender-distribution")
    .then(res => {
        console.log("Donut API status:", res.status);
        return res.json();
    })
    .then(data => {
        console.log("Donut API data:", data);

        // ⭐ Chart.js tegner grafen baseret på SERVER-data
        new Chart(donutCanvas, {
            type: "doughnut",
            data: {
                labels: ["Kvinder (%)", "Mænd (%)"],
                datasets: [{
                    data: [data.women, data.men],
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

        // ⭐ Gør grafen synlig (fade-in havde skjult den)
        donutCanvas.closest(".fade-in")?.classList.add("visible");
    })
    .catch(err => {
        console.error("Fejl i donut-fetch:", err);
    });



/* ------------------------------------------------------------
   GRAF 4 — Lønudvikling (Hardcoded)
-------------------------------------------------------------

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
        maintainAspectRatio: false
    }
})
*/
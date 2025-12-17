
const animatedElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));



function scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}




async function loadCreativePrograms() {
    const response =
        await fetch("http://localhost:3000/creative-programs");
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
                    backgroundColor: "rgba(110,110,110,0.85)"
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



async function loadGenderDistribution() {
    const response =
        await fetch("http://localhost:3000/gender-distribution");
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



function loadDonut() {
    const donutCanvas = document.querySelector("#genderDonut");

    fetch("http://localhost:3000/overall-gender-distribution")
        .then(res => {
            console.log("Donut API status:", res.status);
            return res.json();
        })
        .then(data => {
            console.log("Donut API data:", data);

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

            donutCanvas.closest(".fade-in")?.classList.add("visible");
        })
        .catch(err => {
            console.error("Fejl i donut-fetch:", err);
        });
}



loadCreativePrograms();
loadGenderDistribution();
loadDonut();

function scrollToSection(id) {
    const section = document.querySelector(`#${id}`);
    section.scrollIntoView({ behavior: "smooth" });
}
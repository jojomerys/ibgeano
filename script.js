document.addEventListener("DOMContentLoaded", function () {
    const categorySelect = document.getElementById("categorySelect");
    const dataTable = document.getElementById("dataTable").getElementsByTagName("tbody")[0];

    categorySelect.addEventListener("change", function () {
        const selectedCategory = categorySelect.value;

        fetch("lista_completa.json")
            .then((response) => response.json())
            .then((data) => {
                dataTable.innerHTML = "";

                const selectedData = data[selectedCategory];
                let order = 1;

                selectedData.forEach((item) => {
                    const row = dataTable.insertRow();
                    const positionCell = row.insertCell(0);
                    const nameCell = row.insertCell(1);
                    positionCell.textContent = order++;

                    if (item.estilo === "destacado") {
                        nameCell.classList.add("destacado");
                    }

                    nameCell.textContent = item.nome;
                });
            });
    });

    categorySelect.dispatchEvent(new Event("change"));
});

document.addEventListener("DOMContentLoaded", function () {
    let visitorCount = localStorage.getItem("visitorCount");

    if (visitorCount) {
        visitorCount = parseInt(visitorCount);
        visitorCount += 1;
    } else {
        visitorCount = 1;
    }

    localStorage.setItem("visitorCount", visitorCount);

    const visitorCountElement = document.getElementById("visitorCount");
    visitorCountElement.textContent = `Visitantes: ${visitorCount}`;
});

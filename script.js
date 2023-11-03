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

                    if (item.estilo === "destacado2") {
                        nameCell.classList.add("destacado2");
                    }

                    if (item.estilo === "destacado3") {
                        nameCell.classList.add("destacado3");
                    }

                    nameCell.textContent = item.nome;
                });
            });
    });

    categorySelect.dispatchEvent(new Event("change"));
});

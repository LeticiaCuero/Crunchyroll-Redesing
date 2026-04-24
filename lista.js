const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const clearHistoryButton = document.querySelector(".clear-history-button");
const historyList = document.querySelector(".history-list");

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetTab = button.dataset.tab;

        tabButtons.forEach((item) => {
            item.classList.remove("active");
        });

        tabPanels.forEach((panel) => {
            panel.classList.remove("active");
        });

        button.classList.add("active");

        const activePanel = document.getElementById(targetTab);

        if (activePanel) {
            activePanel.classList.add("active");
        }
    });
});

if (historyList) {
    historyList.addEventListener("click", (event) => {
        const removeButton = event.target.closest(".history-footer button");

        if (!removeButton) {
            return;
        }

        const card = removeButton.closest(".history-card");

        if (card) {
            card.remove();
        }

        if (!historyList.querySelector(".history-card")) {
            historyList.classList.add("empty");
            historyList.innerHTML = "<p>Seu histórico está vazio.</p>";

            if (clearHistoryButton) {
                clearHistoryButton.disabled = true;
                clearHistoryButton.style.opacity = "0.4";
                clearHistoryButton.style.cursor = "not-allowed";
            }
        }
    });
}

if (clearHistoryButton && historyList) {
    clearHistoryButton.addEventListener("click", () => {
        historyList.classList.add("empty");
        historyList.innerHTML = "<p>Seu histórico está vazio.</p>";
        clearHistoryButton.disabled = true;
        clearHistoryButton.style.opacity = "0.4";
        clearHistoryButton.style.cursor = "not-allowed";
    });
}
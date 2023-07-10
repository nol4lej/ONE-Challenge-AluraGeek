export function Modal(text){
    const root = document.getElementById("root")
    const modal = document.createElement("div");
    modal.classList.add("modal")
    modal.innerHTML = `
        <div class="modal__container">
            <h2 class="modal__title">${text}</h2>
        </div>
    `
    root.appendChild(modal)
    modal.classList.add("active")
}
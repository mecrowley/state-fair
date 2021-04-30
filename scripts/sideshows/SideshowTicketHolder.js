const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolder = () => {
    contentTarget.innerHTML += `<div class="person gawker"></div>`
}

eventHub.addEventListener("sideshowTicketPurchased", SideshowTicketHolder)
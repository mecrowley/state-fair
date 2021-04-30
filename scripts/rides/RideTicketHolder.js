const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")


export const RideTicketHolder = () => {
    contentTarget.innerHTML += `<div class="person rider"></div>`
}

eventHub.addEventListener("rideTicketPurchased", RideTicketHolder)
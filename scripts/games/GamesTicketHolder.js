const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")


export const GamesTicketHolder = () => {
    contentTarget.innerHTML += `<div class="person player"></div>`
}

eventHub.addEventListener("gamesTicketPurchased", GamesTicketHolder)
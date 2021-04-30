const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let TicketCount = 0

eventHub.addEventListener("ticketPurchased", event => {
        TicketCount++
        eventHub.dispatchEvent(new CustomEvent("stateChanged"))
    })

export const TicketsPurchased = () => {
    contentTarget.innerHTML = `Total tickets purchased: ${TicketCount}`
}

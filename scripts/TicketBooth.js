import { RideTicketHolder } from "./rides/RideTicketHolder.js"
import { FoodTicketHolder } from "./food/FoodTicketHolder.js"
import { GamesTicketHolder } from "./games/GamesTicketHolder.js"
import { SideshowTicketHolder } from "./sideshows/SideshowTicketHolder.js"

const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", event => {
    if (event.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    } 
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    } 
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "gamesTicket") {
        const gamesEvent = new CustomEvent("gamesTicketPurchased")
        eventHub.dispatchEvent(gamesEvent)
    } 
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
        eventHub.dispatchEvent(sideshowEvent)
    } 
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
    <div class="ticketBooth">
    <button id="rideTicket">Ride Ticket</button>
    <button id="foodTicket">Food Ticket</button>
    <button id="gamesTicket">Games Ticket</button>
    <button id="sideshowTicket">Sideshow Ticket</button>
    </div>
    `
}


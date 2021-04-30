import { RideTicketHolder } from "./rides/RideTicketHolder.js"
import { FoodTicketHolder } from "./food/FoodTicketHolder.js"
import { GamesTicketHolder } from "./games/GamesTicketHolder.js"
import { SideshowTicketHolder } from "./sideshows/SideshowTicketHolder.js"
import { FullPackageTicketHolder} from "./FullPackageTicketHolder.js"

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

eventHub.addEventListener("click", event => {
    if (event.target.id === "fullPackageTicket") {
        const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased")
        eventHub.dispatchEvent(fullPackageEvent)
    } 
})

eventHub.addEventListener("click", event => {
    if (event.target.name === "button") {
        const ticketEvent = new CustomEvent("ticketPurchased")
        eventHub.dispatchEvent(ticketEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
    <div class="ticketBooth">
    <button id="rideTicket" name="button">Ride Ticket</button>
    <button id="foodTicket" name="button">Food Ticket</button>
    <button id="gamesTicket" name="button">Games Ticket</button>
    <button id="sideshowTicket" name="button">Sideshow Ticket</button>
    <button id="fullPackageTicket" name="button">Full Package Ticket</button>
    </div>
    `
}


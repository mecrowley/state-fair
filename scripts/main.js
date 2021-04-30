// Import and invoke the ticket booth component function
import { TicketBooth } from "./TicketBooth.js";
import { TicketsPurchased } from "./TicketsPurchased.js";

const eventHub = document.querySelector("#state-fair")

TicketsPurchased()
TicketBooth()

eventHub.addEventListener("stateChanged", TicketsPurchased)
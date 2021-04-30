const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolder = () => {
    contentTarget.innerHTML += `<div class="person eater"></div>`
}

eventHub.addEventListener("foodTicketPurchased", FoodTicketHolder)
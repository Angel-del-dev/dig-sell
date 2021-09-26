export function gameOver(rewordsArray) {
    let total = 0;
    let points = document.getElementsByTagName("span");
    for(let item of points) {
        const reward = item.id;
        const amount = item.innerHTML;
        for(let resource of rewordsArray) {
            if(resource.reward === reward) {
                const price = resource.price;
                const totalResource = parseInt(amount) * price;
                total += totalResource;
            }
        }
    }
    if(window.confirm("You have earned "+total+"$, Would you like to play again?")) {
        location.reload();
    }
}
export function createRewards() {
    const rewards = [
        {"reward": "Stone", "price": 0.01},
        {"reward": "Iron", "price": 1},
        {"reward": "Steel", "price": 10},
        {"reward": "Emerald", "price": 100},
        {"reward": "Diamond", "price": 1000},
        {"reward": "Ruby", "price": 10000},
        {"reward": "Gold", "price": 20},
        {"reward": "Tin", "price": 1},
        {"reward": "Coal", "price": 0.10}
    ];

    return rewards;
}

export function createBoard() {
    const board = document.getElementById("board");
    const min = 0;
    const max = 24;

    for(let i = min; i <= max; i++) {
        let el = document.createElement("div");
        el.classList.add("ground");
        el.classList.add(i);
        
        board.appendChild(el);
    }
}
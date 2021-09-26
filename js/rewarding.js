import { createRewards } from "./board.js";

export function selectRewards() {
    const rewardsAll = createRewards();
    let end = false;
    const min = 0;
    const max = rewardsAll.length - 1;
    let maxRewardsNum = 25;
    const maxEl=24;
    const minEl=0;

    while(!end) {
        const randPosition = Math.floor(Math.random() * (max - min)) + min;
        const rewardObject = rewardsAll[randPosition].reward;
        let amount = Math.floor(Math.random() * (max - min)) + min;
        const randEl = Math.floor(Math.random() * (maxEl - minEl)) + minEl;

        let currElement = document.getElementsByClassName(randEl);
        currElement = currElement[0];
        if(maxRewardsNum - amount > 0) {
            for(let i = 0; i<=amount; i++) {
                currElement.classList.add(rewardObject);
            }
            maxRewardsNum -= amount;
        }else {
            while(maxRewardsNum > 0) {
                currElement.classList.add(rewardObject);
                maxRewardsNum--;
            }
        }
        
        if(maxRewardsNum === 0) {
            end = true;
        }
    }
    return rewardsAll;
}
export function getRewards(el, rewardList) {
  const classList = el.classList;
  // Check if the element has any classes, its useful if it has more than one materials(clases) "recursive"

  if (classList.length > 1) {
    for(let i = 1 ; i<classList.length; i++){
        for(let item of rewardList) {
            if(item.reward == classList[i]) {
                    let points = document.getElementById(item.reward);
                    let newPoints = parseInt(points.innerHTML);
                    points.innerHTML = newPoints + 1;
                    classList.remove(item.reward);
                    getRewards(el, rewardList);
            }
        }
    }
  }
}

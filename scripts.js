let voteUpButton = document.querySelector(".voteUp");
let voteDownButton = document.querySelector(".voteDown");
let H2votingDisplay = document.querySelector(".votingDisplay");

let theVote = 0;

showVote(); //rufe die function zu arbeit 🏋🏼

voteUpButton.addEventListener("click", () => {
    theVote++;
    showVote();
})

voteDownButton.addEventListener("click", () => {
    theVote--;
    showVote();
})

function showVote() {
    if (theVote < 0) {
        alert("You Cant go Below 0")
    } else {
        H2votingDisplay.innerHTML = theVote;
    }
}
// catches the button to give it the particles animation
let testAnimationParticle = new Particles(".voteUp");

testAnimationParticle.disintegrate();
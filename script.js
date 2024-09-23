let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let comp_score = document.getElementById("computer-score");
let player_score = document.getElementById("player-score");
let next_button = document.getElementById("next-button");
let rules_button = document.getElementById("rules-button");
let close_rules = document.getElementById("close-rules");
let game_rules = document.getElementById("game-rules");
let middle_ele = document.querySelector(".middle-element");
let game = document.getElementById("game");
let head = document.getElementById("head");
let success = document.getElementById("success_page");

let play_ag_button = document.getElementById("play_ag");
let play_ag_button2 = document.getElementById("play_ag_2");


let computer_choice = ["stone", "paper",  "scissor"];
let player_choice;

let newDiv  = document.createElement("div");
let result_container = document.getElementById("result-container");

let win_comp = document.querySelectorAll(".win_comp");
let win_player = document.querySelectorAll(".win_player");
let player_lastcircle = document.getElementById("circle-14");
let computer_lastcircle = document.getElementById("circle-24");
let set_player_image = document.getElementById("player-img");
let set_computer_image = document.getElementById("comp-img");

let win_stat_text = document.getElementById("you_");
let against_text = document.getElementById("against");

const stone_color = "#0074B6";
const paper_color = "#FFA943";
const scissor_color = "#BD00FF";
const stone_image = "images/stone.png";
const  paper_image = "images/paper.png";
const scissor_image = "images/scissor.png";



window.onload = function() {
    if (localStorage.getItem('playerScore')) {
        player_score.textContent = localStorage.getItem('playerScore');
    } else {
        localStorage.setItem('playerScore', '0');
    }

    if (localStorage.getItem('computerScore')) {
        comp_score.textContent = localStorage.getItem('computerScore');
    } else {
        localStorage.setItem('computerScore', '0');
    }
}

function player_wins(player_sel, comp_Sel) {
    player_score.textContent = parseInt(player_score.textContent) + 1;
    localStorage.setItem('playerScore', player_score.textContent);
    // paper.style.visibility = "hidden";
    game.style.display = "none";
    result_container.style.display = "flex";
    player_lastcircle.style.borderColor = stone_color;
    computer_lastcircle.style.borderColor = scissor_color;
    win_comp.forEach(element=>{
        element.style.display = "contents";
    })
    win_player.forEach(element=>{
        element.style.display = "block";
    })
    set_player_image.src  = select_image(player_sel);
    set_computer_image.src = select_image(comp_Sel);
    next_button.style.visibility = "visible";
    rules_button.style.position = "absolute";
    rules_button.style.right = "170px";
    win_stat_text.textContent = "YOU WIN";
    against_text.style.visibility = "visible";
    play_ag_button.textContent = "PLAY AGAIN";
}


function comp_wins(player_sel, comp_Sel) {
    comp_score.textContent = parseInt(comp_score.textContent) + 1;
    localStorage.setItem('computerScore', comp_score.textContent);
    // paper.style.visibility = "hidden";
    game.style.display = "none";
    result_container.style.display = "flex";
    player_lastcircle.style.borderColor = select_color(player_sel);
    computer_lastcircle.style.borderColor = select_color(comp_Sel);
    win_player.forEach(element=>{
        element.style.display = "contents";
    })
    win_comp.forEach(element=>{
        element.style.display = "block";
    })

    next_button.style.visibility = "hidden";
    rules_button.style.position = "absolute";
    rules_button.style.right = "20px";

    set_player_image.src  = select_image(player_sel);
    set_computer_image.src = select_image(comp_Sel);
    win_stat_text.textContent = "YOU LOST";
    against_text.style.visibility = "visible";
    play_ag_button.textContent = "PLAY AGAIN";

}

function tie(player_sel, comp_Sel) {
    // paper.style.visibility = "hidden";
    game.style.display = "none";
    result_container.style.display = "flex";
    player_lastcircle.style.borderColor = select_color(player_sel);
    computer_lastcircle.style.borderColor = select_color(comp_Sel);
    win_player.forEach(element=>{
        element.style.display = "contents";
    })
    win_comp.forEach(element=>{
        element.style.display = "contents";
    })

    set_player_image.src  = select_image(player_sel);
    set_computer_image.src = select_image(comp_Sel);
    next_button.style.visibility = "hidden";
    rules_button.style.position = "absolute";
    rules_button.style.right = "20px";
    win_stat_text.textContent = "TIE UP";
    against_text.style.visibility = "hidden";
    play_ag_button.textContent = "REPLAY";

}

function select_image(choice){
    if (choice === "stone") {
        return  stone_image;
    }
    else  if (choice === "paper") {
        return  paper_image;
    }
    else {
        return  scissor_image;
    }
}

function select_color(choice){
    if (choice === "stone") {
        return  stone_color;
    }
    else   if (choice === "paper") {
        return  paper_color;
    }
    else {
        return  scissor_color;
    }

}

function check_winner(player_sel) {
    const choiceNumber = Math.floor(Math.random() * 3);
    computer_sel = computer_choice[choiceNumber];
    // computer_sel = "scissor";
    if (player_sel === computer_sel) {
        tie(player_sel, computer_sel);
    }
    else if((player_sel === "stone"  && computer_sel === "scissor")){
        // alert('Player won');
        player_wins(player_sel, computer_sel);
    }
    else if((player_sel === "paper" && computer_sel === "stone") ){
        // alert('Player won');
        player_wins(player_sel, computer_sel);
    }
    else if((player_sel === "scissor" && computer_sel === "paper")){
        // alert('Player won');
        player_wins(player_sel, computer_sel);
    }
    else if((player_sel === "scissor"  && computer_sel === "stone") ){
        // alert('Computer won');
        comp_wins(player_sel,  computer_sel);

    }
    else if((player_sel === "stone" && computer_sel === "paper")){
        // alert('Computer won');
        comp_wins(player_sel,  computer_sel);
    }
    else{
        // alert('Computer won');
        comp_wins(player_sel, computer_sel);
    }

}

stone.addEventListener(
    "click", function() {
        player_choice = "stone";
        check_winner(player_choice);
        
    }
)

paper.addEventListener(
    "click", function() {
        player_choice = "paper";
        check_winner(player_choice);
    }
)

scissor.addEventListener(
    "click", function() {
        player_choice = "scissor";
        check_winner(player_choice);
    }
)

rules_button.addEventListener(
    "click", function() {
        game_rules.style.visibility = "visible";
        close_rules.style.visibility = "visible";

    }
)

close_rules.addEventListener(
    "click", function() {
        game_rules.style.visibility = "hidden";
        close_rules.style.visibility = "hidden";

    }
)

play_ag_button.addEventListener(
    "click", function() {
        
        game.style.display = "flex";
        result_container.style.display = "none";
        next_button.style.visibility = "hidden";
        rules_button.style.position = "absolute";
        rules_button.style.right = "20px";
    }
)

play_ag_button2.addEventListener(
    "click", function() {
        
        game.style.display = "flex";
        head.style.display = "flex";
        success.style.display = "none";
        
    }
)

next_button.addEventListener(
    "click", function() {
        result_container.style.display = "none";
        head.style.display = "none";
        success.style.display = "flex";
        next_button.style.visibility = "hidden";
        rules_button.style.position = "absolute";
        rules_button.style.right = "20px";

    }
)

window.onload = function () {
    const drawCard = document.getElementById("btnAcept");
    const btn = document.getElementById("btnSort");
    let cards = document.querySelector("#cards");
    var numCards = [];
    var figure = ["\u2666", "\u2660", "\u2663", "\u2665"];
    var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

    drawCard.addEventListener("click", function () {
        numCards = [];
        var allCards = document.getElementById("input").value;
        cards.innerHTML = " ";

        for (var i = 0; i < allCards; i++) {
            var divi = document.createElement("DIV");
            divi.innerHTML = "<div class='figure1'></div><div class='number'></div><div class='figure2'></div>";
            divi.classList.add("card");
            cards.appendChild(divi);

            var randomCard = Math.floor(Math.random() * 4);
            var random = Math.floor(Math.random() * 13);
            numCards.push(random);

            var figure1 = document.getElementsByClassName("figure1");
            var number = document.getElementsByClassName("number");
            var figure2 = document.getElementsByClassName("figure2");

            if (randomCard == 0) {
                var tag = figure[randomCard];
                figure1[i].innerHTML = tag;
                var num = numbers[random];
                number[i].innerHTML = num;
                var simbolo2 = figure[randomCard];
                figure2[i].innerHTML = simbolo2;
                figure1[i].style.color = "red";
                figure2[i].style.color = "red";
                number[i].style.color = "red";
            }

            else if (randomCard == 1) {
                var tag = figure[randomCard];
                figure1[i].innerHTML = tag;
                var num = numbers[random];
                number[i].innerHTML = num;
                var simbolo2 = figure[randomCard];
                figure2[i].innerHTML = simbolo2;
            }

            else if (randomCard == 2) {
                var tag = figure[randomCard];
                figure1[i].innerHTML = tag;
                var num = numbers[random];
                number[i].innerHTML = num;
                var simbolo2 = figure[randomCard];
                figure2[i].innerHTML = simbolo2;
            }

            else if (randomCard == 3) {
                var tag = figure[randomCard];
                figure1[i].innerHTML = tag;
                var num = numbers[random];
                number[i].innerHTML = num;
                var simbolo2 = figure[randomCard];
                figure2[i].innerHTML = simbolo2;
                figure1[i].style.color = "red";
                figure2[i].style.color = "red";
                number[i].style.color = "red";
            }
        }
    });

    btn.addEventListener("click", function () {
        bubbleSort(numCards);
    });

    function bubbleSort(arr) {
        let wall = arr.length - 1;
        while (wall > 0) {
            for (let i = 0; i <= wall; i++) {
                if (arr[i] > arr[i + 1]) {
                    let empty = arr[i + 1];
                    arr[i + 1] = arr[i];
                    arr[i] = empty;
                    let emptyAux = cards.children[i + 1].innerHTML;
                    cards.children[i + 1].innerHTML = cards.children[i].innerHTML;
                    cards.children[i].innerHTML = emptyAux;
                }
            }
            wall--;
        }
    }
}
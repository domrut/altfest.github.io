const cards = document.querySelector(".commentCards");
const scrollLeftButton = document.querySelector(".scrollLeft");
const scrollRightButton = document.querySelector(".scrollRight");
const ellipse = document.querySelectorAll(".ellipse");
const card = document.querySelectorAll(".card");

const names = Array(12).fill("Rokas Biržys");
const towns = Array(12).fill("London, UK");
const images = Array(12).fill("https://pngimg.com/d/face_PNG11761.png");
const comment = Array(12).fill("One of the most unique city events I have been to. If you are hesitating on visiting this, don’t hesitate - just go.");

let counter = 0;

window.addEventListener("load", () => {
    document.querySelector(".scrollLeft").style.opacity = 0.1;
    ellipse[0].style.opacity = 1;
    names.forEach((el, index) => {
    cards.innerHTML += `
        <div class="d-flex f-direction commentCard">
            <div class="commentCardInner d-flex f-direction j-even">
                <img class="faceImage" src=${images[index]} alt="">
                <h4>${el}</h4>
                <span>${towns[index]}</span>
                <p>${comment[index]}</p>  
            </div>
        </div>`
    })
    card[5].style.backgroundImage = "url(assets/3rd.png)"
    card[4].style.backgroundImage = "url(assets/2nd.png)"
    card[3].style.backgroundImage = "url(assets/1st.png)"
});

scrollRightButton.addEventListener("click", () => {
    ellipse.forEach(el => el.style.opacity = 0.1)
    cards.scrollLeft += 1090;
    if (counter == 3) {
        document.querySelector(".scrollRight").style.opacity = 0.1;
        ellipse[3].style.opacity = 1;
        ellipse[2].style.opacity = 0.1;
    } else {
        document.querySelector(".scrollLeft").style.opacity = 1;
        counter++;
        if (counter === 3) document.querySelector(".scrollRight").style.opacity = 0.1
        ellipse[counter].style.opacity = 1;
    }
})

scrollLeftButton.addEventListener("click", () => {
    ellipse.forEach(el => el.style.opacity = 0.1)
    cards.scrollLeft -= 1090;
    if (counter == 0) {
        document.querySelector(".scrollLeft").style.opacity = 0.1;
        ellipse[0].style.opacity = 1;
        ellipse[1].style.opacity = 0.1;
    } else {
        document.querySelector(".scrollRight").style.opacity = 1;
        counter--;
        if (counter === 0) document.querySelector(".scrollLeft").style.opacity = 0.1
        ellipse[counter].style.opacity = 1;
    }
})


import dishes from "./dishes3.json" assert { type: "json" };
import { stringify } from "./stringify.js";

let totalPrice = 0;
document.getElementById("totalPrice").textContent = "$ " + totalPrice;

/* Creating cards : */

for (let i = 0; i < dishes.length; i++) {
  const tagName = (tab) => {
    let tagName = "";
    for (let k = 0; k < tab.length; k++) {
      tagName += `${tab[k]} `;
    }
    return tagName;
  };

  const diet = (a) => {
    let iTag = "";
    for (let j = 0; j < a.length; j++) {
      if (j < a.length - 1) {
        iTag += `<i class = '${a[j]}'></i> `;
      } else {
        iTag += `<i class = '${a[j]}'></i>`;
      }
    }
    return iTag;
  };
  const elementCard = `
    <div class = "card ${tagName(dishes[i].tagName)}" id = "${stringify(
    dishes[i].name
  )}">
        <div class = "info">
            <div class = "shortDesc">
                <div id = "img${stringify(dishes[i].name)}">
                
                </div>
                <div class = "content">
                    <h2>${dishes[i].name}</h2>
                    <p>${dishes[i].shortDesc}</p>
                    <div class = "diet">
                        ${diet(dishes[i].diet)}
                    </div>
                </div>
            </div>
            <div class = "longDesc">
                <p>${dishes[i].longDesc}</p>
            </div>
        </div>
        <div class = "shop">
            <h3>$ ${dishes[i].price}</h3>
            <div class = "quantity">
                <button id = "minus${stringify(
                  dishes[i].name
                )}" class = "minus">-</button>
                <input type = "number" value = "0" min="0" id = "number${stringify(
                  dishes[i].name
                )}"></input>
                <button id = "add${stringify(
                  dishes[i].name
                )}" class = "plus">+</button>
            </div>
            <button id = "cart${stringify(
              dishes[i].name
            )}" class="cart-button"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    </div>
    `;
  document
    .getElementById("card-container")
    .insertAdjacentHTML("beforeend", elementCard);
  document.getElementById("img" + stringify(dishes[i].name)).style.width =
    "50%";
  document.getElementById("img" + stringify(dishes[i].name)).style.height =
    "140px";
  document.getElementById(
    "img" + stringify(dishes[i].name)
  ).style.backgroundSize = "cover";
  document.getElementById(
    "img" + stringify(dishes[i].name)
  ).style.backgroundPosition = "center";
  document.getElementById(
    "img" + stringify(dishes[i].name)
  ).style.backgroundImage = `url("${dishes[i].img}")`;
  document.getElementById(
    "img" + stringify(dishes[i].name)
  ).style.borderRadius = "14px 0px 0px 0px";

  document
    .getElementById(`minus${stringify(dishes[i].name)}`)
    .addEventListener("click", () => {
      if (
        document.getElementById(`number${stringify(dishes[i].name)}`).value > 0
      ) {
        document.getElementById(
          `number${stringify(dishes[i].name)}`
        ).value -= 1;
      }
    });
  document
    .getElementById(`add${stringify(dishes[i].name)}`)
    .addEventListener("click", () => {
      document.getElementById(`number${stringify(dishes[i].name)}`).value =
        parseInt(
          document.getElementById(`number${stringify(dishes[i].name)}`).value
        ) + 1;
    });
  document
    .getElementById(`cart${stringify(dishes[i].name)}`)
    .addEventListener("click", () => {
      let numberOf = parseInt(
        document.getElementById(`number${stringify(dishes[i].name)}`).value
      );
      console.log(stringify(dishes[i].name));
      let selector = document
        .getElementById("tbody")
        .querySelector(`#shop${stringify(dishes[i].name)}`);
      if (numberOf > 0) {
        if (selector == null) {
          let newTr = document.createElement("tr");
          let tdName = document.createElement("td");
          let tdButton = document.createElement("td");
          let tdPrice = document.createElement("td");
          tdPrice.id = `price${stringify(dishes[i].name)}`;
          let buttonOne = document.createElement("button");
          let buttonTwo = document.createElement("button");
          buttonOne.textContent = "-";
          buttonOne.className = "minus";
          buttonTwo.textContent = "+";
          buttonTwo.className = "plus";
          buttonOne.addEventListener("click", () => {
            if (
              document.getElementById(`shopInput${stringify(dishes[i].name)}`)
                .value > 1
            ) {
              document.getElementById(
                `shopInput${stringify(dishes[i].name)}`
              ).value -= 1;
              document.getElementById(
                `price${stringify(dishes[i].name)}`
              ).textContent =
                "$ " +
                (
                  parseInt(
                    document.getElementById(
                      `shopInput${stringify(dishes[i].name)}`
                    ).value
                  ) * dishes[i].price
                ).toFixed(2);
              // Set price there
              totalPrice -= dishes[i].price;
              document.getElementById("totalPrice").textContent =
                "$ " + totalPrice.toFixed(2);
            } else {
              //Set price there
              totalPrice -= dishes[i].price;
              document.getElementById("totalPrice").textContent =
                "$ " + totalPrice.toFixed(2);
              document
                .getElementById(`shop${stringify(dishes[i].name)}`)
                .remove();
            }
          });
          buttonTwo.addEventListener("click", () => {
            document.getElementById(
              `shopInput${stringify(dishes[i].name)}`
            ).value =
              parseInt(
                document.getElementById(`shopInput${stringify(dishes[i].name)}`)
                  .value
              ) + 1;
            document.getElementById(
              `price${stringify(dishes[i].name)}`
            ).textContent =
              "$ " +
              (
                parseInt(
                  document.getElementById(
                    `shopInput${stringify(dishes[i].name)}`
                  ).value
                ) * dishes[i].price
              ).toFixed(2);
            // Set price there
            totalPrice += parseFloat(dishes[i].price);
            document.getElementById("totalPrice").textContent =
              "$ " + totalPrice.toFixed(2);
          });
          let input = document.createElement("input");
          input.type = "number";
          input.min = "0";
          input.id = `shopInput${stringify(dishes[i].name)}`;
          input.value = numberOf;
          input.readOnly = true;
          tdName.textContent = dishes[i].name;
          tdButton.appendChild(buttonOne);
          tdButton.appendChild(input);
          tdButton.appendChild(buttonTwo);
          tdPrice.textContent = "$ " + (numberOf * dishes[i].price).toFixed(2);
          // Set total Price there OK
          totalPrice += parseFloat(numberOf * dishes[i].price);
          document.getElementById("totalPrice").textContent =
            "$ " + totalPrice.toFixed(2);
          newTr.appendChild(tdName);
          newTr.appendChild(tdButton);
          newTr.appendChild(tdPrice);
          newTr.id = `shop${stringify(dishes[i].name)}`;
          document.getElementById("tbody").appendChild(newTr);
          document.getElementById(
            `number${stringify(dishes[i].name)}`
          ).value = 0;
        } else {
          document.getElementById(
            `shopInput${stringify(dishes[i].name)}`
          ).value =
            parseInt(
              document.getElementById(`shopInput${stringify(dishes[i].name)}`)
                .value
            ) + numberOf;
          document.getElementById(
            `price${stringify(dishes[i].name)}`
          ).textContent =
            "$ " +
            (
              parseInt(
                document.getElementById(`shopInput${stringify(dishes[i].name)}`)
                  .value
              ) * dishes[i].price
            ).toFixed(2);
          // Set TotalPrice there OK
          totalPrice += parseFloat(numberOf * dishes[i].price);
          document.getElementById("totalPrice").textContent =
            "$ " + totalPrice.toFixed(2);
          document.getElementById(
            `number${stringify(dishes[i].name)}`
          ).value = 0;
        }
      }
    });
}
const searchFor = () => {
  const searchValue = document.getElementById("search").value.toLowerCase();

  for (let l = 0; l < dishes.length; l++) {
    const element = document.getElementById(stringify(dishes[l].name));

    if (
      searchValue === "" ||
      dishes[l].name.toLowerCase().includes(searchValue)
    ) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  }
};

document.getElementById("search").addEventListener("input", searchFor);

/* I need to add a div somewhere with all the informations about the dishes added to the cart, give the opportunity to modify it with two buttons.
And do the checkout */
/* For this I need an addEventListener, that listen the shopping cart of each card, when we click on it, it must check how much is in the div associated, if it existe in the tab and them, if not create them */
document.getElementById("shopAddition").style.visibility = "hidden";
document.getElementById("open-cart").addEventListener("click", (e) => {
  if (document.getElementById("shopAddition").style.visibility == "hidden") {
    document.getElementById("shopAddition").style.visibility = "visible";
  } else {
    document.getElementById("shopAddition").style.visibility = "hidden";
  }
});

// adding the dark mode here

var darkModeToggle = document.getElementById("dark-mode-toggle");
var body = document.body;

darkModeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
});

//Expands to long desc when card is clicked
document.querySelectorAll(".shortDesc").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    elem.classList.add("div-hidden");
    elem.classList.remove("div-visible");
    elem.nextElementSibling.classList.remove("div-hidden");
    elem.nextElementSibling.classList.add("div-visible");
  });
});

document.querySelectorAll(".longDesc").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    elem.classList.add("div-hidden");
    elem.classList.remove("div-visible");
    elem.previousElementSibling.classList.remove("div-hidden");
    elem.previousElementSibling.classList.add("div-visible");
  });
});

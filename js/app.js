console.log("app js");

// const budgetValue = document.getElementById("budget-value").innerText;
// console.log(budgetValue);
// const convertBudgetValue = parseInt(budgetValue);
// console.log(convertBudgetValue);

getConverted("budget-value");
getConverted("card-value");
getConverted("left-value");

function getConverted(id) {
  const value = document.getElementById(id).innerText;
  const convertValue = parseInt(value);
  return convertValue;
  // console.log(convertValue);
}

const allButton = document.getElementsByClassName("btn");
console.log(allButton);
for (const btn of allButton) {
  console.log(btn);
  btn.addEventListener("click", function (event) {
    const name = event.target.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;

    const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;
    event.target.setAttribute("disabled", false);

    // console.log(name, price, category);

    const selected = document.querySelector("#selected");
    // console.log(div.innerHTML);

    const div = document.createElement("div");
    div.classList = "flex justify-between  pt-4 ";
    const h2 = document.createElement("h2");
    h2.innerText = name;
    const p1 = document.createElement("p");
    p1.innerText = price;
    const p2 = document.createElement("p");
    p2.innerText = category;

    div.appendChild(h2);
    div.appendChild(p1);
    div.appendChild(p2);
    selected.appendChild(div);

    //   const markup = `  <div>
    //   <p>${name}</p>
    //   <p>${price}</p>
    //   <p>${category}</p>
    // </div>`;
    //   div.innerHTML = markup;
    updateTotalCost(price);
    updateGrandTotalCost();
    updateBudget(price);
    updateCard();
    updateLeft();
  });
}

function updateTotalCost(cost) {
  const totalCost = getConverted("total-cost");
  const sum = totalCost + parseInt(cost);
  document.getElementById("total-cost").innerText = sum;
}

function updateGrandTotalCost(status) {
  const totalCost = getConverted("total-cost");

  // couponCode
  if (status === undefined) {
    document.getElementById("grand-total-cost").innerText = totalCost;
  } else {
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode === "love420") {
      const dicCountPrice = totalCost * 0.2;
      document.getElementById("grand-total-cost").innerText = totalCost - dicCountPrice;
    } else {
      alert("please enter valid coupon code");
    }
  }
}

// update Budget
function updateBudget(cost) {
  const budget = getConverted("budget-value");
  document.getElementById("budget-value").innerText = budget - parseInt(cost);
}

// update card
function updateCard() {
  const card = getConverted("card-value");
  document.getElementById("card-value").innerText = card + 1;
}

// update left
function updateLeft() {
  const left = getConverted("left-value");
  document.getElementById("left-value").innerText = left - 1;
}

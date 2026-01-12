const cuisines = {
  japanese: {
    title: "Японская кухня",
    text: "Искусство баланса, свежести и изящества.<br>В ней главные герои — свежие морепродукты, рис, соевый соус и разнообразные овощи, приготовленные<br>с минимальной термической обработкой, чтобы сохранить натуральный вкус и пользу. Суши, сашими, рамен и темпура — лишь некоторые из знаменитых блюд, которые объединяют традиции и современность.<br>Японская кухня славится своей эстетикой подачи и вниманием к деталям, превращая каждую трапезу<br>в настоящий ритуал.",
    heroImage:
      "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/egupt1.jpg",
    dishes: [
      {
        name: "Суши сет 1",
        price: 1000,
        time: 35,
        image:
          "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/syshu%20set2.png"
      },
      {
        name: "Суши сет 2",
        price: 1100,
        time: 32,
        image:
          "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/sushy%20set1.png"
      }
    ]
  },

  italian: {
    title: "Итальянская кухня",
    text: "Uармония свежих и качественных ингредиентов, простоты<br>и насыщенного вкуса.<br>Здесь каждое блюдо — маленькое произведение искусства, сотканное из оливкового масла, ароматных трав, спелых томатов и свежих сыров. От классической пасты и пиццы<br>до изысканных ризотто и морепродуктов — итальянская кухня поражает разнообразием и дарит истинное гастрономическое наслаждение.<br>Традиции передаются из поколения в поколение,<br>а семейные рецепты придают блюдам неповторимый колорит и душевность.",
    heroImage:
      "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/italia1.jpg",
    dishes: [
      {
        name: "Паста Болоньезе",
        price: 550,
        time: 28,
        image:
          "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/pasta1.png"
      },
      {
        name: "Паста Карбонара",
        price: 600,
        time: 28,
        image:
          "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/pasta2.png"
      }
    ]
  },

  russian: {
    title: "Русская кухня",
    text: "Богатство традиций, простоты и сытных блюд, согревающих в холодные дни.<br>В основе — натуральные продукты: мясо, картофель, капуста, грибы и крупы. Борщ, пельмени, блины, соленья<br>и пироги — блюда, которые передаются из поколения<br>в поколение, даря уют и вкус домашнего тепла.<br>Русская кухня славится своими насыщенными вкусами<br>и щедростью порций, отражая гостеприимство и семейные ценности.",
    heroImage:
      "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/russia1.jpg",
    dishes: [
      {
        name: "Борщ",
        price: 400,
        time: 30,
        image:
          "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/borsh.png"
      },
      {
        name: "Пюре с котлетами",
        price: 360,
        time: 22,
        image:
          "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/pure.png"
      },
      {
        name: "Пельмени",
        price: 400,
        time: 20,
        image:
          "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/pelmeny.png"
      },
      {
        name: "Блинчики",
        price: 300,
        time: 20,
        image:
          "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/blinchiki.png"
      },
      {
        name: "Чай",
        price: 90,
        time: 5,
        image:
          "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/tea.png"
      },
    ]
  },
  mexican: {
    title: "Мексиканская кухня",
    text: "Взрыв ярких вкусов, специй и насыщенных ароматов.<br>Основу составляют кукуруза, фасоль, чили и авокадо.<br>Тако, энчиладас, гуакамоле и сальса — блюда, полные свежести и остроты, отражающие богатую историю<br>и культурное разнообразие Мексики.<br>Мексиканская кухня — праздник цвета и вкуса, где каждый ингредиент играет свою роль в создании уникальных блюд, которые любят по всему миру.",
    heroImage:
      "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/mexica1.jpg",
    dishes: [
      {
        name: "Мексиканская тарелка",
        price: 950,
        time: 35,
        image:
          "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/nachos.png"
      },
      {
        name: "Кока Кола",
        price: 600,
        time: 20,
        image:
          "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/cocacola.png"
      }
    ]
  },
  korean: {
    title: "Корейская кухня",
    text: "Гармония остроты, свежести и богатства текстур.<br>В ней главные роли играют ферментированные продукты, такие как кимчи, а также рис, овощи, морепродукты и мясо. Традиционные блюда — бибимбап, булгоги, пулькоги<br>и ттокпокки — отличаются яркими вкусами<br>и сбалансированными сочетаниями пряностей, сладости<br>и кислинки.<br>Корейская кухня славится своим вниманием к здоровью<br>и разнообразию, а также использованием сезонных ингредиентов и особой эстетикой подачи.",
    heroImage:
      "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/korea1.jpg",
    dishes: [
      {
        name: "Токпокки",
        price: 250,
        time: 30,
        image:
          "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/tokpokki.png"
      },
      {
        name: "Пибимпаб",
        price: 600,
        time: 15,
        image:
          "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/pibimpab.png"
      },
      {
        name: "Рамен",
        price: 600,
        time: 25,
        image:
          "https://raw.githubusercontent.com/TaSamaya2025/Web-design/main/Site4/ramen.png"
      }
    ]
  }
};

let cart = {};

const preview = document.getElementById("preview");
const menu = document.getElementById("menu");
const menuGrid = document.getElementById("menu-grid");
const cartPanel = document.getElementById("cart-panel");

/* ===== ПРЕВЬЮ ===== */
const cuisineCards = document.querySelectorAll('.cuisine-card');
let activeIndex = 0;

function animateCards() {
  cuisineCards.forEach((card, index) => {
    if (index === activeIndex) {
      card.style.width = '400px';          // расширяем текущий
      card.querySelector('img').style.transform = 'scale(1.1)';
    } else {
      card.style.width = '200px';          // сжимаем остальные
      card.querySelector('img').style.transform = 'scale(1)';
    }
  });
  activeIndex = (activeIndex + 1) % cuisineCards.length;
}

// Запускаем анимацию с интервалом
setInterval(animateCards, 3000);
animateCards(); // первый запуск сразу

// Обработчики клика на превью
cuisineCards.forEach(card => {
  card.onclick = () => openMenu(card.dataset.cuisine);
});

// Навигация в меню
document.querySelectorAll(".nav a").forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    switchCuisine(link.dataset.cuisine);
  };
});
/* ===== HEADER ===== */

document.querySelectorAll(".nav a").forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    switchCuisine(link.dataset.cuisine);
  };
});

document.getElementById("cart-btn").onclick = () => {
  cartPanel.classList.toggle("hidden");
};

/* ===== ЗАКАЗ ===== */

document.querySelector(".order-btn").onclick = () => {
  cart = {};
  renderCart();

  // 2. Возвращаем кнопки блюд в исходное состояние
  resetAllDishButtons();

  // 3. Закрываем корзину
  cartPanel.classList.add("hidden");

  // 4. Показываем тост
  const toast = document.getElementById("success-toast");
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 3000);

  // 5. Возвращаемся на превью
  backToPreview();
};

/* ===== ПЕРЕХОД ===== */

function openMenu(cuisine) {
  preview.classList.add("hidden");
  menu.classList.remove("hidden");
  switchCuisine(cuisine);
}

/* ===== КУХНЯ ===== */

function switchCuisine(cuisine) {
  const data = cuisines[cuisine];
  if (!data) return;

  document.getElementById("hero-title").textContent = data.title;
  document.getElementById("hero-text").innerHTML = data.text;
  document.getElementById("hero").style.backgroundImage =
    `url(${data.heroImage})`;

  loadMenu(data.dishes);
}

/* ===== МЕНЮ ===== */

function loadMenu(dishes) {
  menuGrid.innerHTML = "";

  dishes.forEach(dish => {
    const div = document.createElement("div");
    div.className = "dish";

    div.innerHTML = `
      <img src="${dish.image}" alt="${dish.name}">
      <h4>${dish.name}</h4>
      <p>${dish.price} ₽ · ${dish.time} мин</p>
      <button class="add-btn">Добавить</button>
    `;

    const addBtn = div.querySelector(".add-btn");

    addBtn.onclick = () => {
      addToCartByName(dish.name);
      renderDishControls(div, dish.name);
      renderCart();
    };

    menuGrid.appendChild(div);
  });
}

function renderDishControls(dishDiv, dishName) {
  const count = cart[dishName] ? cart[dishName].count : 0;

  dishDiv.querySelector("button.add-btn")?.remove(); // удаляем кнопку Добавить

  // Создаем блок с кнопками минус, плюс и количеством
  const controls = document.createElement("div");
  controls.className = "quantity-controls";

  controls.innerHTML = `
    <button class="decrease">−</button>
    <span class="count">${count}</span>
    <button class="increase">+</button>
  `;

  // Обработчики
  controls.querySelector(".increase").onclick = () => {
    addToCartByName(dishName);
    updateDishControls(dishDiv, dishName);
    renderCart();
  };

  controls.querySelector(".decrease").onclick = () => {
    removeFromCartByName(dishName);
    updateDishControls(dishDiv, dishName);
    renderCart();
  };

  dishDiv.appendChild(controls);
}

function updateDishControls(dishDiv, dishName) {
  const count = cart[dishName] ? cart[dishName].count : 0;
  const controls = dishDiv.querySelector(".quantity-controls");

  if (count === 0) {
    // Если кол-во 0 — заменяем на кнопку "Добавить"
    controls.remove();
    const addBtn = document.createElement("button");
    addBtn.className = "add-btn";
    addBtn.textContent = "Добавить";
    addBtn.onclick = () => {
      addToCartByName(dishName);
      renderDishControls(dishDiv, dishName);
      renderCart();
    };
    dishDiv.appendChild(addBtn);
  } else {
    controls.querySelector(".count").textContent = count;
  }
}

function addToCartByName(dishName) {
  const dish = findDishByName(dishName);
  if (!dish) return;

  if (!cart[dishName]) {
    cart[dishName] = { ...dish, count: 1 };
  } else {
    cart[dishName].count++;
  }
}

function removeFromCartByName(dishName) {
  if (cart[dishName]) {
    cart[dishName].count--;
    if (cart[dishName].count <= 0) {
      delete cart[dishName];
    }
  }
}

// Для удобства поиск блюда по имени в текущей кухне
function findDishByName(name) {
  for (const cuisine in cuisines) {
    const dish = cuisines[cuisine].dishes.find(d => d.name === name);
    if (dish) return dish;
  }
  return null;
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const orderBtn = document.querySelector(".order-btn"); // кнопка "Оформить заказ"
  cartItems.innerHTML = "";

  let total = 0;
  let maxTime = 0;
  let totalCount = 0;

  Object.values(cart).forEach(item => {
    total += item.price * item.count;
    maxTime = Math.max(maxTime, item.time);
    totalCount += item.count;

    const li = document.createElement("li");
    li.textContent = `${item.name} × ${item.count}`;
    cartItems.appendChild(li);
  });

  document.getElementById("total-price").textContent = total;
  document.getElementById("total-time").textContent = maxTime;
  document.getElementById("cart-count").textContent = totalCount;

  if (totalCount === 0) {
    cartItems.innerHTML = "<li>Корзина пуста</li>";
    orderBtn.disabled = true;           // Отключаем кнопку
  } else {
    orderBtn.disabled = false;          // Включаем кнопку
  }
}

function resetAllDishButtons() {
  document.querySelectorAll(".dish").forEach(dishDiv => {
    // Удаляем quantity-controls если есть
    dishDiv.querySelector(".quantity-controls")?.remove();

    // Если кнопки "Добавить" нет — создаём заново
    if (!dishDiv.querySelector(".add-btn")) {
      const addBtn = document.createElement("button");
      addBtn.className = "add-btn";
      addBtn.textContent = "Добавить";

      const dishName = dishDiv.querySelector("h4").textContent;

      addBtn.onclick = () => {
        addToCartByName(dishName);
        renderDishControls(dishDiv, dishName);
        renderCart();
      };

      dishDiv.appendChild(addBtn);
    }
  });
}

function backToPreview() {
  menu.classList.add("hidden");
  preview.classList.remove("hidden");

  // Сброс активной анимации превью
  activeIndex = 0;
  animateCards();
}



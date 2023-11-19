const productString = products.map((e) => {
  return `
        <div class="bg-white item-card flex flex-col justify-between w-[350px] max-w-[350px] h-[500px]">
            <div class="flex justify-center h-[320px]">
                <img class="p-5" src="${e.imageProcuct}" alt="${e.title}" >
            </div>
            <div class="p-3 font-bold border-t-[4px] border-black truncate">
                ${e.title}
            </div>
            <div class="p-3">
                <div class="flex w-full justify-center text-2xl font-bold">$${e.price}</div>
            </div>
            <div class="w-full flex justify-center pb-5">
              <button>Buy Now</button>
            </div>
        </div>
    `;
});
document.getElementById("item-count").innerHTML = productString.join("");

const menuLinksString = menuLink.map((e) => {
  return `<a href="${e.link}"><li>${e.name}</li></a>`;
});
document.getElementById("menu-link").innerHTML = menuLinksString.join("");

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
  },
});

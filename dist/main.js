"use strict";
// --- Mobile Menu ---
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}
// --- Stats Counter Animation ---
function animateCounter(element, target, duration = 1200) {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    function update() {
        start += step;
        if (start >= target) {
            element.textContent = target.toString();
        }
        else {
            element.textContent = start.toString();
            requestAnimationFrame(update);
        }
    }
    update();
}
document.querySelectorAll(".counter").forEach(counter => {
    const target = parseInt(counter.dataset.count || "0", 10);
    animateCounter(counter, target);
});
const products = [
    { title: "Ceiling Light", price: "$75.00", oldPrice: "$120.00", image: "src/assets/images/light.jpg" },
    { title: "Wood Chair", price: "$50.00", oldPrice: "$70.00", image: "src/assets/images/woodchair.png" },
    { title: "Papper Cupboard", price: "$105.00", oldPrice: "$120.00", image: "src/assets/images/Pappercupboard.jpg" },
    { title: "Ole Gundorse Spring Bed", price: "$82.00", oldPrice: "$100.00", image: "src/assets/images/blackbed.jpg" },
    { title: "Treos Seroes 911", price: "$200.00", oldPrice: "$210.00", image: "src/assets/images/treos.jpg" },
    { title: "Multi Bilderman Slubber", price: "$45.00", oldPrice: "$60.00", image: "src/assets/images/bildman.jpg" },
    { title: "XORA Corner Desk", price: "$320.00", oldPrice: "$325.00", image: "src/assets/images/comer.jpg" },
    { title: "Black Forest Series Wood", price: "$225.00", oldPrice: "$240.00", image: "src/assets/images/child.jpg" }
];
const slider = document.getElementById("product-slider");
const dots = document.getElementById("slider-dots");
const prevBtn = document.getElementById("slider-prev");
const nextBtn = document.getElementById("slider-next");
let currentSlide = 0;
const visibleCards = () => window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;
function renderProducts() {
    slider.innerHTML = "";
    products.forEach((product, idx) => {
        const card = document.createElement("div");
        card.className = "min-w-[220px] bg-white rounded-lg shadow-lg p-4 snap-center transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col items-center";
        card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="w-full h-32 object-cover rounded mb-2" />
      <h3 class="font-semibold text-lg mb-1">${product.title}</h3>
      <div class="flex gap-2 items-center">
        <span class="text-primary font-bold">${product.price}</span>
        ${product.oldPrice ? `<span class="line-through text-gray-400 text-sm">${product.oldPrice}</span>` : ""}
      </div>
    `;
        slider.appendChild(card);
    });
}
function renderDots() {
    dots.innerHTML = "";
    const total = Math.ceil(products.length / visibleCards());
    for (let i = 0; i < total; i++) {
        const dot = document.createElement("button");
        dot.className = "w-3 h-3 rounded-full bg-gray-400 hover:bg-primary transition";
        if (i === currentSlide)
            dot.classList.add("bg-primary");
        dot.onclick = () => goToSlide(i);
        dots.appendChild(dot);
    }
}
function goToSlide(idx) {
    var _a;
    currentSlide = idx;
    const cardWidth = ((_a = slider.querySelector("div")) === null || _a === void 0 ? void 0 : _a.clientWidth) || 220;
    slider.scrollTo({ left: cardWidth * visibleCards() * idx, behavior: "smooth" });
    renderDots();
}
prevBtn.addEventListener("click", () => {
    if (currentSlide > 0)
        goToSlide(currentSlide - 1);
});
nextBtn.addEventListener("click", () => {
    const maxSlide = Math.ceil(products.length / visibleCards()) - 1;
    if (currentSlide < maxSlide)
        goToSlide(currentSlide + 1);
});
window.addEventListener("resize", () => {
    renderDots();
    goToSlide(0);
});
renderProducts();
renderDots();
const testimonials = [
    {
        name: "Josh Smith",
        role: "Manager of The New York Times",
        text: "They have a perfect touch for making something so professional, interesting and useful for a lot of people.",
        image: "src/assets/images/person.jpg"
    },
    {
        name: "Anna Lee",
        role: "Interior Designer",
        text: "FurniShop's products are top-notch and their service is excellent. Highly recommended!",
        image: "src/assets/images/person2.jpg"
    }
];
let testimonialIdx = 0;
const testimonialDiv = document.getElementById("testimonial");
function renderTestimonial() {
    const t = testimonials[testimonialIdx];
    testimonialDiv.innerHTML = `
    <div class="flex items-center gap-4 mb-4">
      <img src="${t.image}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover"/>
      <div>
        <div class="font-semibold">${t.name}</div>
        <div class="text-xs text-gray-500">${t.role}</div>
      </div>
    </div>
    <div class="italic text-gray-700">"${t.text}"</div>
  `;
}
document.getElementById("testimonial-prev").addEventListener("click", () => {
    testimonialIdx = (testimonialIdx - 1 + testimonials.length) % testimonials.length;
    renderTestimonial();
});
document.getElementById("testimonial-next").addEventListener("click", () => {
    testimonialIdx = (testimonialIdx + 1) % testimonials.length;
    renderTestimonial();
});
renderTestimonial();
// --- Animate Entrances ---
window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".animate-fade-in").forEach((el, i) => {
        el.style.opacity = "0";
        setTimeout(() => {
            el.style.transition = "opacity 0.8s";
            el.style.opacity = "1";
        }, 200 * i);
    });
});

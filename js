var slides = document.querySelector(".slides"),
  slide = document.querySelectorAll(".slides li");
(currentIdx = 0),
  (slideCount = slide.length),
  (prevBtn = document.querySelector(".prev")),
  (slideWidth = 300),
  (slideMargin = 30),
  (nextBtb = document.querySelector(".next"));

slide.style.width =
  (sildeWidth + slideMargin) * sildeCount - slideMargin + "px";

function moveSlide(num) {
  slides.style.left = -num * 330 + "px";
  currentIdx = num;
}
nextBtn.addEventListener("click", function () {
  if (currentIdx < slideCount - 3) {
    moveSlide(currentIdx + 1);
    console.log(currentldx);
  } else {
    moveSlide(0);
  }
});
prevBtn.addEventListener("click", function () {
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
  } else {
    moveSlide(slideCount - 3);
  }
});

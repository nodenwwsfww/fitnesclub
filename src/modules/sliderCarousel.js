export default class SliderCarousel {
    constructor({
        main,
        wrap,
        next,
        prev,
        position = 0,
        slidesToShow = 5,
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = this.wrap.querySelectorAll(".slide");
        this.slidesCount = this.slides.length;

        this.next = document.querySelector(next);

        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            slideWidth: Math.floor(100 / +this.slidesToShow)
        };

        this.init();
    }
    init() {
        this.addClass();
        this.addStyle();

        if (!this.prev || !this.next) {
            this.addArrow();
        }
        this.controlSlider();
    }

    addClass() {
        this.main.classList.add("glo-slider"); // change
        this.wrap.classList.add("glo-slider__wrap"); // change

        for (const slide of this.slides) {
            slide.classList.add("glo-slider__item"); // change
        }
    }
    addStyle() {
        const style = document.createElement("style");
        style.id = "sliderCarousel-style";
        style.textContent = `
        .glo-slider {
            overflow: hidden !important;
        }
        .glo-slider__wrap {
          display: flex !important;
          transition: transform 0.5s !important;
          will-change: transform !important;
        }
        .glo-slider__item {
          flex: 0 0 ${this.options.slideWidth}% !important;
        }
      `;

        // И возможно для .glo-slider__item добавить margin: auto 0 !important;

        document.head.append(style);
    }
    controlSlider() {
        this.prev.addEventListener("click", this.prevSlide.bind(this));
        this.next.addEventListener("click", this.nextSlide.bind(this));
    }

    prevSlide() {
        if (this.options.position <= 0) return;
        --this.options.position;
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
        this.arrowHandler();
    }
    nextSlide() {
        if (this.options.position > this.slidesCount - (this.slidesToShow + 1)) return;

        ++this.options.position;
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
        this.arrowHandler();

    }
    arrowHandler() {
        this.next.style.display = this.prev.style.display = "block";

        if (this.options.position <= 0) this.prev.style.display = "none";
        if (this.options.position > this.slidesCount - (this.slidesToShow + 1)) this.next.style.display = "none";
    }
}
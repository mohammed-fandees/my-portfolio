class Works {
  constructor(number, works) {
    this.number = number;
    this.works = works;
  }

  numberOfWorks() {
    this.number.innerHTML = `(${this.works})`;
  }
}

new Works(
  document.querySelector("#length"),
  document.querySelectorAll(".work").length
).numberOfWorks();
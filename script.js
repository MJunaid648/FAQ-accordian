const accordian = document.getElementsByClassName("content-container");

for (var i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    console.log("aa");
    this.classList.toggle("active");
    console.log(this.classList)
  });
}

const print_btn = document.getElementById("print-btn");
const open_btn = document.getElementById("open-btn");
const ordo = document.getElementById("ordo");

print_btn.addEventListener("click", () => {
    print();
});

open_btn.addEventListener("click", () => {
  open(ordo.src);
});

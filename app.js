let metin = "javascript";
const container = document.getElementById("buttonContainer");
const text = document.querySelector(".text");
const kontrol = document.querySelector(".kontrol");
const tahmin = document.querySelector(".tahmin");
const yok = document.querySelector(".yok");
let olmayanHarfler = [];

for (let i = 0; i < metin.length; i++) {
  const button = document.createElement("button");
  button.className = "harfButonu";
  button.textContent = metin[i];
  container.appendChild(button);
}

kontrol.addEventListener("click", () => {
  const harfliButonlar = document.querySelectorAll(".harfButonu");
  const girilenHarf = text.value.toLowerCase();
  let harfBulundu = false;

  harfliButonlar.forEach((button) => {
    if (button.textContent.toLowerCase() === girilenHarf) {
      button.style.color = "white";
      harfBulundu = true;
    }
  });

  if (!harfBulundu) {
    olmayanHarfler.push(girilenHarf);
    yok.textContent = olmayanHarfler.join(", ");
  }
  text.value = "";
  text.focus();
});
// tahmin etme
tahmin.addEventListener("click", () => {
  let tahminEt = prompt("Tahmininizi Giriniz...");
  if (tahminEt === metin) {
    alert("TEBRİKLER DOĞRU TAHMİN");
    const harfliButonlar = document.querySelectorAll(".harfButonu");
    harfliButonlar.forEach((button) => {
      button.style.color = "white";
    });
  } else {
    alert("YANLIŞ TAHMİN ETTİN:(");
  }
});

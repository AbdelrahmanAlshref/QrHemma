let shorten_link = document.getElementById("shorten_link");
let copy = document.getElementById("copy");
const shortBtn = document.getElementById("short-btn");

shortBtn.addEventListener("click", shortenUrl);
function shortenUrl() {
  var originalUrl = document.getElementById("originalUrl").value;
  var apiUrl =
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);

  fetch(apiUrl)
    .then((response) => response.text())
    .then((data) => {
      shorten_link.value = data;
    })
    .catch((error) => {
      shorten_link.value = "Error : Unable to shorten URL!";
    });
}

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(shorten_link.value);
  copy.innerHTML = "Copied!";
  setTimeout(() => {
    copy.innerHTML = "Copy";
  }, 10000);
});

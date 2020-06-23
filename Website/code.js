let size = window
  .getComputedStyle(document.body, ":after")
  .getPropertyValue("content");

if (size == "tablet-landscape") {
  console.log("a");
}

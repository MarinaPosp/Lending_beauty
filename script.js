function openTab(evt, elID) {
  // Get all elements with class="active" and remove them
  var activeTabContent = document.getElementsByClassName("active");
  while (activeTabContent.length) {
    activeTabContent[0].classList.remove("active");
  }
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(elID).classList.add("active");
  evt.currentTarget.classList.add("active");
}

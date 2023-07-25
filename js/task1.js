const messageEl = document.querySelector(".js-alert");
messageEl.addEventListener("click", onNotificationClick);

function showNotification() {
    messageEl.classList.add('is-visible')
};
showNotification()
function hideNotification() {
    messageEl.classList.remove('is-visible')
};
function onNotificationClick() {
    hideNotification()
};
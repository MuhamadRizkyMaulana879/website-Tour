//menampilkan Popupp//
document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const popup = document.getElementById("popup");
    popup.classList.remove("hidden");
});
    
// Tutup Popup//
document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").classList.add("hidden");
});
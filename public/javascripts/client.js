const restartButton = document.getElementById('restartButton');
const reloadButton = document.getElementById('reloadButton');
const status = document.getElementById('status')
restartButton.addEventListener('click', function (e) {
    fetch("/restart").then()
});

function reloadServerStatus() {
    fetch("/status").then(response => response.json()).then(data => {
        if (data) {
            status.textContent = "Status: Active"
        } else {
            status.textContent = "Status: Inactive"
        }
    });
}

reloadServerStatus()
reloadButton.addEventListener('click', function (e) {
    status.textContent = "Status: Loading"
    reloadServerStatus()
})
;

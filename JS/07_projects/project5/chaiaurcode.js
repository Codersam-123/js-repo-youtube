const insert = document.getElementById("insert");

// here we targeted whole window and put a event on it
// and also created a div by using js
window.addEventListener("keydown", (e) => {
    insert.innerHTML = `
    <div class= "color">
        <table>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === " " ? "space": e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `
})
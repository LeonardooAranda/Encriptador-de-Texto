function encryptText() {
    let text = document.getElementById("inputText").value;
    if (text) {
        let encryptedText = text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        displayResult(encryptedText);
    } else {
        displayNoMessage();
    }
}

function decryptText() {
    let text = document.getElementById("inputText").value;
    if (text) {
        let decryptedText = text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        displayResult(decryptedText);
    } else {
        displayNoMessage();
    }
}

function copyToClipboard() {
    const textToCopy = document.getElementById("outputText").textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        showNotification("🚀Texto copiado al portapapeles");
    });
}

function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;

const outputArea = document.getElementById("outputArea");
outputArea.appendChild(notification);

setTimeout(() => {
    notification.classList.add("show");
}, 100); 

setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
        outputArea.removeChild(notification);
    }, 500); 
}, 3000); 
}



function displayResult(text) {
    document.getElementById("noMessageContainer").style.display = "none";
    document.getElementById("outputText").style.display = "block";
    document.getElementById("outputText").textContent = text;
    document.getElementById("copyButton").style.display = "inline-block";
}

function displayNoMessage() {
    document.getElementById("noMessage").style.display = "block";
    document.getElementById("outputText").style.display = "none";
    document.getElementById("copyButton").style.display = "none";
}


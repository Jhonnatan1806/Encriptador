/**
 * Requisitos:
 * Debe funcionar solo con letras minúsculas
 * No deben ser utilizados letras con acentos ni caracteres especiales
 * Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
 *
 * Reglas:
 * La letra "e" es convertida para "enter"
 * La letra "i" es convertida para "imes"
 * La letra "a" es convertida para "ai"
 * La letra "o" es convertida para "ober"
 * La letra "u" es convertida para "ufat
 */
const encrypt = (mensaje) => {
    return mensaje
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
};

const decrypt = (mensaje) => {
    return mensaje
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
};

const updateTitleResult = (text) => {
    const titleResult = document.getElementById("title-result");
    titleResult.textContent = text;
    titleResult.classList.add("left-text");
};

const removeItems = () => {
    const messageResult = document.getElementById("message-result");
    const imageResult = document.getElementById("img-result");
    messageResult.classList.add("hidden");
    imageResult.classList.add("hidden");
};

const handleEncrypt = () => {
    const message = document.getElementById("input").value;
    const encryptedMessage = encrypt(message);
    updateTitleResult(encryptedMessage);
    removeItems();
};

const handleDecrypt = () => {
    const message = document.getElementById("input").value;
    const decryptedMessage = decrypt(message);
    updateTitleResult(decryptedMessage);
    showErrorMessage();
};

const copyText = () => {
    const titleResult = document.getElementById("title-result");
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = titleResult.textContent;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
};

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-encrypt").addEventListener("click", handleEncrypt);
    document.getElementById("btn-decrypt").addEventListener("click", handleDecrypt);
    document.getElementById("btn-copy").addEventListener("click", copyText);
});
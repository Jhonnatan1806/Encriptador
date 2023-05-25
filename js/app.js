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

const updateResult = (text) => {
    const messageResult = document.querySelector(".result__message");
    messageResult.textContent = text;
    messageResult.classList.add("result__message--encrypted");
};

const removeItems = () => {
    const result = document.querySelector(".result");
    const imageResult = document.querySelector(".result__img");
    const titleResult = document.querySelector(".result__title");
    const btnCopy = document.getElementById("btn-copy");
    result.classList.add("justify-start");
    titleResult.classList.add("hidden");
    imageResult.classList.add("hidden");
    btnCopy.classList.remove("hidden");
};

const handleEncrypt = () => {
    const message = document.getElementById("input").value;
    const encryptedMessage = encrypt(message);
    updateResult(encryptedMessage);
    removeItems();
};

const handleDecrypt = () => {
    const message = document.getElementById("input").value;
    const decryptedMessage = decrypt(message);
    updateResult(decryptedMessage);
    removeItems();
};

const copyText = () => {
    const titleResult = document.querySelector(".result__message");
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
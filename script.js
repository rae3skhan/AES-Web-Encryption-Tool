document.addEventListener("DOMContentLoaded", () => {
    const encrpytButton = document.getElementById("encryptButton");
    const decryptButton = document.getElementById("decryptButton");
    const output = document.getElementById("output");

    encrpytButton.addEventListener("click", () => {
        const plaintext = document.getElementById("plaintext").value;
        if (plaintext === "") {
            output.textContent = "Please enter some Plaintext.";
            return;
        }
        try {
            const ciphertext = encrypt(plaintext);
            output.textContent = `Ciphertext: ${ciphertext}`;
        } catch (error) {
            output.textContent = `Error: ${error.message}`;
        }
    });

    decryptButton.addEventListener("click", () => {
        const ciphertext = document.getElementById("ciphertext").value;
        if (ciphertext === "") {
            output.textContent = "Please enter some Ciphertext.";
            return;
        }
        try {
            const plaintext = decrypt(ciphertext);
            output.textContent = `Plaintext: ${plaintext}`;
        } catch (error) {
            output.textContent = `Error: ${error.message}`;
        }
    });
});

function encrypt(plaintext) {
    const secretKey =
        "mY29udGVudCBpcyBub3QgcmVsZXZhbnQgdG8gdGhlIHByb2JsZW0u" + "UmFlM3NraGFu";
    const ciphertext = CryptoJS.AES.encrypt(plaintext, secretKey).toString();
    return ciphertext;
}

function decrypt(ciphertext) {
    const secretKey =
        "mY29udGVudCBpcyBub3QgcmVsZXZhbnQgdG8gdGhlIHByb2JsZW0u" + "UmFlM3NraGFu";
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
}

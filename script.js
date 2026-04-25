function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('open');
    
    // Menjalankan efek mengetik setelah amplop terbuka
    setTimeout(typeWriter, 600);
}

const message = "Eh da ex di terusken kuliah? ";
let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typing-text").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

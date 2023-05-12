function readText(element) {
    const text = element.textContent;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
}

function stopRead() {
    const synth = window.speechSynthesis;
    synth.cancel();
}
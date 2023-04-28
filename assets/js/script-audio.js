function readText(element) {
    const text = element.textContent;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
}

function stopRead(element) {
    const text = element.textContent;
    const synth = window.speechSynthesis;
    synth.cancel();
}
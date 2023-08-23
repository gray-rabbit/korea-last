function synth(txt: string, rate = 1, pitch = 1, lang = "ko-KR") {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(txt);
    utterance.lang = lang;
    utterance.rate = rate;
    utterance.pitch = pitch;
    synth.speak(utterance);
}
function make_recognizor() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
    const SpeechRecognitionEvent =
        window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
    // const console.log(window.webkitSpeechRecognition);
    const recognition = new SpeechRecognition();
    const speechRecognitionList = new SpeechGrammarList();
    const colors = ['가', '나', '다', '라', '마', '바', '사', '아', '자', '읔' /* … */];
    const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(' | ')};`;
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.continuous = false;
    recognition.lang = 'ko-KR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    return recognition;
}
export { synth, make_recognizor }
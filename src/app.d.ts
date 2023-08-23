// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	interface Window {
		SpeechRecognition: typeof SpeechRecognition;
		SpeechGrammarList: typeof SpeechGrammarList;
		webkitSpeechRecognition: typeof SpeechRecognition;
		webkitSpeechGrammarList: typeof SpeechGrammarList;
		SpeechRecognitionEvent: typeof SpeechRecognitionEvent;
		webkitSpeechRecognitionEvent: typeof SpeechRecognitionEvent;
	}
}

export { };

import Speech from 'speak-tts';

const speech = new Speech();

let speaker = speech.init({
  volume: 1,
  lang: 'es-US',
  rate: 1,
  pitch: 1,
  splitSentences: true,
  listeners: {
    onvoiceschanged: voices => {},
  },
});

function speak(customText) {
  speaker.then(() => {
    speech
      .speak({
        text: customText,
        queue: false, // current speech will be interrupted,
        listeners: {
          onstart: () => {
            console.log('Start utterance');
          },
          onend: () => {
            console.log('End utterance');
          },
          onresume: () => {
            console.log('Resume utterance');
          },
          onboundary: event => {
            console.log(event.name + ' boundary reached after ' + event.elapsedTime + ' milliseconds.');
          },
        },
      })
      .then(() => {
        console.log('Success !');
      })
      .catch(e => {
        console.error('An error occurred :', e);
      });
  });
}

export default speak;

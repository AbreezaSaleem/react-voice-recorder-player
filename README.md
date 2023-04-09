## react-voice-recorder-player

<div align="center">
  <img width="500px" height="250px" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODVhOTNhNjNmN2M0NGY2ZDBhMjlmNGY3ODk3ZDY2MjcyN2I4NzAyOSZjdD1n/fMiIkkwEPGvm1MUhaM/giphy.gif" />
</div>
</div>

Say goodbye to boring audio elments and hello to interactive voice recording! `react-voice-recorder-player` is a React component that lets users record and playback their voice directly in the browser. It even includes a waveform graph that shows the audio being captured and played back in real-time.

`react-voice-recorder-player` is an ultra light-weight component. The package size is only `164 kB` meaning it won't add unnecessary bulk to your application. And the best part is, its completely customizable! You can easily change the appearance of the component to fit your application's unique design.

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install react-voice-recorder-player --save
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add react-voice-recorder-player
```

## See it in action!

Check out the [CodePen demo](https://codesandbox.io/s/react-voice-recorder-player-example-gtod60) to see the `VoiceRecorder` component in action. This demo is a great starting point for customizing the component to fit your application's unique design.

## Getting Started

Using the VoiceRecorder component is a breeze. Simply import it into your React application like so:

```js
import React from 'react';
import { VoiceRecorder } from 'react-voice-recorder-player';

function App() {
  return (
    <div>
      <h1>React Voice Recorder</h1>
      <VoiceRecorder />
    </div>
  );
}

export default App;
```

The `VoiceRecorder` component will provide your users with an intuitive MP3-like interface, complete with record, play, pause, and stop buttons.

## Points to note
- The `VoiceRecorder` component uses the [MediaRecorder API](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder) to record audio. This means that the component will only work in browsers that support this API. You can check out the [browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder#browser_compatibility) to see which browsers support this API.
- There is no limit to the length of the audio that can be recorded. However, the longer the audio, the thinner the waveform graph will be. You can adjust this by increasing the width of the component.
- And after you're done recording you'll see a download button that lets your users download the audio file to their computer. If you want to disable this feature, simply pass in `false` to the `downloadable` prop. If you'd like to obtain the audio file link programmatically, you can pass in a callback function to the `onAudioDownload` prop. This callback function will be called with the audio file blob as an argument.

## Props

| Prop name               | Description                                                                                      | Type |
|-------------------------|--------------------------------------------------------------------------------------------------|---------------|
| `mainContainerStyle`     | Style object for the container of the whole component.                                          |        `CSSProperties`        |
| `height`                | Height of the component.                                                                         |        `number,string`        |
| `width`                 | Width of the component.                                                                          |      `number,string`          |
| `controllerContainerStyle` | Style object for the container of the controller buttons.                                      |       `CSSProperties`         |
| `controllerStyle`        | Style object for the controller buttons.                                                        |        `CSSProperties`        |
| `waveContainerStyle`     | Style object for the container of the waveform graph.                                           |        `CSSProperties`        |
| `graphColor`             | Color of the waveform graph.                                                                     |        `string`        |
| `graphShaded`            | Boolean value indicating if the waveform graph should be shaded according to the amplitude of the audio. `true` by default. | `boolean`         |
| `downloadable`            | Boolean value indicating if the download button should be displayed to the user when they're done recording. `true` by default. | `boolean`         |
| `onAudioDownload`            | A callback function that'll get called as soon as the `Blob` is available. | `Function`         |
------------------------------------------------------------------------------------------------------------------------------------------

## Customization

Want to make the `VoiceRecorder` component even more personalized? No problem! You can customize the appearance of the component by passing in your own style objects. Here's an example:

```js
import React from 'react';
import { VoiceRecorder } from 'react-voice-recorder-player';

function MyComponent() {
  const styles = {
    mainContainerStyle: {
      backgroundColor: 'gray',
      border: '1px solid black',
      borderRadius: '5px',
      padding: '10px'
    },
    controllerContainerStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '10px'
    },
    controllerStyle: {
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '5px',
      cursor: 'pointer',
      padding: '5px'
    },
    waveContainerStyle: {
      height: '100px',
      marginTop: '10px',
      width: '100%'
    }
  };

  return (
    <VoiceRecorder
      mainContainerStyle={styles.mainContainerStyle}
      controllerContainerStyle={styles.controllerContainerStyle}
      controllerStyle={styles.controllerStyle}
      waveContainerStyle={styles.waveContainerStyle}
    />
  );
}

```

## Contributing
We welcome contributions to improve `react-voice-recorder-player`! To contribute, please follow these steps:

1. Fork the repository and clone it to your local machine.
2. Install the package dependencies by running npm install.
3. Commit your changes with a descriptive commit message.
4. Push your changes to your forked repository.
5. Submit a pull request to the main branch of the original repository.


## Issues

If you encounter any issues while using `react-voice-recorder-player`, please feel free to [open an issue](https://github.com/AbreezaSaleem/react-voice-recorder-player/issues) on the project's GitHub repository. We welcome bug reports, feature requests, and other contributions from the community.

## License

`react-voice-recorder-player` is licensed under the MIT License. See the [LICENSE](https://github.com/AbreezaSaleem/react-voice-recorder-player/blob/main/LICENSE) file for more information.

## Author
<table>
  <tr>
    <td>
      <img src="https://github.com/abreezasaleem.png?s=100" width="100">
    </td>
    <td>
      Abreeza Saleem<br />
      <a href="mailto:abreeza.saleem@hotmail.com">abreeza.saleem@hotmail.com</a><br />
      <a href="https://abreeza.tech">https://abreeza.tech</a>
    </td>
  </tr>
</table>

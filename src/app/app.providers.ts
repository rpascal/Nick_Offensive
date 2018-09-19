import { NativeAudio } from '@ionic-native/native-audio';

class NativeAudioMock extends NativeAudio {
  play(id, callback) {
    return new Promise((resolve, reject) => {
      let path = "";
      switch (id) {
        case "dickhead":
          path = "assets/audio/dickhead.mp3";
          break;
      }
      new Audio(path).play();
      callback();
    });
  }
}

export class AppProviders {
  public static getProviders() {
    let providers;

    if (document.URL.includes("https://") || document.URL.includes("http://")) {
      // Use browser providers
      providers = [{ provide: NativeAudio, useClass: NativeAudioMock }];
    } else {
      // Use device providers
      providers = [NativeAudio];
    }

    return providers;
  }
}

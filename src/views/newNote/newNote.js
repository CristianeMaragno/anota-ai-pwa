import jsQR from 'jsqr';

export default {

  name: 'newNote',

  data() {
    return {
      scanResult: null,
      file1: null,
      scanActive: false
    }
  },

  mounted() {
    this.startScan();
    /*const isInStandaloneMode = 'standalone' in window.navigator && window.navigator['standalone'];
    if (this.plt.is('ios') && isInStandaloneMode()) {
      console.log('I am a an iOS PWA!');
      // E.g. hide the scan functionality!
    }*/
  },

  methods: {
    async startScan() {
      this.scanActive = true;

      const constraints =  (window.constraints = {
        audio: false,
        video: { facingMode: 'environment' }
      });

      navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        this.$refs.camera.srcObject = stream;
        // Required for Safari 
        this.$refs.camera.setAttribute('playsinline', true);
        setTimeout(() => {
          this.takePhoto();
        }, 1000);
      }).catch(error => {
        alert(error);
        console.log("There was a error: " + error);
      });
    },

    stopScan(){
      this.scanActive = false;
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach(track => {
        track.stop();
      });
    },

    takePhoto(){
      if(this.scanActive){
        const context = this.$refs.canvas.getContext('2d');
        console.log('video w: ' + this.$refs.camera.clientWidth);
        console.log('video h: ' + this.$refs.camera.clientHeight);
        console.log('canvas w: ' + this.$refs.canvas.clientWidth);
        context.drawImage(this.$refs.camera, 0, 0, this.$refs.canvas.clientWidth, this.$refs.canvas.clientHeight);

        const imageData = context.getImageData(
          0,
          0,
          this.$refs.canvas.clientWidth,
          this.$refs.canvas.clientHeight
        );

        this.readQRcode(imageData);
      }
    },

    resetScan(){
      this.scanResult = null;
    },

    readQRcode(imageData){
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });
  
      if (code) {
        this.scanActive = false;
        this.scanResult = code.data;
        console.log(this.scanResult);
      } else {
        if (this.scanActive) {
          console.log("Not read");
          setTimeout(() => {
            this.takePhoto();
          }, 1000);
        }
      }
    }
  }
}
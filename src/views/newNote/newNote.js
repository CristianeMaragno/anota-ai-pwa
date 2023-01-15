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

  methods: {
    async startScan() {
      this.scanActive = true;

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });

      this.$refs.camera.srcObject = stream;
      this.$refs.camera.setAttribute('playsinline', true);
      this.$refs.camera.play();
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
        context.drawImage(this.$refs.camera, 0, 0, 450, 337);

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
          }, 500);
        }
      }
    }
  }
}
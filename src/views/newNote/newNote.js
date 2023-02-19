import jsQR from 'jsqr';
import { request } from '@/helpers/request';

export default {

  name: 'newNote',

  mixins: [request],

  data() {
    return {
      scanResult: null,
      file1: null,
      scanActive: false,
      response: null
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
      requestAnimationFrame(this.scan.bind(this));
    },

    scan(){
      if(this.$refs.camera.readyState === this.$refs.camera.HAVE_ENOUGH_DATA && this.scanActive){
        this.$refs.canvas.height = this.$refs.camera.clientHeight;
        this.$refs.canvas.width = this.$refs.camera.clientWidth;

        const canvasContext = this.$refs.canvas.getContext('2d');
        canvasContext.drawImage(
          this.$refs.camera, 
          0, 
          0, 
          this.$refs.canvas.width, 
          this.$refs.canvas.height
        );

        const imageData = canvasContext.getImageData(
          0,
          0,
          this.$refs.canvas.width,
          this.$refs.canvas.height
        );

        this.readQRcode(imageData);
      }else{
        requestAnimationFrame(this.scan.bind(this));
      }
    },

    readQRcode(imageData){
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      if(code){
        this.scanActive = false;
        this.scanResult = code.data;
        this.stopScan();
        this.openNewNote();
      }else{
        requestAnimationFrame(this.scan.bind(this));
      }
    },

    openNewNote(){
      localStorage.setItem("url", this.scanResult);
      this.$router.push({
        path: 'note-items'
      });
    },

    stopScan(){
      this.scanActive = false;
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach(track => {
        track.stop();
      });
    }
  },

  beforeDestroy() {
    this.stopScan();
  }
}
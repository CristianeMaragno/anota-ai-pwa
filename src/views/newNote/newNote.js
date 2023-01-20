import jsQR from 'jsqr';
import axios from 'axios';

export default {

  name: 'newNote',

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
        this.readNewNote();
      }else{
        requestAnimationFrame(this.scan.bind(this));
      }
    },

    readNewNote(){
      const config = {
        headers:{
          'Content-Type': 'application/json'
        }
      };
      const url = "https://anotaai-dev-xld2jmqk5q-uc.a.run.app/anotai";
      
      const data ={
        url: 'https://sat.sef.sc.gov.br/nfce/consulta?p=42221117890776000399650010000535621116968755|2|1|2|207B6E647C83799E54546745ACBDBED6055A93C3',//this.scanResult,
        email: 'cristianerodriguesmaragno@gmail.com',
        premium: true
      }

      axios.post(url, data, config)
      .then(function (response) {
        console.log(response);
        this.response = response;
      })
      .catch(function (error) {
        console.log(error);
      });
    },

    stopScan(){
      this.scanActive = false;
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach(track => {
        track.stop();
      });
      //this.$refs.camera.stop();
    }
  },

  beforeDestroy() {
    this.stopScan();
  }
}
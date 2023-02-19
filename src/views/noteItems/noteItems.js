import { request } from '@/helpers/request';

export default {
  
  name: 'noteItems',

  mixins: [request],

  components: {
  },

  data() {
    return {
      items: []
    }
  },

  mounted() {
    this.url = localStorage.getItem("url");
    this.readNoteItems();
  },

  methods: {
    readNoteItems(){
      const data ={
        url: this.url,
        email: 'cristianerodriguesmaragno@gmail.com',
        premium: true
      }
      this.post("", data).then(function (response) {
        console.log(response);
        response.map(function(value) {
          this.items.push(
            {
              id: value[5],
              place: value[0],
              date: value[1],
              itemName: value[2],
              totalPrice: value[5]
            }
          );
        });
      })
    }
  }
}
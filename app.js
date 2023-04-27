const app = Vue.createApp({
  data() {
    return {
      firstName: "Hager",
      lastName: "elhwarii",
      email: "Hager@gmail.com",
      gender: "female",
      picture:
        "https://i.pinimg.com/736x/00/80/9e/00809e40c3937754342635adc7ec984a.jpg",
    };
  },
  methods: {
    async getUser() {

        const res = await fetch('https://randomuser.me/api')
        const { results } = await res.json()
        this.firstName = results[0].name.first
        this.lastName = results[0].name.last
        this.email = results[0].email
        this.gender = results[0].gender
        this.picture = results[0].picture.large


      },
  },
});

// what is mounting !?
app.mount("#app");

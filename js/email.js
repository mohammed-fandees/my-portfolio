
(function () {
  emailjs.init("07Nn38ayRbgjjo0R2");
})();

class Send {
  constructor(serviceID, templateID, params) {
    this.serv = serviceID;
    this.temp = templateID;
    this.params = params;
  }

  send() {
    emailjs
      .send(this.serv, this.temp, this.params)
      .then((res) => {
        this.params.name = "";
        this.params.email = "";
        this.params.subject = "";
        this.params.message = "";
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your message has been sent.",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Faild to send",
          title: "Something went wrong!",
        });
      });
  }
}

export { Send };

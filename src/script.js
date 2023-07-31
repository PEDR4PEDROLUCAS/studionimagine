$(document).ready(() => {
    const slickOptions = {
        autoplay:true,
        dots:false, 
        prevArrow:'<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
        nextArrow:'<button type="button" class="slick-next slider__next-arrow">Next</button>'
    };
    $('.slider').slick(slickOptions);

    $('.footer__form-button').on('click', () =>{
        const email = $('#email').val();
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "pedrotakamashi@gmail.com",
            Password : "",
            To : 'pedrotakamashi@gmail.com',
            From : "pedrotakamashi@gmail.com",
            Subject : "Por favor me adicione a sua news",
            Body : 'olá! Eu gostaria de ser adicionando á sua lista para receber as novidades do seu site. Meu e-mail é '+ email,
        }).then(
          message => alert(message)
        );
    })
  });

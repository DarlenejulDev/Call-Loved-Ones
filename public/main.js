$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


const name = document.getElementsByID('#name')

const when = document.getElementsByID('#when')

const number = document.getElementsByID('#number')


const completion = document.getElementsByClassName('#complete');



Array.from(completion).forEach(function(element) {
      element.addEventListener('click', function(){
         name = this.parentNode.parentNode.childNodes[1].innerText
        console.log(name)
        number = this.parentNode.parentNode.childNodes[3].innerText
        console.log(number)
         when = this.parentNode.parentNode.childNodes[6].innerText
         console.log(when)

        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'when': when,
            'number': number,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

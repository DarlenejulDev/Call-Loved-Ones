
let personName = document.getElementsByClassName('personName')

let when = document.getElementsByClassName('when')

let phoneNumber = document.getElementsByClassName('phoneNumber')


let completion = document.getElementsByClassName('complete');
let deletionComplete= document.querySelectorAll('tbody tr td')




Array.from(completion).forEach(function(element) {
      element.addEventListener('click', function(){
        // alert('hi')
        const deletionComplete=this.parentNode.parentNode.remove().textContent
         // personName= this.parentNode.parentNode.childNodes[1].childNodes[0].remove().innerText;

});
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'personName': personName,
            'when': when,
            'phoneNumber': phoneNumber,
          })
        }).then(function (response) {
          // window.location.reload()
        })
      });
// });

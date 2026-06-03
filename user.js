
//form
const userForm = document.querySelector('.userform');

//form element 
const image = document.querySelector('#imageURL');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const position = document.querySelector('#position');
const country = document.querySelector('#country');
const submit = document.querySelector('.btn[type="submit"]');


//selction of card-container
let card_cont = document.querySelector('.card-container');


const userManager =
{
    users: [],
    init: function () {
     submit.addEventListener('click',this.submitForm.bind(this))
    },
    
    submitForm: function (e)
    {
        e.preventDefault();

        if (
            !image.value.trim() || 
            !name.value.trim() || 
            !email.value.trim() || 
            !position.value.trim() || 
            !country.value.trim()
        ) {
            alert("Hey bro please fill something!!");
            return; // Stops the function here, preventing addUser() and renderUI()
        }
        this.addUser();
        console.log(this.users);

        userForm.reset();
    },

    addUser: function ()
    {
        const newUser = {
            image: image.value,
            name: name.value,
            email: email.value,
            position: position.value,
            country: country.value
        };
        this.users.push(newUser);


            this.renderUI();
        
    },

  renderUI: function()
  {
      card_cont.innerHTML = '';  
    
          this.users.forEach((user, index) => {
              let cards = document.createElement('div')
              cards.classList.add('cards')
              cards.innerHTML = `
          <div class="crossbtn" data-index="${index}">X</div>
          <div class="user-image">
           <img src="${user.image}" alt="user image" srcset="" id="uimage">
         </div>
          
         <div class="user-info">
            <p id="username">Name : ${user.name}</p>
            <p id="useremail">Email : ${user.email}</p>
            <p id="userposition">Position:${user.position}</p>
            <p id="usercountry">Country : ${user.country}</p>
         </div>`
      
              card_cont.appendChild(cards)
          });

      this.removeUser();
    },
  
    removeUser: function ()
    {
        const btns = document.querySelectorAll('.crossbtn');
        btns.forEach((btn) => {
            btn.onclick = () => {
                const index = btn.getAttribute('data-index');
                this.users.splice(index, 1);
                this.renderUI();
            }
        })
    }
}

userManager.init();

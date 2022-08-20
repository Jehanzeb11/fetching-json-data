// fetch('https://jsonplaceholder.typicode.com')
//   .then(response => response.json())
//   .then(jsn => {
//     let datas = [];
//  datas.push(   jsn.map((val)=>{
//         datas += 
//     }))
//     document.getElementById("container").innerHTML = datas
//   })









var container = document.getElementById("container");





const getPosts = () => {
  fetch(`https://jsonplaceholder.typicode.com/users`).then(
    (response) => {
      return response.json().then((data) => {

        

        data.map((post,index) => {
          const getusername = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${index}`).then((response) => {
              return response.json().then((data)=> {
                
              


                    container.innerHTML += `
                    
                    <div class="content">
                    <img src="profile.png">
                            <span  class="bio">${post.name}</span><br>
                             <span  class="bio">${post.email}</span>
                             <p>${data.title}</p>
                            <section  class="main">

                     <div  class="post">
                  <p>${data.body}</p>
                    </div>
                     <div  class="react">
                     <p class="emoji">&#128512; &#128516; &#128525; &#128151; &#128545</p>
                    
                            </section>
                            
                            </div>`
                            
           console.log(data)
                    
                
                
              })
            })
          }
          getusername()
          
          
          
        });

      });
    }
  );
};
getPosts();

let wall=document.getElementById("wal");
    let url='https://fakestoreapi.com/products'
    fetch(url)
    .then(function(response){
       return response.json() // returningb promise
    })
    .then(function(res){
        console.log(res);
        const data=res;
        appendproducts(data)
    })
    .catch(function(err){
        console.log(err);
    });
   function appendproducts(users_array){
       
       users_array.forEach(function(el){
          let div = document.createElement("div")

          let img = document.createElement("img")
          img.src = el.image
          
          let div1 = document.createElement("div")
          let name=document.createElement("p")
          name.innerText =el.title;
          name.style.color="rgb(153,153,153)";
          name.style.fontsize="16px";
          name.setAttribute('id','marg');
          div1.append(name)

          let div2 = document.createElement("div")
          let pricediv = document.createElement("div")

         let price1 =Math.floor(el.price+200);
          pricediv.append("₹"+price1);

          let originaldiv=document.createElement("div")
          let originalamt=price1+200;
          originaldiv.append("₹"+originalamt);

          let offdiv=document.createElement("div")
          let off=Math.floor((originalamt*10)/100)+"%"+" "+"off"
          offdiv.append(off);

          div2.append(pricediv,originaldiv,offdiv)
          div2.setAttribute("id","div2")
         

        //   let crossimg=document.createElement("")
        //   crossimg.innerHTML=
          let div3=document.createElement("div");
          let cross=document.createElement("div");
          let disc=document.createElement("div")
          let discount="₹100 discount on 1st order";
          disc.append(discount);
          cross.innerHTML='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" height="16" width="16" color="greenT2" iconSize="20" class="Icon-sc-1iwi4w1-0 jabcjO"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.833 5.733c0 .186 1.006 1.745 1.006 1.745.215.312-.844 2.27-.844 2.27-.105.151-.168 2.029-.168 2.029-.001.385-1.961 1.317-1.961 1.317-.17.058-1.276 1.54-1.276 1.54-.218.31-2.328-.139-2.328-.139-.17-.057-1.898.462-1.898.462-.352.118-1.806-1.541-1.806-1.541-.105-.151-1.796-.793-1.796-.793-.35-.12-.595-2.356-.595-2.356 0-.186-1.005-1.744-1.005-1.744-.215-.312.844-2.271.844-2.271.104-.151.167-2.029.167-2.029.002-.385 1.962-1.317 1.962-1.317.17-.058 1.275-1.54 1.275-1.54.218-.31 2.089.353 2.089.353.17.058 2.138-.676 2.138-.676l1.805 1.541c.106.151 1.797.793 1.797.793.35.12.594 2.356.594 2.356zM6.761 6.761a.875.875 0 11-1.238-1.237.875.875 0 011.238 1.237zm2.865-1.236a.6.6 0 11.848.849l-4.101 4.1a.6.6 0 11-.849-.848l4.102-4.1zm.846 4.95a.875.875 0 11-1.238-1.238.875.875 0 011.238 1.237z" fill="#06A759"></path></svg>'
          div3.append(cross,disc);
          div3.setAttribute("id","div3")

          let div4=document.createElement("div");
          let delivery="Free Delivery"
          div4.setAttribute("id","div4");
         div4.append(delivery)

         let div5=document.createElement("div")
       
         let divstar=document.createElement("div");
         divstar.innerHTML='<svg width="8" height="8" viewBox="0 0 20 20" fill="#5585f8" xmlns="http://www.w3.org/2000/svg" ml="4" iconSize="10" class="Icon-sc-1iwi4w1-0 dWGYbf"><g clip-path="url(#star_svg__clip0)"><path d="M19.54 6.85L13.62 5.5 10.51.29a.596.596 0 00-1.02 0L6.38 5.5.46 6.85a.599.599 0 00-.31.98l3.99 4.57-.55 6.04c-.02.21.07.41.24.54.17.12.39.15.59.07L10 16.64l5.58 2.39c.08.03.16.05.23.05h.01c.3.01.6-.26.6-.6 0-.06-.01-.12-.03-.17l-.54-5.93 3.99-4.57c.14-.16.18-.38.12-.58a.544.544 0 00-.42-.38z" fill="#666"></path></g><defs><clipPath id="star_svg__clip0"><path fill="#fff" d="M0 0h20v19.08H0z"></path></clipPath></defs></svg>';

          let divrate=document.createElement("div");
          let rate = el.rating.rate;
          divrate.append(rate)
          divstar.setAttribute("id","divstar")
          div5.append(divrate,divstar);
          div5.setAttribute("id","div5")
          div.onclick = ()=>
            {
                addtoCart(el)
                window.location.href ='cart.html'
            }
          div.append(img,div1,div2,div3,div4,div5);
          
          wall.append(div);
       })
   }
   
function addtoCart(product) {
    
    if (localStorage.getItem("meesho_cart") === null) {
        localStorage.setItem("meesho_cart", JSON.stringify([]));
    }
    let array = JSON.parse(localStorage.getItem("meesho_cart"));
      array.push(product);

      localStorage.setItem("meesho_cart", JSON.stringify(array));
}
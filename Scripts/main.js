const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHambIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click' , toggleDesktopMenu);
menuHambIcon.addEventListener('click' , toggleMobileMenu);
menuCarritoIcon.addEventListener('click' , toggleCarritoAside);




function toggleDesktopMenu (){ 

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');        
    }
    desktopMenu.classList.toggle('inactive');
}







function toggleMobileMenu (){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');        
    }
    mobileMenu.classList.toggle('inactive');
}






function toggleCarritoAside (){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');        
    }else if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');

}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 500,
    image: 'https://i.pcmag.com/imagery/roundups/05ersXu1oMXozYJa66i9GEo-40.fit_lim.size_1050x.jpg'
});
productList.push({
    name: 'Computador',
    price: 890,
    image: 'https://www.latercera.com/resizer/54j-UlI9DK8274jxGiR3ZFBtVxI=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/VW3ZWAGBRZAAXGXBCGEBYH6XIM.jpg'
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 500,
    image: 'https://i.pcmag.com/imagery/roundups/05ersXu1oMXozYJa66i9GEo-40.fit_lim.size_1050x.jpg'
});
productList.push({
    name: 'Computador',
    price: 890,
    image: 'https://www.latercera.com/resizer/54j-UlI9DK8274jxGiR3ZFBtVxI=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/VW3ZWAGBRZAAXGXBCGEBYH6XIM.jpg'
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 500,
    image: 'https://i.pcmag.com/imagery/roundups/05ersXu1oMXozYJa66i9GEo-40.fit_lim.size_1050x.jpg'
});
productList.push({
    name: 'Computador',
    price: 890,
    image: 'https://www.latercera.com/resizer/54j-UlI9DK8274jxGiR3ZFBtVxI=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/VW3ZWAGBRZAAXGXBCGEBYH6XIM.jpg'
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 500,
    image: 'https://i.pcmag.com/imagery/roundups/05ersXu1oMXozYJa66i9GEo-40.fit_lim.size_1050x.jpg'
});
productList.push({
    name: 'Computador',
    price: 890,
    image: 'https://www.latercera.com/resizer/54j-UlI9DK8274jxGiR3ZFBtVxI=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/VW3ZWAGBRZAAXGXBCGEBYH6XIM.jpg'
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 500,
    image: 'https://i.pcmag.com/imagery/roundups/05ersXu1oMXozYJa66i9GEo-40.fit_lim.size_1050x.jpg'
});
productList.push({
    name: 'Computador',
    price: 890,
    image: 'https://www.latercera.com/resizer/54j-UlI9DK8274jxGiR3ZFBtVxI=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/VW3ZWAGBRZAAXGXBCGEBYH6XIM.jpg'
});




/// MAQUETAR ESTRUCTURA HTML EN JAVASCRITP

/*<section class="main-container">
    <div class="cards-container">

      <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>

  </section> 
  */


  function renderProducts(arr){

    for (product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src' , product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = '$' + product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src' , './icons/bt_add_to_cart.svg');
    
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
       
    }

  }


  renderProducts(productList);




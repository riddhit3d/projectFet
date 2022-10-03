let subtotal=0;

const calculateTax = subtotal =>{
    const GST=subtotal * 0.10;
    const formattedTax = GST.toFixed(2);
    return formattedTax;
};

const calculateTotal = subtotal =>{
    const GST=calculateTax(subtotal);
    const total=parseFloat(subtotal)+ parseFloat(GST);
    const formattedTotal=total.toFixed(2);
    return formattedTotal;
};

const getImgLink = title => {
    let imgLink;
    switch (title){
        case 'South Indian Special':
        imgLink = "dosa.png";
        break;

        case 'Ice Cream':
        imgLink = "ice cream.jpg";
        break;

        case 'Noodles':
        imgLink = "noodles.jpg";
        break;

        case 'Fresh Salad':
        imgLink = "salad.png";
        break;

        case 'Pizza':
        imgLink = "pizza.jpg";
        break;

        default:
            imgLink ="pizza.jpg";
        }
        return imgLink;
        
    };

$('.add-button').on (click,function(){
    const title = $(this).data('title');
    const price = $(this).data('price');
    const imgLink= getImgLink(title);

    const element = `
    <li class="cart-item">
    <img src="&#8377{imgLink}" alt="${title}/">
        <div class="cart-item-dets">
            <p class="cart-item-heading">${title}</p>
            <p class="g-price">$${total}</p>
        </div>
    </li>
`;

$('.cart-items').append(element);

subtotal=subtotal+price;

const formattedSubtotal = subtotal.toFixed(2);
const GST=calculateTax(subtotal);
const total=calculateTotal(subtotal);

$('.cart-math').html(`
    <p class="cart-math-item">
    <span class="cart-math-header">Subtotal:</span>
    <span class="g-price subtotal">$${formattedSubtotal}</span>
    </p>

    <p class="cart-math-item">
    <span class="cart-math-header">GST:</span>
    <span class="g-price GST">$${GST}</span>
    </p>

    <p class="cart-math-item">
    <span class="cart-math-header"Total:</span>
    <span class="g-price total">$${total}</span>
    </p>
    `);

});





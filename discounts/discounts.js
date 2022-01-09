
console.group("Discounts")
function realDiscount(precioOriginal, descuento){
    const precioDescuento = (precioOriginal*(100-descuento))/100;
    return precioDescuento;
}
console.groupEnd();


//Interacting with HTML and javascript

function calculateDiscount(){

    const COUPON1 = "coupon1_2021";
    const COUPON2 = "javascript_learning";
    const COUPON3 = "I_love_coding";

    const coupons= [
        {
            name:COUPON1,
            discount:10
        },
        {
            name: COUPON2,
            discount:15
        },
        {
            name:COUPON3,
            discount:30
        },
    ];

    const input1 = document.getElementById("originalPrice");
    const originalPrice = parseFloat(input1.value);

    const input2 = document.getElementById("coupon");
    const couponValue = input2.value;    
    
    const isCouponValid = function(coupon) {
        return coupon.name === couponValue;
    }

    const userCoupon = coupons.find(isCouponValid);
    const text = document.getElementById("discountResult");

    if (Number.isNaN(originalPrice) || originalPrice == 0){
        alert("You must enter a valid price value!")
    }
    else if(!userCoupon){
        text.innerText = "The coupon: " + couponValue + " is not valid!";
    }
    else{
        discount = userCoupon.discount
        const precioDescuento = realDiscount(originalPrice, discount);        
        text.innerText = 
            "The original price is: " 
            + originalPrice 
            + " USD.  " 
            +"The discount is: "
            + discount
            + "%. "            
            + "The final prise is: " 
            + precioDescuento;        
    }    
}
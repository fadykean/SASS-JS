products = new Array();
product_price = new Array();
product_amount = new Array();

function add_products() {
    var resualt = "all products";
    
        var name="";
        var p_r = 0 , q = 0 , sum = 0 ; 
        var products = new Array();
         var product_price = new Array();
         var product_amount = new Array();
         while(!(name=="סיום")){
           name = prompt("enter product name");
           if(!(name=="סיום")){
           products.push(name);
            p_r = parseInt(prompt("enter product product_price " + name));
            product_price.push(p_r);
            q = parseInt(prompt("enter product product_amounttity " + name));
            product_amount.push(q);
           }
         }
         for ( i = 0 ; i < product_amount.length ; i++){
           if(product_amount[i] < 3){
                 sum += product_amount[i]*product_price[i] ;
             }
             if(product_amount[i] == 3 || product_amount[i] == 4){
                 sum += product_amount[i]*product_price[i] * 0.97;
             }
             if(product_amount[i] >= 5 && product_amount[i] < 10){
                 sum += product_amount[i] * product_price[i]  * 0.95;
             }
             if(product_amount[i] > 10){
                 sum += product_amount[i] * product_price[i]  * 0.93;
             }
         }
         document.write("<table border=2 width=100%>");
           document.write("<tr><td>");
            document.write("שם מוצר"+" </td><td> ");
            document.write("עלות מוצר" +"</td><td>");
            document.write("כמות מוצר"+ " </td> ");
         for (let index = 0; index < products.length; index++) {
           document.write("<tr><td>");
            document.write(products[index]+" </td><td> ");
            document.write(product_price[index] +"</td><td>");
            document.write(product_amount[index]+ " </td> ");
            }
           document.write(" </tr> ");
           document.write(" סכום כולל: "+sum);
      
    document.getElementById("products").innerHTML= resualt;
}


function calculate(){
    var resualt = "total amount";
    var name="";
    var p_r = 0 , q = 0 , sum = 0 ; 
    var products = new Array();
     var product_price = new Array();
     var product_amount = new Array();
     while(!(name=="סיום")){
       name = prompt("enter product name");
       if(!(name=="סיום")){
       products.push(name);
        p_r = parseInt(prompt("enter product product_price " + name));
        product_price.push(p_r);
        q = parseInt(prompt("enter product product_amounttity " + name));
        product_amount.push(q);
       }
     }
     var num = parseInt(prompt("enter club member: "));
     is_prime = true;
     if (num < 2){
         is_prime = false;
     }
     for ( j = 2 ; j < num ; j++){
         if( num % j == 0 ){
             is_prime = false;
             j = num ; // לעצירה במקום בריק 
            
         }
     }
     for ( i = 0 ; i < product_amount.length ; i++){
       if(product_amount[i] < 3){
             sum += product_amount[i]*product_price[i] ;
         }
         if(product_amount[i] == 3 || product_amount[i] == 4){
             sum += product_amount[i]*product_price[i] * 0.97;
         }
         if(product_amount[i] >= 5 && product_amount[i] < 10){
             sum += product_amount[i] * product_price[i]  * 0.95;
         }
         if(product_amount[i] > 10){
             sum += product_amount[i] * product_price[i]  * 0.93;
         }
     }
     document.write("<table border=2 width=100%>");
       document.write("<tr><td>");
        document.write("שם מוצר"+" </td><td> ");
        document.write("עלות מוצר" +"</td><td>");
        document.write("כמות מוצר"+ " </td> ");
     for (let index = 0; index < products.length; index++) {
       document.write("<tr><td>");
        document.write(products[index]+" </td><td> ");
        document.write(product_price[index] +"</td><td>");
        document.write(product_amount[index]+ " </td> ");
        }
       document.write(" </tr> ");
       var sum_fixed , debt , discount ; // מעמ
       if( is_prime == true){
           sum_fixed = sum * 0.85 ; 
           discount = sum * 0.15;
           debt = sum * 0.85 * 0.17;
           sum_fixed = sum_fixed.toFixed(4);
           discount = discount.toFixed(4);
          debt = debt.toFixed(4);
        document.write(" סכום כולל: "+sum_fixed+"</br>");
        document.write(" הנחה: "+discount+"</br>");
        document.write(" מע'מ: " +debt+"</br>");
       }
       if( is_prime == false){
        sum_fixed = sum  ; 
           debt = sum * 0.17;
           sum_fixed = sum_fixed.toFixed(4);
          debt = debt.toFixed(4);
        document.write(" סכום כולל: "+sum_fixed+"</br>" );
        document.write(" אין הנחה "+"</br>");
        document.write(" מע'מ: " +debt+"</br>");
       }
    document.getElementById("total").innerHTML= resualt;
}
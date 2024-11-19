            //x(); ❌❌ can`t hoisted
            let x = function(){
                console.log("hii varsha...");
            };
            x();


            let add = function(a,b){
                return a+b;
            }
            console.log(add(4,5));


            let sub = (a,b) =>{

                return a-b

            }
            console.log(sub(6,3))


            let mul = function f2(a,b)
            {
                return a*b;
            }
            console.log(mul(2,2));
            //console.log(f2(3,3));//Uncaught ReferenceError: f2 is not defined

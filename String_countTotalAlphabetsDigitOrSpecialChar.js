//*3. Write a program to find total number of alphabets, digits or special character in a string.
            let str = prompt("Enter a string : ");
            let alphabets = 0;
            let digits = 0;
            let specialChar = 0;

            for(let i=0; i<str.length; i++)
            {
                if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90 || str.charCodeAt(i)>= 97 && str.charCodeAt(i)<= 122)
                {
                    alphabets ++;
                }
                else if(str.charAt(i) >=0 && str.charAt(i) <=9)
                {
                    digits ++;
                }
                else
                {
                    specialChar ++;
                }

            }

            console.log("total alphabets: " + alphabets);
            console.log("total digits : " + digits);
            console.log("total special character : " + specialChar);
            

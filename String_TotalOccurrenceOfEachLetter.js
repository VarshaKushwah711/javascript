//Q3. find the total occurrence of each letter in a string.
            let str = "HelloWorld";
            let obj = {};
            for(let i=0; i<str.length; i++)
            {
                letter = str[i].toLowerCase();//converting it to lowercase to ensure the count is case-insensitive
                if(letter>='a' && letter<='z')
                {
                    if(obj[letter])
                    {
                        obj[letter]++;
                    }
                    else
                    {
                        obj[letter]=1;
                    }
                }
            }
            console.log(obj);

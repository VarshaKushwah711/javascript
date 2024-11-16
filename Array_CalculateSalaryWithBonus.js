function calculateBonus(arr)
            {
                let newArr = [];
                for(let i=0; i<arr.length; i++) 
                {
                    let bonus = arr[i] * 0.10;
                    newArr.push(arr[i] + bonus);
                }
                return newArr;
            }
            let empSalary = [45000,65000,23000,43000,68000];
            console.log(calculateBonus(empSalary));

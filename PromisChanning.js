
        const first = (val)=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log("Inside First : "+val);
                    resolve(val+2);
                },5000);
            });
        }
    
        const second = (val)=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log("Inside Second : "+val);
                    resolve(val+2);
                },3000);
            });
        }
        const third = (val)=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log("Inside Third : "+val);
                    resolve(val+2);
                    //reject("Error in Third");
                },5000);
            })
        }
        const fourth = (val)=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log("Inside Fourth : "+val);
                    //resolve(val+2);
                    reject("")
                },3500);
            })
        }
        first(10)
        .then(resolvedValue=>{
            second(resolvedValue)
            .then(resolvedValue=>{
                third(resolvedValue)
                .then(resolvedValue=>{
                    fourth(resolvedValue)
                    .then(()=>{
                        console.log("All Task Done...");
                    })
                    .catch((err)=>{
                        document.write("An error occurred:"+ error);
                    });
                })
            })
        })
        .catch((err)=>{
            document.write("An error occurred:"+ error);
        });
    
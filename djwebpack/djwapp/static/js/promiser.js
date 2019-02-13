let names = [
   {
       "name": "karim",
       "year": "2013",
       "dept": "CSE"
   },
   {
       "name": "robin",
       "year": "2015",
       "dept": "IT"
   }
]


export let findAll = () => new Promise((resolve, reject) => {
   if (names) {
      setTimeout(()=>{
         resolve(names)
      }, 3000)
       
   } else {
       reject("No data")
   }
});

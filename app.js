class Request{

    async get(url){
        const response=await fetch(url);
        const data=response.json();
        return data;

    }

    async post(url,data){

            const response= await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        });

            const responseData=response.json();
            return responseData;

    }

    async put(url,data){
        const response=await fetch(url,{ 
            method: 'PUT',
            body: JSON.stringify(data),
             headers: {
             'Content-type': 'application/json; charset=UTF-8',
        },});

        const responseData=response.json();
        return responseData;
    }

    async delete(url){
        const response=await fetch(url,{method:'DELETE'});
        return "veri silindi";
 }

}

const request=new Request();

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(res=>console.log(res))
// .catch(err=>console.log(err));

// bunun yerine yeni metodla alalim then kullanmadan
// IIFE

// (async()=>{
//     const data=await request.get("https://jsonplaceholder.typicode.com/albums");
//     console.log(data);
// })();


// -----------------------------------------------------------------------------------------

// (async()=>{
//     const data=await request.post("https://jsonplaceholder.typicode.com/albums",{userId:10,title:"yenisarki"})
//     console.log(data);
// })();


// -------------------------------------------------------------------------------------------

// (async()=>{
//     const data=await request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:11,title:"update edilmis sarki"})
//     console.log(data)
// })();
    

// ---------------------------------------------------------------------------------------------------

// (async()=>{
//     const data=await request.delete("https://jsonplaceholder.typicode.com/albums/10")
//     console.log(data)
// })();
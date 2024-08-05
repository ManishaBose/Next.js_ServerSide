//to create get handler for api/user

export function GET(){
    //database logic
    return Response.json({
        email:"manishabose149@gmail.com",
        name: "Manisha Bose"
    })
}
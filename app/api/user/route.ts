//to create get handler for api/user

export function GET(){
    //database logic
    return Response.json({
        name: "Manisha Bose",
        email:"manishabose149@gmail.com"
    })
}
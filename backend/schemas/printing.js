export default{
    name:"printing",
    title:"Printing",
    type:"document",
    fields:[
        {
            name:"header",
            title:"Header",
            type:"string"
        },
        {
            name:"descr",
            title:"Descr",
            type:"text"
        },
        {
            name:"image",
            title:"Image",
            type:"image"
        },

        //body of the printing page
       
        {
            name:"products",
            title:"Products",
            type:"array",
            of:[{type:"product"}]
        }
    ]
}
export default{
    name:"gift",
    title:"Gift",
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

        //showing the product
        {
            name:"products",
            title:"Products",
            type:"array",
            of:[{type:"product"}]
        }
    ]
}
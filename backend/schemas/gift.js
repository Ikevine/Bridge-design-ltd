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
            type:"block"
        },
        {
            name:"image",
            title:"Image",
            type:"image"
        },

        //showing the product
        {
            name:"product",
            title:"Product",
            type:"array",
            of:[{type:"dproduct"}]
        }
    ]
}
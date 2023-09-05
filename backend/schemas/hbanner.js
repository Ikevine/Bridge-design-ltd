export default{
    name:"hbanner",
    title:"Hbanner",
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
            type:"image",
            options:{hotspot: true}
        },
        {
            name:"product",
            title:"Product",
            type:"array",
            of:[{type:"product"}]
        }
        
    ]
}
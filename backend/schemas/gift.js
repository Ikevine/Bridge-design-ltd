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
            type:"image",
            options:{hotspot: true}
        },

        //showing the product
        {
            name:"products",
            title:"Products",
            type:"array",
            of:[{type:"product"}]
        },
        {
            name:"categories_head",
            title:"Categories_head",
            type:"string"

        },
        {
            name:"categories_descr",
            title:"Categories_descr",
            type:"text"
        },
        {
            name:"categ_name",
            title:"Categ_name",
            type:"array",
            of:[{type:"string"}]
        },
        {
            name:"update",
            title:"Updata",
            type:"image",
            options:{hotspot: true}
        }
    ]
}
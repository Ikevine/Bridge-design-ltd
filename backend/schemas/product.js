export default{
    name:"product",
    title:"Product",
    type:"document",
    fields:[
        {
            name:"dname",
            title:"Dname",
            type:"string",
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
        }
    ]
}
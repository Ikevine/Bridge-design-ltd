export default {
    name:"office",
    title:"Office",
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
            type:"array",
            of:[{type:"image"}],
            options:{hotspot: true}
        }
    ]
}
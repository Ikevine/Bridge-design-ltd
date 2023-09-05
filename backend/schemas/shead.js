export default{
    name:"shead",
    title:"Shead",
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
            name:"header_gallery",
            title:"Header_gallery",
            type:"string"
        }
    ]
}
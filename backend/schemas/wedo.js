export default{
    name:"wedo",
    title:"Wedo",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Name",
            type:"string",
        },
        {
            name:"descr",
            title:"Descr",
            type:"text",
        },
        {
            name:"simage",
            title:"Simage",
            type:"image",
            options:{hotspot: true}
        },
        {
            name:"page",
            title:"Page",
            type:"string"
        }
    ]
}
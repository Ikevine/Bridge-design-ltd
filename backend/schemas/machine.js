export default{
    name:"machine",
    title:"Machine",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Name",
            type:"string"
        },
        {
            name:"left",
            title:"Left",
            type:"image",
            options:{hotspot: true}
        },
        {
            name:"middle",
            title:"Middle",
            type:"image",
            options:{hotspot: true}
        },
        {
            name:"right",
            title:"Right",
            type:"image",
            options:{hotspot: true}
        }
    ]
}
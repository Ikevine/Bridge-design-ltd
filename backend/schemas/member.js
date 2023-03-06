export default{

    name:"members",
    title:"Members",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Name",
            type:"string"
        },
        {
            name:"image",
            title:"Image",
            type:"image"
        },
        {
            name:"facebook",
            title:"Facebook",
            type:"slug"
        },
        {
            name:"instagram",
            title:"Instagram",
            type:"slug"
        },
        {
            name:"whatsapp",
            title:"Whatsapp",
            type:"slug"
        },
    ]

}
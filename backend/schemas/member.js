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
            type:"image",
            options:{hotspot: true}
        },
        {
           name:"role",
           title:"Role",
           type:"string"
        },
        {
            name:"facebook",
            title:"Facebook",
            type:"url"
        },
        {
            name:"instagram",
            title:"Instagram",
            type:"url"
        },
        {
            name:"linkedin",
            title:"Linkedin",
            type:"url"
        },
    ]

}
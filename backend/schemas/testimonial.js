export default{
    name:"test",
    title:"Test",
    type:"document",
    fields:[
        {
            name:"pname",
            title:"Pname",
            type:"string",
        },
        {
            name:"says",
            title:"Says",
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
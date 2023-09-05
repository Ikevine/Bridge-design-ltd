export default{
    name:"decoration",
    title:"Decoration",
    type:"document",
    fields:[
        {
            name:"image",
            title:"Image",
            type:"image",
            options:{hotspot: true}

        },
        {
            name:"intro",
            title:"Intro",
            type:"string"
        },
        {
            name:"descr",
            title:"Descr",
            type:"text"
        },
        
        //showing the decoration we do
        {
            name:"products",
            title:"Products",
            type:"array",
            of:[{type:"product"}]

        },
   ] 
}
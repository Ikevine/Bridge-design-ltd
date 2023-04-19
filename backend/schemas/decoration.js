export default{
    name:"decoration",
    title:"Decoration",
    type:"document",
    fields:[
        {
            name:"image",
            title:"Image",
            type:"image",

        },
        {
            name:"intro",
            title:"Intro",
            type:"string"
        },
        {
            name:"descr",
            title:"Descr",
            type:"string"
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
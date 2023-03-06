export default{
    name:"decoration",
    title:"Decoration",
    type:"document",
    fields:[
        {
            name:"slider_image",
            title:"Slider_image",
            type:"array",
            of:[{type:"image"}],

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
            name:"left",
            title:"Left",
            type:"array",
            of:[{type:"product"}]

        },
        {
            name:"middle",
            title:"Middle",
            type:"array",
            of:[{type:"product"}]
        },
        {
            name:"right",
            title:"right",
            type:"array",
            of:[{type:"product"}]
        }
   ] 
}
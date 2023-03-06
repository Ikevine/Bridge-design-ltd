export default{
    name:"about",
    title:"About",
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

        // end of about head // starting our team members

        {
            name:"member",
            title:"Member",
            type:"array",
            of:[{type:"members"}]
        },

        //experiance show
        {
            name:"header",
            title:"Header",
            type:"string"
        },
        {
            name:"edescr",
            title:"Edescr",
            type:"string"
        },
        
        // machine enter
        {
            name:"name",
            title:"Name",
            type:"array",
            of:[{type:"machine"}]
        },
        {
          name:"office",
          title:"Office",
          type:"array",
          of:[{type:"image"}] 
        }
    ]
}
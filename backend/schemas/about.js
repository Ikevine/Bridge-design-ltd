export default{
    name:"about",
    title:"About",
    type:"document",
    fields:[
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
        {
            name:"slider_image",
            title:"Slider_image",
            type:"array",
            of:[{type:"image"}],

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
        // end of about head // starting our team members
        {
            name:"head_team",
            title:"Head_team",
            type:"string"

        },
        {
            name:"member",
            title:"Member",
            type:"array",
            of:[{type:"members"}]
        },

        // machine enter
        {
            name:"head_exp",
            title:"Head_exp",
            type:"string"

        },
        {
            name:"descr_exp",
            title:"descr_exp",
            type:"string"
        },
        {
            name:"head_machine",
            title:"Head_machine",
            type:"string"

        },
        {
            name:"machine",
            title:"Machine",
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
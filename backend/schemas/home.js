export default
{
    name:"home",
    title:"Home",
    type:"document",
    fields:[
        {
            name:"slider_image",
            title:"Slider_image",
            type:"array",
            of:[{type:"image"}],
            option:{

            }
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

        // header done moving on to what we do

        {
            name:"wedo",
            title:"Wedo",
            type:"array",
            of:[
                {
                    name:"name",
                    title:"Name",
                    type:"string",
                },
                {
                    name:"descr",
                    title:"Descr",
                    type:"string",
                },
                {
                    name:"simage",
                    title:"Simage",
                    type:"image"
                }
            ]
        },

        // testimonial section start here
        {
            name:"we_are",
            title:"We_are",
            type:"array",
            of:[
                {
                    name:"name",
                    title:"Name",
                    type:"string",
                },
                {
                    name:"descr",
                    title:"Descr",
                    type:"string"
                }
            ]
        },

        // testimonial section start here

        {
            name:"testimonial",
            title:"Testimonial",
            type:"array",
            of:[
                {
                    name:"pname",
                    title:"Pname",
                    type:"string",
                },
                {
                    name:"says",
                    title:"Says",
                    type:"string"
                },
                {
                    name:"image",
                    title:"Image",
                    type:"image"
                }
            ]
        },

        // popular brand work with us

        {
            name:"brand",
            title:"Brand",
            type:"array",
            of:[
                {
                    name:"single_brand",
                    title:"Single_brand",
                    type:"image"
                }
            ]

        }
        
    ]
}
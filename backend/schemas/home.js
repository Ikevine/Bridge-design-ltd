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

        // header done moving on to what we do
        {
            name:"head_wedo",
            title:"Head_wedo",
            type:"string"

        },
        {
            name:"descr_wedo",
            title:"descr_wedo",
            type:"text"
        },
        {
            name:"wedo",
            title:"Wedo",
            type:"array",
            of:[{type:"wedo"}]
        },

        // testimonial section start here
        {
            name:"head_wera",
            title:"Head_wera",
            type:"string"

        },
        {
            name:"descr_wera",
            title:"descr_wera",
            type:"text"
        },
        {
            name:"we_are",
            title:"We_are",
            type:"array",
            of:[{type:"wera"}]
        },
        // about us
        {
            name:"about",
            title:"about",
            type:"string"

        },
        {
            name:"descr_about",
            title:"descr_about",
            type:"text"
        },

        // testimonial section start here
        {
            name:"head_test",
            title:"Head_test",
            type:"string"

        },
        {
            name:"descr_test",
            title:"descr_test",
            type:"text"
        },

        {
            name:"testimonial",
            title:"Testimonial",
            type:"array",
            of:[{type:"test"}]
        },

        // popular brand work with us
        {
            name:"head_brand",
            title:"Head_brand",
            type:"string"

        },
        {
            name:"brand",
            title:"Brand",
            type:"array",
            of:[{type:"brand"}]

        }
        
    ]
}
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
            of:[{type:"wedo"}]
        },

        // testimonial section start here
        {
            name:"we_are",
            title:"We_are",
            type:"array",
            of:[{type:"wera"}]
        },

        // testimonial section start here

        {
            name:"testimonial",
            title:"Testimonial",
            type:"array",
            of:[{type:"test"}]
        },

        // popular brand work with us

        {
            name:"brand",
            title:"Brand",
            type:"array",
            of:[{type:"brand"}]

        }
        
    ]
}
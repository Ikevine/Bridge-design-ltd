import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export  const client = createClient({
    projectId:'ymnl6y40',
    dataset:'production',
    apiVersion:'2023-03-07',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_TOKEN,
    ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
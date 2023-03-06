import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export  const client = sanityClient({
    projectId:'ymnl6y40',
    dataset:'production',
    apiVersion:'2023-03-25',
    useCdn:'production',
    token:process.env.NEXT_PUBLIC_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
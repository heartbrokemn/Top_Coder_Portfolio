export const webservice = {
    name: 'webservice',
    title: 'Webservice',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Description',
            name: 'description',
            type: 'string',
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name:"price",
            title:"Price",
            type:"number"
        },
        {
            title: 'Link',
            name: 'link',
            type: 'string',
        },
    ],
 
}
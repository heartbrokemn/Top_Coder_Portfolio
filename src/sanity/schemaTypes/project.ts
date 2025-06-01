const project = {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }

        }, {
            
            name: "tecnology",
            title: "Tecnology",
            type: "array",
            of: [
                {
                    type: "string"
                    
                }
            ]
        },
        {
            name: "github",
            title: "Github",
            type: "url"
        },
        {
            name: "live",
            title: "Live",
            type: "url"
        }
    ]
}
export default project;
export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62835e6431c5f3475dad2ef1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-i6q9qqmd',
                  apiId: 'c0b87e4b-bd7e-4379-8c7d-a8b9ab3b4d8d'
                },
                {
                  buildHookId: '62835e65e6d9290c98788be6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qg27tajj',
                  apiId: 'f70c1a31-e807-45d7-b2a8-2bcb533c6470'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/benhaldenby/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qg27tajj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

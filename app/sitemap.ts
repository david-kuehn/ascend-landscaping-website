import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ascendirriscape.com',
      lastModified: new Date(),
    },
    {
      url: 'https://ascendirriscape.com/irrigation',
      lastModified: new Date(),
    },
    {
      url: 'https://ascendirriscape.com/hardscaping',
      lastModified: new Date(),
    },
    {
      url: 'https://ascendirriscape.com/3ddesigns',
      lastModified: new Date(),
    },
  ]
}

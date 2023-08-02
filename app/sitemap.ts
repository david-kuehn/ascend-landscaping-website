import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ascendlandscapingdesign.com',
      lastModified: new Date(),
    },
  ]
}

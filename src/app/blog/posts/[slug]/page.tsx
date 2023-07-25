import { getAllPostsSlugs } from '@sanity/lib/client'
// statically generate routes at build time. aka grab a list of all possible slugs and builds the routes for me.

// /blog/posts/[slug]
// should return {slug: string}[]
export async function generateStaticParams() {
  const slugs: string[] = await getAllPostsSlugs()
  const res = slugs.map((slug) => ({
    slug,
  }))
  return res
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  return <div>My Post: {slug}</div>
}

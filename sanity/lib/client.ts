import {createClient, type SanityClient} from 'next-sanity'
import {postSlugsQuery, postAndMoreStoriesQuery} from './queries'
import {apiVersion, dataset, projectId, useCdn} from '../env'
import {Post} from 'types/interfaces'

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export function getClient() {
  return client
}

export const getSanityImageConfig = () => getClient()

export const getAllPostsSlugs = () => {
  return clientFetch(postSlugsQuery)
}

export async function getPostAndMoreStories(
  client: SanityClient,
  slug: string
): Promise<{post: Post; morePosts: Post[]}> {
  return client.fetch(postAndMoreStoriesQuery, {slug})
}
export const clientFetch = client.fetch.bind(client)

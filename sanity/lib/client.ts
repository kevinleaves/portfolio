import {createClient, type SanityClient} from 'next-sanity'
import {
  postSlugsQuery,
  postAndMoreStoriesQuery,
  getProjectBySlugQuery,
  getProjectsQuery,
} from './queries'
import {apiVersion, dataset, projectId, useCdn} from '../env'
import {Post} from 'types/interfaces'
import {Project} from 'types/Project'

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

export async function getProjects(): Promise<Project[]> {
  return client.fetch(getProjectsQuery)
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(getProjectBySlugQuery, {slug})
}

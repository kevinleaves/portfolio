import { cache } from 'react'
import { createClient } from 'next-sanity'
import { postSlugsQuery } from './queries'
import { apiVersion, dataset, projectId, useCdn } from '../env'

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

export const clientFetch = cache(client.fetch.bind(client))

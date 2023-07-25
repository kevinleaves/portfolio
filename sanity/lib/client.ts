import { cache } from 'react'
import { createClient } from 'next-sanity'

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

export const clientFetch = cache(client.fetch.bind(client))

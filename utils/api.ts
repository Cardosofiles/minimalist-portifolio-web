// utils/api.ts
import axios from 'axios'
import type { GetRepositoriesGithub } from './request-types'

const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || process.env.GITHUB_TOKEN

if (!token) {
  console.warn(
    '⚠️ GitHub token não encontrado. A API pode aplicar limite de 60 req/h.'
  )
}

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: token ? `Bearer ${token}` : undefined,
  },
  timeout: 5000,
})

export const getRepositoryGithub = async (): Promise<
  GetRepositoriesGithub[]
> => {
  const { data } = await api.get('users/Cardosofiles/repos')
  return data
}

// request example with useState and useEffect
'use client'
import { useEffect, useState } from 'react'

type Repo = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  owner: {
    avatar_url: string
  }
}

export function useGithubRepos(username: string) {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos`
        )
        const data = await res.json()
        setRepos(data)
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username])

  return { repos, loading }
}

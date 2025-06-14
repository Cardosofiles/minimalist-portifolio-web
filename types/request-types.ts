export type GetRepositoriesGithub = {
  avatar_url: any
  login: any
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  owner: {
    avatar_url: string
  }
}

export type GetFollowersGithub = {
  id?: number
  name: string
  avatar_url: string
  login: string
}

export type GetFollowersTestemunhal = {
  id: number
  login: string
  name: string | null
  avatar_url: string
}

export type GetRepositoriesGithub = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  owner: {
    avatar_url: string
  }
}

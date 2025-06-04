import { useQuery } from '@tanstack/react-query'

import { getRepositoryGithub } from '@/utils/api'
import type { GetRepositoriesGithub } from '@/utils/request-types'

export function useRepository() {
  return useQuery<GetRepositoriesGithub[]>({
    queryKey: ['get-repos'],
    queryFn: getRepositoryGithub,
  })
}

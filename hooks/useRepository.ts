import { useQuery } from '@tanstack/react-query'

import { getRepositoryGithub } from '@/lib/axiosApi'
import type { GetRepositoriesGithub } from '@/types/request-types'

export function useRepository() {
  return useQuery<GetRepositoriesGithub[]>({
    queryKey: ['get-repos'],
    queryFn: getRepositoryGithub,
  })
}

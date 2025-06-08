import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../helpers';
import type { SkipItem } from '../../types/skip-item';


interface ErrorResponse {
  status: string;
  message: string;
}

export function useSkip() {
  const { data, error, ...others } = useQuery<SkipItem[], ErrorResponse>({
    queryFn: async () => {
      const { data } = await apiClient.get<SkipItem[]>(
        `/skips/by-location?postcode=NR32&area=Lowestoft`,
      );
      return data;
    },
    queryKey: ['skips'],
  });
  const skips = data;

  return {
    skips,
    error,
    ...others,
  };
}

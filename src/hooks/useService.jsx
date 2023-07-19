import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

const useService = () => {

    const { isLoading, refetch, data: allService = [] } = useQuery({
        queryKey: ['service'],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/service')
            return res.data;
        }
    })

    return [isLoading, refetch, allService]
};

export default useService;
import { getPosts } from "@/utils/getPosts";
import { useEffect, useState } from "react";

export const useQuery = <T>(url: string) => {
    const [response, setResponse] = useState<T | null>();
    const [error, setError] = useState<Error | null>();
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        setIsLoading(true);
        const { error, response } = await getPosts<T>(url);
        setIsLoading(false);
        if (error) {
            setError(error);
        }
        setResponse(response)
    };

    useEffect(() => {
        if(!url || url === ""){
            setIsLoading(false);
            setError(new Error("Somthing wrong with you request"));
            return;
        };
        fetchData();
        return () => { }
    }, [])

    return { isLoading, error, response }
}
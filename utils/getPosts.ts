import Papa from "papaparse";

interface ReturnResType<T> {
    response: null | T;
    error: null | Error
}

export const getPosts = async <T>(uri: string, csvToJson = false) => {
    const returnRes: ReturnResType<T> = {
        response: null,
        error: null
    }

    try {
        const response = await fetch(uri, {
            next : {
                revalidate : 600
            }
        });
        const results = await response.text();
        const posts = Papa.parse(results, { header: true }).data.reverse() as T;
        returnRes.response = posts;
        returnRes.error = null;
    } catch (error) {
        returnRes.response = null;
        returnRes.error = error as Error;
    }

    return returnRes;

}
export async function fetchDelete(url){
    try {
        const res = await fetch(url, {
            method: "DELETE"
        })
        console.log(res)
        if(!res.ok){
            return res
        } else {
            return res
        }
    } catch (error) {
        console.log(error)
    }

}
export async function fetchPost(url, bodyContent){
    return new Promise(async (resolve, reject) => {
        const res = await fetch((url), {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyContent),
        })
        console.log(res)
        if(!res.ok){
            reject()
        } else {
            resolve()
            return
        }
    })

}
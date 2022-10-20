export async function fetchC({
    url,
    surfix = "",
    method,
    body,
    formEncoded = false,
    auth = null,
}) {
    const options = {
        credentials: "omit",
        method,
    };

    if (method === "POST" || method === "PUT") {
        if (formEncoded) {
            const form = new FormData();
            for (let key of Object.keys(body)) {
                form.append(key, body[key]);
            }

            options.body = form;
            // console.log(form)
        } else {
            options.body = JSON.stringify(body);
            options.headers = {
                "Content-Type": "application/json",
            };
        }
    }

    if (auth) {
        options.headers = {
            ...options.headers,
            Authorization: `${auth.tokenType} ${auth.accessToken}`,
        };
    }

    try {
        const res = await fetch(url + surfix, options);

        if (res.ok) {
            return {
                success: true,
                data: await res.json(),
            };
        } else {
            return {
                success: false,
                errorMessage: res.statusText,
                statusText: res.statusText,
                status: res.status,
                error: await res.json()
            };
        }
    } catch (err) {
        console.log("fetchCUSTOM: ", err.message)
        return {
            success: false,
            errorMessage: err.message,
            statusText: null,
            status: null,
        };
    }
}
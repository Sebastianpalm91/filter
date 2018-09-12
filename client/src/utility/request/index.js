export default class Request {

    async get(uri) {
        try {
            const res = await fetch(uri, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
            const data = res.json();

            return data;
        } catch (e) {
            throw error;
        }
    }

    async put(uri) {
        try {
            const res = fetch(uri, {
                method: 'PUT',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            });

            const data = res.json();

            return data;
        } catch (e) {
            throw error;
        }
    }

    async post(uri, opts) {
        try {
            const res = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(opts)
            })

            const data = await res.json();

            return data;
        } catch (e) {
            throw error;
        }
    }

    async delete(uri) {
        try {
            const res = await fetch(uri, {
                method: 'DELETE',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            });
            const data = await res.json();

            return data;
        } catch (e) {
            throw error;
        }
    }
}

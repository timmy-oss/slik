import { nanoid } from "nanoid"
import { fetchC } from "./fetchC"

export function RPCify(method, params) {

    return {
        jsonrpc: "2.0",
        method,
        id: nanoid(16),
        params,
    }
}



export async function sendRPC(method, params, rpcUrl = null) {

    const body = RPCify(method, params);

    const res = await fetchC({
        url: rpcUrl || process.env.NEXT_PUBLIC_RPC_URL,
        method: "POST",
        body
    })


    return res;

}
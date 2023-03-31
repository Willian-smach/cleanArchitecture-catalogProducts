export default class ExpressAdapter {
    static create (fn) {
        return async function(req, res) {
            //console.log(await req.body);
            const obj = await fn(req.params, req.body);
            res.json(obj);
        }
    }
}
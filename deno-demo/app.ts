import {serve} from "https://deno.land/std@0.50.0/http/server.ts";
const s = serve({port : 3000});
for await (const req of s){
  req.respond({body: "hello world"})
}
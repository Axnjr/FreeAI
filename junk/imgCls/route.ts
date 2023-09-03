// import axios from "axios";
// import * as imgCls from '@tensorflow-models/mobilenet';
// import '@tensorflow/tfjs-backend-cpu'
// import * as tf from '@tensorflow/tfjs'
// import "@tensorflow/tfjs-node"
import { NextRequest, NextResponse } from "next/server";
// tf.enableProdMode(); // enable on production idk saw it somewhere on github

const replacerFunc = () => {
    const visited = new WeakSet();
    return (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (visited.has(value)) {
            return;
            }
            visited.add(value);
        }
        return value;
    };
};

export async function GET( request : NextRequest ) {
    // const req : any = request.nextUrl.searchParams.get("img");
    // const model = await imgCls.load();
    // const pic = await axios.get(req, { responseType: "arraybuffer", });
    // const buf32 : any = new Uint8Array(pic.data.buffer);
    // const fimg = tf.tensor(buf32)
    // const image : any = await tf.node.decodeImage(pic.data, 3);
    // const predictions = await model.classify(req);
    // image.dispose(); 
    return new NextResponse(JSON.stringify({
        DAT:"STILL WORKING ON THIS MODEL SORRY FOR INCONVINICE ...."
    } , replacerFunc()) , {status:200})
}
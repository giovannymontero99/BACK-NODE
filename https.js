import http from "http";

function verifyPort(port){
    const newPort = parseInt(port,10);
    if(newPort === NaN){
        return port;
    }else {
        return newPort;
    }
}

export const port = process.env.PORT || verifyPort(3000);
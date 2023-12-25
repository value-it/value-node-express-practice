import http from 'k6/http';
import { check, sleep, group } from 'k6';

export function setup() {
    console.log("k6 test setup")
}

export default function() {
    group('GetGroup', getTest);
}

export function getTest() {
    const res = http.get(__ENV.HOST + `/test`,
        {
            tags: {
                name: "GetTest",
            }
        });
    const checkStatus = check(res, {
        'status was 200': (r) => r.status === 200,
    });
    const checkBody = check(res, {
        'body was OK': (r) => r.body.includes("/test called"),
    });
}

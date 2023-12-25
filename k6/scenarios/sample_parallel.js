import http from 'k6/http';
import { check, sleep, group } from 'k6';

export const options = {
    vus: 1000,          // 同時にアクセスする仮想ユーザー数
    duration: '5s',     // テストの実行時間
};

export default function() {
    http.get(__ENV.HOST + `/test`);
}

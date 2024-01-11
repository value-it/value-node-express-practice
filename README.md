# value-node-express-practice

# Node.js + Express でWEBサーバーを起動する

## ローカル起動
```shell
cd express
docker compose up --build
```

## アクセス
http://localhost:8080/

---

# Expressのデフォルトの同時アクセス性能を確認する

## k6セットアップ
```shell
cd k6
# 結果を可視化するためのツールgrafanaを起動
docker compose -f compose-grafana.yml up

# サンプルテスト実行
docker compose -f compose-run-k6.yml run --rm k6 run --out influxdb=http://influxdb:8086/k6db_sample /scenarios/sample.js
```

## Grafana設定
### まずはGrafanaにログイン
http://localhost:3000/  
初期ID/パスワード: admin / admin  

### GrafanaとInfluxDBの連携設定
http://localhost:3000/connections/datasources/new
- InfluxDBを選択
- HTTP.URL: http://influxdb:8086
- InfluxDB Details.Database: k6db_sample

### グラフ追加

TBD


---
# Appendix
## コンテナイメージをdockerリポジトリにpushする

```shell

# コンテナイメージをビルド
docker build -t value4u/value-node-express-practice:latest ./express

docker login
docker push value4u/value-node-express-practice:latest
```

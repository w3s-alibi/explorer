# TLSN Explorer

TLSN Explorer is server that will handle the social discovery and visualization of proofs generated from the TLS Notary protocol.

## Set up .env
1. `cp .env.sample .env`
2. Create an API key in [Pinata.cloud](https://docs.pinata.cloud/quickstart/node-js#generate-your-api-keys)
3. Create a new Gateway in [Pinata.cloud](https://app.pinata.cloud/gateway)
4. Create a new Gateway access token in [Pinata.cloud](https://app.pinata.cloud/developers/gateway-settings)
5. Update your `.env` file

## Development
```bash
npm i
npm run dev
```

## Build and Start
```bash
npm i
npm run build
npm start
```

## Server API

### POST /upload

Request:
```
curl -F 'data=@/path/to/file' http://localhost:3000/upload
```

Response:
```
// CID string
bafkreihlmzaynphb7cunvjjsm25w3uw5dbqvifq3wzppw33jztqqrx6oqi
```

### GET /ipfs/:cid

Request:
```
curl http://localhost:3000/ipfs/bafkre....tqqrx6oqi
```

Response:
```
download file bafkre....tqqrx6oqi.json
```
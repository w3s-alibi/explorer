# TLSN Explorer

TLSN Explorer is server that will handle the social discovery and visualization of proofs generated from the TLS Notary protocol.

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
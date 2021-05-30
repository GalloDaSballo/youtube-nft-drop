# YT NFT Drop

Get more subscribers by rewarding those who get in early

Issue NFT Drops for your subscribers


Monorepo setup using:
- Solidity Template by @TomAFrench and @paulrberg
- NextJS with Typescript and EsLint
- theGraph

## Live site

https://www.ytdrop.xyz/

## Contracts Deployed on Matic
`
0xF5aA8e3C6BA1EdF766E197a0bCD5844Fd1ed8A27
`

## Subgraph link

https://thegraph.com/explorer/subgraph/gallodasballo/proof-of-sub



## hardhat
The contracts, with tests and tasks to publish new content, using Solidity Template

## next
The UI for the website, to interact with the protocol and publish new content, using NextJS

## subgraph
The subgraph code to track new posts, using TheGraph

# Commands

## Shortcuts
```
yarn hardhat
```
```
yarn next
```
```
yarn subgraph
```

### Example: Deploy with Hardhat
```
yarn hardhat deploy
```

### Example Run NextJS in Development Mode
```
yarn next dev
```

# Setup Hardhat

Rename `.env.example` to `.env` and fill in the details

# Setup Subgraph

Rename `YOU_GITHUB/SUB_GRAPHNAME` in `subgraph/package.json`
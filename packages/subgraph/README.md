# YtDrop Subgraph

Tracks Drops and Claims

Use Drops to query info on the drop and their Clams
Use Claims to see which claims where done by a address or more info on a single claim

```javascript
{
  drops(first: 5) {
    id
    channelId
    tokenURI
    claims {
      id
      subscriber
      tokenId
    }
  }
  
  claims(first: 5) {
    id
    subscriber
    drop {
      id
      channelId
      tokenURI
    }
    tokenId
  }
}

```
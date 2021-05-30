import {TokenClaim} from "../generated/ProofOfSub/ProofOfSub"
import { Drop, Claim } from '../generated/schema'

export function handleTokenClaim(event: TokenClaim): void {
  const dropId = event.params.tokenURI.toString();

  let drop = Drop.load(dropId);
  if(!drop) {
    drop = new Drop(dropId);
    drop.channelId = event.params.channelId;
    drop.tokenURI = event.params.tokenURI;
  }

  const claimID = dropId + "" + event.params.subscriber.toHexString();
  let claim = Claim.load(claimID)
  if(!claim) {
    claim = new Claim(claimID)
    claim.subscriber = event.params.subscriber;
    claim.drop = dropId;
    claim.tokenId = event.params.tokenId
  }

  drop.save()
  claim.save()
}

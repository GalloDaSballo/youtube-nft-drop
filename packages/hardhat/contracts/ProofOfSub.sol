// contracts/ProofOfSub.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract ProofOfSub is ERC721URIStorage, Ownable, ERC721PresetMinterPauserAutoId {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address constant BOT_ADDRESS = 0x00e69aE238c25C5Ad698Bb08355AA5Bc209FE991;

    event TokenClaim(address indexed subscriber, string tokenURI, string channelId, uint256 indexed tokenId);

    constructor(string memory name, string memory symbol, string memory baseTokenURI) ERC721PresetMinterPauserAutoId(name, symbol, baseTokenURI) {
        _setupRole(DEFAULT_ADMIN_ROLE, BOT_ADDRESS);
        _setupRole(MINTER_ROLE, BOT_ADDRESS);
        _setupRole(PAUSER_ROLE, BOT_ADDRESS);
    }

    function awardItem(address _subscriber, string memory _tokenURI, string memory _channelId)
    public onlyOwner
    returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(_subscriber, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        emit TokenClaim(_subscriber, _tokenURI, _channelId, newItemId);

        return newItemId;
    }

    function _baseURI() internal view virtual override(ERC721, ERC721PresetMinterPauserAutoId) returns (string memory) {
        return super._baseURI();
    }

    function _burn(uint256 tokenId) internal virtual override(ERC721, ERC721URIStorage) {
        return super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view virtual override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC721PresetMinterPauserAutoId) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal virtual override(ERC721, ERC721PresetMinterPauserAutoId) {
        return super._beforeTokenTransfer(from, to, tokenId);
    }
}

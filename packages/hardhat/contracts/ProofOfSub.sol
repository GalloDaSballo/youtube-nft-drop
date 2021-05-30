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

    // Mapping from owner to token if claimed
    mapping (address => mapping (bytes32 => bool)) public _ownershipClaimed;

    event TokenClaim(address indexed subscriber, string tokenURI, string channelId, uint256 indexed tokenId);

    constructor(address botAddress, string memory name, string memory symbol, string memory baseTokenURI) ERC721PresetMinterPauserAutoId(name, symbol, baseTokenURI) {
        _setupRole(DEFAULT_ADMIN_ROLE, botAddress);
        _setupRole(MINTER_ROLE, botAddress);
        _setupRole(PAUSER_ROLE, botAddress);
    }

    function stringToBytes32(string memory source) public pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            result := mload(add(source, 32))
        }
    }

    modifier _isClaimed(address _subscriber, string memory _tokenURI) {
        require(_ownershipClaimed[_subscriber][stringToBytes32(_tokenURI)] == false);
        _;
    }

    function awardItem(address _subscriber, string memory _tokenURI, string memory _channelId)
    public onlyRole(MINTER_ROLE) _isClaimed(_subscriber, _tokenURI)
    returns (uint256, string memory)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(_subscriber, newItemId);
        _setTokenURI(newItemId, _tokenURI);
        _ownershipClaimed[_subscriber][stringToBytes32(_tokenURI)] = true;

        emit TokenClaim(_subscriber, _tokenURI, _channelId, newItemId);
        return (newItemId, _tokenURI);
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

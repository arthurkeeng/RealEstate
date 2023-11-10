
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

contract SimpleStorage {
    uint256 public favouriteNumber;

    function setFavouriteNumber(uint256 no) public { 
        favouriteNumber = no;


    }

    function getFavouriteNumber() public view returns(uint256){
        return favouriteNumber;
    }
}
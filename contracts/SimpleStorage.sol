//  SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SimpleStorage {
    uint256 favoriteNumber;
    struct Person {
        uint256 favoriteNumber;
        string name;
    }
    Person[] people;
    mapping(string => uint256) nameToFavoriteNumber;
    function setFavoriteNumber(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }
    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }
    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        // removing this line as PUSH uses too much gas and makes deploying impossible
        // people.push(Person({name: _name, favoriteNumber: _favoriteNumber}));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}

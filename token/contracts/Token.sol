// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Token {
    uint256 public totalSupply;

    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply;
    }
}

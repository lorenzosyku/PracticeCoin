// SPDX-License-Identifier: None

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract PracticeCoin is ERC20 {
  constructor() ERC20("PracticeCoin", "PC"){
    _mint(msg.sender, 1_000_000 * 10**decimals());
  }
}
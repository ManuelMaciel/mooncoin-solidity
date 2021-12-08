// SPDX-License-Identifier: MIT
pragma solidity ^0.4.24;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol';

contract MoonCoin is ERC20Mintable {
  string public name = "MoonCoin";
  string public symbol = "MOON";
  uint8 public decimals = 18;
}

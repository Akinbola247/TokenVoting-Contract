// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface Ivote {
    struct contenderDetail {
     address contenderAddress;
    uint contenderVotes;
    }

    function buyToken() external payable;
    function registerContender(address _contender) external;
    function votingPool(address _contender1, address _contender2, address _contender3) external;
    function collateVote(address _contender1, address _contender2, address _contender3) external;
    function getResult() external view returns(contenderDetail[] memory);
    function startVoting() external;
    function endVoting(address _contender1, address _contender2, address _contender3)external;
    function getWinner() external view returns(contenderDetail memory final_result);
    function _balanceOf(address user) external view returns(uint256);
    function transfer(address _to, uint amount)external;
}
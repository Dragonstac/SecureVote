// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17; //This is the version of the Solidity compiler we want our contract to use

// version of solidity

import "hardhat/console.sol";//Some magic given to us by Hardhat to do some console logs in our contract


//Once we initialize this contract for the first time, that constructor will run and print out that line
contract Secure {
//we also added a totalWaves variable that automatically is initialized to 0. 
//But, this variable is special because it's called a "state variable" and it's cool because it's stored permanently in contract storage.

    address owner;
    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
        owner=msg.sender;

       
    }

        struct template{
            uint256 votes;
            string name;
            string about;
            string describe;


        }


         template[] public identity;
           

     function addPerson(string memory _name,string memory _about,string memory _describe) public {
         if(msg.sender==owner){
    identity.push(template(0,_name,_about,_describe));
         }
    
  }


function getvotes(uint256 index) public view returns (uint256){
    if(identity.length==0){
        console.log("no identity exist");
        
    }
    return identity[index].votes;

}
    function addvote(uint256 index) public {
        if(identity.length==0){
        console.log("no identity exist");
        
    }
        identity[index].votes++;
        
    }

       function retrieve() public view returns (address){
            console.log("owner");
        return owner;
    }
    function winner() public view returns (string memory,string memory,string memory,uint){
        if(identity[0].votes>identity[1].votes){
            template storage temp = identity[0];
            return (temp.name,temp.about,temp.describe,temp.votes);
        }else if(identity[1].votes>identity[0].votes){
            template storage temp1 = identity[1];
            return (temp1.name,temp1.about,temp1.describe,temp1.votes);
        }else{
            return ("votes are equal","NILL","NILL",0);
        }

    }

    function endPoll() public {
            if(msg.sender==owner){
        delete identity;
            }
    }

} 


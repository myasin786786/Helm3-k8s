import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import node from "../../assets/node.png";
import rust from "../../assets/rust.png";
import golang from "../../assets/golang.png";

const DevToolTabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="tabs-comp">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            <img src={rust} alt="Rust" className="lang-img" />
            <span>Rust</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            <img src={node} alt="Node JS" className="lang-img" />
            <span>Node</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            <img src={golang} alt="Golang" className="lang-img" />
            <span>Go</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SyntaxHighlighter language="rust" style={tomorrowNightBlue} wrapLongLines={true}>
            {`
use near_sdk::{near_bindgen, env};

#[near_bindgen]
#[derive(Default, BorshDeserialize, BorshSerialize)]
pub struct StatusMessage {
    records: HashMap<String, String>,
}

#[near_bindgen]
impl StatusMessage {
    pub fn set_status(&mut self, message: String) {
        let account_id = env::signer_account_id();
        self.records.insert(account_id, message);
    }

    pub fn get_status(&self, account_id: String) -> Option<String> {
        self.records.get(&account_id).cloned()
    }
}

                    `}
          </SyntaxHighlighter>
        </TabPane>
        <TabPane tabId="2">
          <SyntaxHighlighter language="node" style={tomorrowNightBlue} wrapLongLines={true}>
            {`
            const Web3 = require('web3');
            const fs = require('fs');
            const solc = require('solc');
            
            /*
            * connect to ethereum node
            */ 
            const ethereumUri = 'http://localhost:8540';
            const address = '0x004ec07d2329997267Ec62b4166639513386F32E'; // user
            
            let web3 = new Web3();
            web3.setProvider(new web3.providers.HttpProvider(ethereumUri));
            
            if(!web3.isConnected()){
                throw new Error('unable to connect to ethereum node at ' + ethereumUri);
            }else{
                console.log('connected to ehterum node at ' + ethereumUri);
                let coinbase = web3.eth.coinbase;
                console.log('coinbase:' + coinbase);
                let balance = web3.eth.getBalance(coinbase);
                console.log('balance:' + web3.fromWei(balance, 'ether') + " ETH");
                let accounts = web3.eth.accounts;
                console.log(accounts);
            }
            
            /*
            * Compile Contract and Fetch ABI
            */ 
            let source = fs.readFileSync("./contracts/BasicToken.sol", 'utf8');
            
            console.log('compiling contract...');
            let compiledContract = solc.compile(source);
            console.log('done');
            
            for (let contractName in compiledContract.contracts) {
                // code and ABI that are needed by web3 
                // console.log(contractName + ': ' + compiledContract.contracts[contractName].bytecode);
                // console.log(contractName + '; ' + JSON.parse(compiledContract.contracts[contractName].interface));
                var bytecode = compiledContract.contracts[contractName].bytecode;
                var abi = JSON.parse(compiledContract.contracts[contractName].interface);
            }
            
            console.log(JSON.stringify(abi, undefined, 2));
            
            /*
            * deploy contract
            */ 
            let gasEstimate = web3.eth.estimateGas({data: '0x' + bytecode});
            console.log('gasEstimate = ' + gasEstimate);
            let MyContract = web3.eth.contract(abi);
            console.log('deploying contract...');
            let myContractReturned = MyContract.new( {
                from: address,
                data: '0x'+ bytecode,
                gas: gasEstimate + 50000
            }, function (err, myContract) {
                if (!err) {
                    // NOTE: The callback will fire twice!
                    // Once the contract has the transactionHash property set and once its deployed on an address.
// Note that the returned "myContractReturned" === "myContract",
                    // so the returned "myContractReturned" object will also get the address set.
                } else {
                    console.log(err);
                }
            });
            
            
            (function wait () {
                setTimeout(wait, 1000);
            })();
                        
                    `}
          </SyntaxHighlighter>
        </TabPane>
        <TabPane tabId="3">

          <SyntaxHighlighter language="go" style={tomorrowNightBlue} wrapLongLines={true}>
            {`
package main

import (
    "fmt"

    "github.com/hyperledger/fabric/core/chaincode/shim"
    "github.com/hyperledger/fabric/protos/peer"
)

// SampleChaincode implements a simple chaincode to manage an asset
type SampleChaincode struct {

}

// Init is called during chaincode instantiation to initialize
// data. We'll be adding more in this function later on.
func (t *SampleChaincode) Init(stub shim.ChaincodeStubInterface) peer.Response {
    // Get the args from the transaction proposal
    args := stub.GetStringArgs()
    if len(args) != 2 {
        return shim.Error("Incorrect arguments. Expecting a key and a value")
    }

    // Set up any variables or assets here by calling stub.PutState()

    // We store the key and the value on the ledger
    err := stub.PutState(args[0], []byte(args[1]))
    if err != nil {
        return shim.Error(fmt.Sprintf("Failed to create asset: %s", args[0]))
    }
    return shim.Success(nil)
}

// Invoke is called per transaction on the chaincode. Each transaction is
// either a 'get' or a 'set' on the asset created by Init function. The Set
// method may create a new asset by specifying a new key-value pair.
func (t *SampleChaincode) Invoke(stub shim.ChaincodeStubInterface) peer.Response {
    // Extract the function and args from the transaction proposal
    fn, args := stub.GetFunctionAndParameters()

    var result string
    var err error
    if fn == "set" {
        result, err = set(stub, args)
    } else { // assume 'get' even if fn is nil
        result, err = get(stub, args)
    }
    if err != nil {
        return shim.Error(err.Error())
    }

    // Return the result as success payload
    return shim.Success([]byte(result))
}

// Set stores the asset (both key and value) on the ledger. If the key exists,
// it will override the value with the new one
func set(stub shim.ChaincodeStubInterface, args []string) (string, error) {
    if len(args) != 2 {
        return "", fmt.Errorf("Incorrect arguments. Expecting a key and a value")
    }

    err := stub.PutState(args[0], []byte(args[1]))
    if err != nil {
        return "", fmt.Errorf("Failed to set asset: %s", args[0])
    }
    return args[1], nil
}

// Get returns the value of the specified asset key
func get(stub shim.ChaincodeStubInterface, args []string) (string, error) {
    if len(args) != 1 {
        return "", fmt.Errorf("Incorrect arguments. Expecting a key")
    }

    value, err := stub.GetState(args[0])
    if err != nil {
        return "", fmt.Errorf("Failed to get asset: %s with error: %s", args[0], err)
    }
    if value == nil {
        return "", fmt.Errorf("Asset not found: %s", args[0])
    }
    return string(value), nil
}

// main function starts up the chaincode in the container during instantiate
func main() {
    err := shim.Start(new(SampleChaincode))
    if err != nil {
        fmt.Println("Could not start SampleChaincode")
    } else {
        fmt.Println("SampleChaincode successfully started")
    }
}

           `}
          </SyntaxHighlighter>
        </TabPane>
      </TabContent>
      {/* <a href="#" className="api-link" target="_blank" rel="noopener noreferrer">Full API reference</a> */}
    </div>
  );
}

export default DevToolTabs;
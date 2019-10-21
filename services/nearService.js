const websiteUser = 'site-events'

function getBalance() {
  return contract.balanceOf({ tokenOwner: websiteUser })
}

async function chargeTokens() {
  console.log('charging tokens...')
  const to = websiteUser
  const tokens = '100'
  await contract.transfer({to, tokens })

  console.log('done')
}

async function connect() {
  window.nearConfig =  Cookies.getJSON('fiddleConfig');

  // Initializing connection to the NEAR node.
  window.near = await nearlib.connect(Object.assign(nearConfig, { deps: { keyStore: new nearlib.keyStores.BrowserLocalStorageKeyStore() }}));

  // Needed to access wallet login
  window.walletAccount = new nearlib.WalletAccount(window.near);

  // Initializing our contract APIs by contract name and configuration.
  window.contract = await near.loadContract(nearConfig.contractName, {
    viewMethods: ["totalSupply", "balanceOf", "allowance"],
    changeMethods: ["init", "transfer", "approve", "transferFrom"],
    sender: window.walletAccount.getAccountId()
  });
}

module.exports.getBalance = getBalance
module.exports.chargeTokens = chargeTokens
module.exports.connect = connect

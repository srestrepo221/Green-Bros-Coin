const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token', () => {
  let token, accounts, deployer

  beforeEach(async () => {
    const Token = await ethers.getContractFactory('Token')
    token = await Token.deploy('Green Bros', 'GB', '21000000000')

    accounts = await ethers.getSigners()
    deployer = accounts[0]
  })

  describe('Deployment', () => {
    const name = 'Green Bros'
    const symbol = 'GB'
    const decimals = '18'
    const totalSupply = '21000000000000000000000000000'

    it('has correct name', async () => {
      expect(await token.name()).to.equal(name)
    })

    it('has correct symbol', async () => {
      expect(await token.symbol()).to.equal(symbol)
    })

    it('has correct decimals', async () => {
      expect(await token.decimals()).to.equal(decimals)
    })

    it('has correct total supply', async () => {
      expect(await token.totalSupply()).to.equal(totalSupply)
    })

    it('assigns total supply to deployer', async () => {
      expect(await token.balanceOf(deployer.address)).to.equal(totalSupply)
    })

  })

})

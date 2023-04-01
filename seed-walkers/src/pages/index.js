import Header from '../components/Header'
import Footer from '../components/Footer'
import NFT from '../components/NFT'
import Walker from '../components/Walker'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { celoAlfajores } from 'wagmi/chains'

import { Web3Button } from '@web3modal/react'
import { useAccount, useContract, useSigner } from 'wagmi'


export default function Home() {

  const chains = [ celoAlfajores ]
  const projectId = '8f22bc8eb0ab9a41c73c2d694fe47775'
  
  const { provider } = configureChains(chains, [w3mProvider({ projectId })])
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    provider
  })
  const ethereumClient = new EthereumClient(wagmiClient, chains)

  return (
    <>

    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />    
    <Header/>
    <Walker/>
    <NFT/>
    <Footer/>

    </>
  )
}



import { ContractName, SupportedNetworkId } from './types'

const addresses: Record<
  ContractName,
  Partial<Record<SupportedNetworkId, string>> | string
> = {
  /* eslint-disable @typescript-eslint/naming-convention */
  BaseRegistrarImplementation: {
    '1': '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    '3': '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    '4': '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    '5': '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
  },
  DNSRegistrar: {
    '1': '0x58774Bb8acD458A640aF0B88238369A167546ef2',
    '3': '0xdB328BA5FEcb432AF325Ca59E3778441eF5aa14F',
    '5': '0x8edc487D26F6c8Fa76e032066A3D4F87E273515d',
  },
  ETHRegistrarController: {
    '1': '0x283af0b28c62c092c9727f1ee09c02ca627eb7f5',
    '3': '0xa5627AB7Ae47063B533622C34FEBDb52d3281dF8',
    '4': '0x283af0b28c62c092c9727f1ee09c02ca627eb7f5',
    '5': '0x9C51161bA2FB02Cc0a403332B607117685f34831',
  },
  Multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
  NameWrapper: {
    '1': '0x0000000000000000000000000000000000000000',
    '3': '0xF82155e2a43Be0871821E9654Fc8Ae894FB8307C',
    '4': '0x0000000000000000000000000000000000000000',
    '5': '0x582224b8d4534F4749EFA4f22eF7241E0C56D4B8',
  },
  PublicResolver: {
    '1': '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
    '3': '0x13F0659Ee6bb7484C884FEeFb7F75C93951ef837',
    '5': '0xE264d5bb84bA3b8061ADC38D3D76e6674aB91852',
  },
  ENSRegistryWithFallback: {
    '1': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '3': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '4': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '5': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
  },
  ReverseRegistrar: {
    '1': '0x084b1c3C81545d370f3634392De611CaaBFf8148',
    '3': '0x806246b52f8cB61655d3038c58D2f63Aa55d4edE',
    '5': '0xD5610A08E370051a01fdfe4bB3ddf5270af1aA48',
  },
  UniversalResolver: {
    '1': '0x580AF46E06DaaD47eb5940526FD64d95b815Cb70',
    '3': '0x74e20bd2a1fe0cdbe45b9a1d89cb7e0a45b36376',
    '4': '0x74e20bd2a1fe0cdbe45b9a1d89cb7e0a45b36376',
    '5': '0x687c30Cc44bFA39A1449e86E172BF002E7b3f0b0',
  },
  BulkRenewal: {
    '1': '0xfF252725f6122A92551A5FA9a6b6bf10eb0Be035',
    '3': '0x051b02245D826757EfaF5C6209D4D79FB39FBC45',
    '5': '0xa9e1df95a79C768aA435805b28E1B54Bb5ead063',
  },
  /* eslint-enable @typescript-eslint/naming-convention */
}

export type ContractAddressFetch = (contractName: ContractName) => string

export const getContractAddress = (networkId: SupportedNetworkId) =>
  ((contractName: ContractName) => {
    try {
      return typeof addresses[contractName] === 'string'
        ? addresses[contractName]
        : addresses[contractName][networkId]
    } catch {
      throw new Error(
        `No address for contract ${contractName} on network ${networkId}`,
      )
    }
  }) as ContractAddressFetch

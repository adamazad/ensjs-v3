import { ethers } from 'ethers'
import { hexEncodeName } from './utils/hexEncodedName'

export default async ({ contracts }: { contracts: any }, address: string) => {
  const universalResolver: ethers.Contract =
    await contracts.getUniversalResolver()

  const reverseNode = address.toLowerCase().substring(2) + '.addr.reverse'

  try {
    const result = await universalResolver.reverse(hexEncodeName(reverseNode), [
      {
        sig: 'addr(bytes32)',
        data: [],
      },
    ])

    const [addr] = ethers.utils.defaultAbiCoder.decode(
      ['address'],
      result['1'][0],
    )

    return {
      name: result['0'],
      match: addr.toLowerCase() === address.toLowerCase(),
    }
  } catch {
    return { name: null, match: false }
  }
}

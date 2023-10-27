import {
  ApprovalForAll as ApprovalForAllEvent,
  BatchSizeLimitSet as BatchSizeLimitSetEvent,
  MessageFailed as MessageFailedEvent,
  OperatorFilterRegistryAddressUpdated as OperatorFilterRegistryAddressUpdatedEvent,
  OperatorFilterRegistryRevoked as OperatorFilterRegistryRevokedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PrimeSet as PrimeSetEvent,
  ReceiveBatchFromChain as ReceiveBatchFromChainEvent,
  ReceiveFromChain as ReceiveFromChainEvent,
  RetryMessageSuccess as RetryMessageSuccessEvent,
  SendBatchToChain as SendBatchToChainEvent,
  SendToChain as SendToChainEvent,
  SetMinDstGas as SetMinDstGasEvent,
  SetPrecrime as SetPrecrimeEvent,
  SetTrustedRemote as SetTrustedRemoteEvent,
  SetTrustedRemoteAddress as SetTrustedRemoteAddressEvent,
  SetUseCustomAdapterParams as SetUseCustomAdapterParamsEvent,
  SpendGatewayRegistered as SpendGatewayRegisteredEvent,
  SpendInvoked as SpendInvokedEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  TrustedForwarderSet as TrustedForwarderSetEvent,
  URI as URIEvent
} from "../generated/Contract/Contract"
import {
  ApprovalForAll,
  BatchSizeLimitSet,
  MessageFailed,
  OperatorFilterRegistryAddressUpdated,
  OperatorFilterRegistryRevoked,
  OwnershipTransferred,
  PrimeSet,
  ReceiveBatchFromChain,
  ReceiveFromChain,
  RetryMessageSuccess,
  SendBatchToChain,
  SendToChain,
  SetMinDstGas,
  SetPrecrime,
  SetTrustedRemote,
  SetTrustedRemoteAddress,
  SetUseCustomAdapterParams,
  SpendGatewayRegistered,
  SpendInvoked,
  TransferBatch,
  TransferSingle,
  TrustedForwarderSet,
  URI
} from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBatchSizeLimitSet(event: BatchSizeLimitSetEvent): void {
  let entity = new BatchSizeLimitSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.batchSizeLimit = event.params.batchSizeLimit

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMessageFailed(event: MessageFailedEvent): void {
  let entity = new MessageFailed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._srcChainId = event.params._srcChainId
  entity._srcAddress = event.params._srcAddress
  entity._nonce = event.params._nonce
  entity._payload = event.params._payload
  entity._reason = event.params._reason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOperatorFilterRegistryAddressUpdated(
  event: OperatorFilterRegistryAddressUpdatedEvent
): void {
  let entity = new OperatorFilterRegistryAddressUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newRegistry = event.params.newRegistry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOperatorFilterRegistryRevoked(
  event: OperatorFilterRegistryRevokedEvent
): void {
  let entity = new OperatorFilterRegistryRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePrimeSet(event: PrimeSetEvent): void {
  let entity = new PrimeSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prime = event.params.prime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReceiveBatchFromChain(
  event: ReceiveBatchFromChainEvent
): void {
  let entity = new ReceiveBatchFromChain(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._srcChainId = event.params._srcChainId
  entity._srcAddress = event.params._srcAddress
  entity._toAddress = event.params._toAddress
  entity._tokenIds = event.params._tokenIds
  entity._amounts = event.params._amounts

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReceiveFromChain(event: ReceiveFromChainEvent): void {
  let entity = new ReceiveFromChain(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._srcChainId = event.params._srcChainId
  entity._srcAddress = event.params._srcAddress
  entity._toAddress = event.params._toAddress
  entity._tokenId = event.params._tokenId
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRetryMessageSuccess(
  event: RetryMessageSuccessEvent
): void {
  let entity = new RetryMessageSuccess(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._srcChainId = event.params._srcChainId
  entity._srcAddress = event.params._srcAddress
  entity._nonce = event.params._nonce
  entity._payloadHash = event.params._payloadHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSendBatchToChain(event: SendBatchToChainEvent): void {
  let entity = new SendBatchToChain(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._dstChainId = event.params._dstChainId
  entity._from = event.params._from
  entity._toAddress = event.params._toAddress
  entity._tokenIds = event.params._tokenIds
  entity._amounts = event.params._amounts

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSendToChain(event: SendToChainEvent): void {
  let entity = new SendToChain(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._dstChainId = event.params._dstChainId
  entity._from = event.params._from
  entity._toAddress = event.params._toAddress
  entity._tokenId = event.params._tokenId
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetMinDstGas(event: SetMinDstGasEvent): void {
  let entity = new SetMinDstGas(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._dstChainId = event.params._dstChainId
  entity._type = event.params._type
  entity._minDstGas = event.params._minDstGas

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetPrecrime(event: SetPrecrimeEvent): void {
  let entity = new SetPrecrime(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.precrime = event.params.precrime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetTrustedRemote(event: SetTrustedRemoteEvent): void {
  let entity = new SetTrustedRemote(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._remoteChainId = event.params._remoteChainId
  entity._path = event.params._path

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetTrustedRemoteAddress(
  event: SetTrustedRemoteAddressEvent
): void {
  let entity = new SetTrustedRemoteAddress(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._remoteChainId = event.params._remoteChainId
  entity._remoteAddress = event.params._remoteAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetUseCustomAdapterParams(
  event: SetUseCustomAdapterParamsEvent
): void {
  let entity = new SetUseCustomAdapterParams(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._useCustomAdapterParams = event.params._useCustomAdapterParams

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSpendGatewayRegistered(
  event: SpendGatewayRegisteredEvent
): void {
  let entity = new SpendGatewayRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.handler = event.params.handler
  entity.nftDestinationAddress = event.params.nftDestinationAddress
  entity.nativeTokenDestinationAddress =
    event.params.nativeTokenDestinationAddress
  entity.primeDestinationAddress = event.params.primeDestinationAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSpendInvoked(event: SpendInvokedEvent): void {
  let entity = new SpendInvoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.nftDestination = event.params.nftDestination
  entity.nativeDestination = event.params.nativeDestination
  entity.primeDestination = event.params.primeDestination
  entity.Contract_id = event.params.id
  entity._tokenIds = event.params._tokenIds
  entity._amounts = event.params._amounts
  entity.nativeValue = event.params.nativeValue
  entity.primeValue = event.params.primeValue
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.Contract_id = event.params.id
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTrustedForwarderSet(
  event: TrustedForwarderSetEvent
): void {
  let entity = new TrustedForwarderSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.forwarder = event.params.forwarder

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.value = event.params.value
  entity.Contract_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

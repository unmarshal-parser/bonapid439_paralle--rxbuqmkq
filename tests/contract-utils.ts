import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/Contract/Contract"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBatchSizeLimitSetEvent(
  batchSizeLimit: BigInt
): BatchSizeLimitSet {
  let batchSizeLimitSetEvent = changetype<BatchSizeLimitSet>(newMockEvent())

  batchSizeLimitSetEvent.parameters = new Array()

  batchSizeLimitSetEvent.parameters.push(
    new ethereum.EventParam(
      "batchSizeLimit",
      ethereum.Value.fromUnsignedBigInt(batchSizeLimit)
    )
  )

  return batchSizeLimitSetEvent
}

export function createMessageFailedEvent(
  _srcChainId: i32,
  _srcAddress: Bytes,
  _nonce: BigInt,
  _payload: Bytes,
  _reason: Bytes
): MessageFailed {
  let messageFailedEvent = changetype<MessageFailed>(newMockEvent())

  messageFailedEvent.parameters = new Array()

  messageFailedEvent.parameters.push(
    new ethereum.EventParam(
      "_srcChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_srcChainId))
    )
  )
  messageFailedEvent.parameters.push(
    new ethereum.EventParam(
      "_srcAddress",
      ethereum.Value.fromBytes(_srcAddress)
    )
  )
  messageFailedEvent.parameters.push(
    new ethereum.EventParam("_nonce", ethereum.Value.fromUnsignedBigInt(_nonce))
  )
  messageFailedEvent.parameters.push(
    new ethereum.EventParam("_payload", ethereum.Value.fromBytes(_payload))
  )
  messageFailedEvent.parameters.push(
    new ethereum.EventParam("_reason", ethereum.Value.fromBytes(_reason))
  )

  return messageFailedEvent
}

export function createOperatorFilterRegistryAddressUpdatedEvent(
  newRegistry: Address
): OperatorFilterRegistryAddressUpdated {
  let operatorFilterRegistryAddressUpdatedEvent = changetype<
    OperatorFilterRegistryAddressUpdated
  >(newMockEvent())

  operatorFilterRegistryAddressUpdatedEvent.parameters = new Array()

  operatorFilterRegistryAddressUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newRegistry",
      ethereum.Value.fromAddress(newRegistry)
    )
  )

  return operatorFilterRegistryAddressUpdatedEvent
}

export function createOperatorFilterRegistryRevokedEvent(): OperatorFilterRegistryRevoked {
  let operatorFilterRegistryRevokedEvent = changetype<
    OperatorFilterRegistryRevoked
  >(newMockEvent())

  operatorFilterRegistryRevokedEvent.parameters = new Array()

  return operatorFilterRegistryRevokedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPrimeSetEvent(prime: Address): PrimeSet {
  let primeSetEvent = changetype<PrimeSet>(newMockEvent())

  primeSetEvent.parameters = new Array()

  primeSetEvent.parameters.push(
    new ethereum.EventParam("prime", ethereum.Value.fromAddress(prime))
  )

  return primeSetEvent
}

export function createReceiveBatchFromChainEvent(
  _srcChainId: i32,
  _srcAddress: Bytes,
  _toAddress: Address,
  _tokenIds: Array<BigInt>,
  _amounts: Array<BigInt>
): ReceiveBatchFromChain {
  let receiveBatchFromChainEvent = changetype<ReceiveBatchFromChain>(
    newMockEvent()
  )

  receiveBatchFromChainEvent.parameters = new Array()

  receiveBatchFromChainEvent.parameters.push(
    new ethereum.EventParam(
      "_srcChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_srcChainId))
    )
  )
  receiveBatchFromChainEvent.parameters.push(
    new ethereum.EventParam(
      "_srcAddress",
      ethereum.Value.fromBytes(_srcAddress)
    )
  )
  receiveBatchFromChainEvent.parameters.push(
    new ethereum.EventParam(
      "_toAddress",
      ethereum.Value.fromAddress(_toAddress)
    )
  )
  receiveBatchFromChainEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenIds",
      ethereum.Value.fromUnsignedBigIntArray(_tokenIds)
    )
  )
  receiveBatchFromChainEvent.parameters.push(
    new ethereum.EventParam(
      "_amounts",
      ethereum.Value.fromUnsignedBigIntArray(_amounts)
    )
  )

  return receiveBatchFromChainEvent
}

export function createReceiveFromChainEvent(
  _srcChainId: i32,
  _srcAddress: Bytes,
  _toAddress: Address,
  _tokenId: BigInt,
  _amount: BigInt
): ReceiveFromChain {
  let receiveFromChainEvent = changetype<ReceiveFromChain>(newMockEvent())

  receiveFromChainEvent.parameters = new Array()

  receiveFromChainEvent.parameters.push(
    new ethereum.EventParam(
      "_srcChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_srcChainId))
    )
  )
  receiveFromChainEvent.parameters.push(
    new ethereum.EventParam(
      "_srcAddress",
      ethereum.Value.fromBytes(_srcAddress)
    )
  )
  receiveFromChainEvent.parameters.push(
    new ethereum.EventParam(
      "_toAddress",
      ethereum.Value.fromAddress(_toAddress)
    )
  )
  receiveFromChainEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  receiveFromChainEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return receiveFromChainEvent
}

export function createRetryMessageSuccessEvent(
  _srcChainId: i32,
  _srcAddress: Bytes,
  _nonce: BigInt,
  _payloadHash: Bytes
): RetryMessageSuccess {
  let retryMessageSuccessEvent = changetype<RetryMessageSuccess>(newMockEvent())

  retryMessageSuccessEvent.parameters = new Array()

  retryMessageSuccessEvent.parameters.push(
    new ethereum.EventParam(
      "_srcChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_srcChainId))
    )
  )
  retryMessageSuccessEvent.parameters.push(
    new ethereum.EventParam(
      "_srcAddress",
      ethereum.Value.fromBytes(_srcAddress)
    )
  )
  retryMessageSuccessEvent.parameters.push(
    new ethereum.EventParam("_nonce", ethereum.Value.fromUnsignedBigInt(_nonce))
  )
  retryMessageSuccessEvent.parameters.push(
    new ethereum.EventParam(
      "_payloadHash",
      ethereum.Value.fromFixedBytes(_payloadHash)
    )
  )

  return retryMessageSuccessEvent
}

export function createSendBatchToChainEvent(
  _dstChainId: i32,
  _from: Address,
  _toAddress: Bytes,
  _tokenIds: Array<BigInt>,
  _amounts: Array<BigInt>
): SendBatchToChain {
  let sendBatchToChainEvent = changetype<SendBatchToChain>(newMockEvent())

  sendBatchToChainEvent.parameters = new Array()

  sendBatchToChainEvent.parameters.push(
    new ethereum.EventParam(
      "_dstChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_dstChainId))
    )
  )
  sendBatchToChainEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  sendBatchToChainEvent.parameters.push(
    new ethereum.EventParam("_toAddress", ethereum.Value.fromBytes(_toAddress))
  )
  sendBatchToChainEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenIds",
      ethereum.Value.fromUnsignedBigIntArray(_tokenIds)
    )
  )
  sendBatchToChainEvent.parameters.push(
    new ethereum.EventParam(
      "_amounts",
      ethereum.Value.fromUnsignedBigIntArray(_amounts)
    )
  )

  return sendBatchToChainEvent
}

export function createSendToChainEvent(
  _dstChainId: i32,
  _from: Address,
  _toAddress: Bytes,
  _tokenId: BigInt,
  _amount: BigInt
): SendToChain {
  let sendToChainEvent = changetype<SendToChain>(newMockEvent())

  sendToChainEvent.parameters = new Array()

  sendToChainEvent.parameters.push(
    new ethereum.EventParam(
      "_dstChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_dstChainId))
    )
  )
  sendToChainEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  sendToChainEvent.parameters.push(
    new ethereum.EventParam("_toAddress", ethereum.Value.fromBytes(_toAddress))
  )
  sendToChainEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  sendToChainEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return sendToChainEvent
}

export function createSetMinDstGasEvent(
  _dstChainId: i32,
  _type: i32,
  _minDstGas: BigInt
): SetMinDstGas {
  let setMinDstGasEvent = changetype<SetMinDstGas>(newMockEvent())

  setMinDstGasEvent.parameters = new Array()

  setMinDstGasEvent.parameters.push(
    new ethereum.EventParam(
      "_dstChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_dstChainId))
    )
  )
  setMinDstGasEvent.parameters.push(
    new ethereum.EventParam(
      "_type",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_type))
    )
  )
  setMinDstGasEvent.parameters.push(
    new ethereum.EventParam(
      "_minDstGas",
      ethereum.Value.fromUnsignedBigInt(_minDstGas)
    )
  )

  return setMinDstGasEvent
}

export function createSetPrecrimeEvent(precrime: Address): SetPrecrime {
  let setPrecrimeEvent = changetype<SetPrecrime>(newMockEvent())

  setPrecrimeEvent.parameters = new Array()

  setPrecrimeEvent.parameters.push(
    new ethereum.EventParam("precrime", ethereum.Value.fromAddress(precrime))
  )

  return setPrecrimeEvent
}

export function createSetTrustedRemoteEvent(
  _remoteChainId: i32,
  _path: Bytes
): SetTrustedRemote {
  let setTrustedRemoteEvent = changetype<SetTrustedRemote>(newMockEvent())

  setTrustedRemoteEvent.parameters = new Array()

  setTrustedRemoteEvent.parameters.push(
    new ethereum.EventParam(
      "_remoteChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_remoteChainId))
    )
  )
  setTrustedRemoteEvent.parameters.push(
    new ethereum.EventParam("_path", ethereum.Value.fromBytes(_path))
  )

  return setTrustedRemoteEvent
}

export function createSetTrustedRemoteAddressEvent(
  _remoteChainId: i32,
  _remoteAddress: Bytes
): SetTrustedRemoteAddress {
  let setTrustedRemoteAddressEvent = changetype<SetTrustedRemoteAddress>(
    newMockEvent()
  )

  setTrustedRemoteAddressEvent.parameters = new Array()

  setTrustedRemoteAddressEvent.parameters.push(
    new ethereum.EventParam(
      "_remoteChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_remoteChainId))
    )
  )
  setTrustedRemoteAddressEvent.parameters.push(
    new ethereum.EventParam(
      "_remoteAddress",
      ethereum.Value.fromBytes(_remoteAddress)
    )
  )

  return setTrustedRemoteAddressEvent
}

export function createSetUseCustomAdapterParamsEvent(
  _useCustomAdapterParams: boolean
): SetUseCustomAdapterParams {
  let setUseCustomAdapterParamsEvent = changetype<SetUseCustomAdapterParams>(
    newMockEvent()
  )

  setUseCustomAdapterParamsEvent.parameters = new Array()

  setUseCustomAdapterParamsEvent.parameters.push(
    new ethereum.EventParam(
      "_useCustomAdapterParams",
      ethereum.Value.fromBoolean(_useCustomAdapterParams)
    )
  )

  return setUseCustomAdapterParamsEvent
}

export function createSpendGatewayRegisteredEvent(
  handler: Address,
  nftDestinationAddress: Address,
  nativeTokenDestinationAddress: Address,
  primeDestinationAddress: Address
): SpendGatewayRegistered {
  let spendGatewayRegisteredEvent = changetype<SpendGatewayRegistered>(
    newMockEvent()
  )

  spendGatewayRegisteredEvent.parameters = new Array()

  spendGatewayRegisteredEvent.parameters.push(
    new ethereum.EventParam("handler", ethereum.Value.fromAddress(handler))
  )
  spendGatewayRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "nftDestinationAddress",
      ethereum.Value.fromAddress(nftDestinationAddress)
    )
  )
  spendGatewayRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "nativeTokenDestinationAddress",
      ethereum.Value.fromAddress(nativeTokenDestinationAddress)
    )
  )
  spendGatewayRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "primeDestinationAddress",
      ethereum.Value.fromAddress(primeDestinationAddress)
    )
  )

  return spendGatewayRegisteredEvent
}

export function createSpendInvokedEvent(
  from: Address,
  nftDestination: Address,
  nativeDestination: Address,
  primeDestination: Address,
  id: BigInt,
  _tokenIds: Array<BigInt>,
  _amounts: Array<BigInt>,
  nativeValue: BigInt,
  primeValue: BigInt,
  data: Bytes
): SpendInvoked {
  let spendInvokedEvent = changetype<SpendInvoked>(newMockEvent())

  spendInvokedEvent.parameters = new Array()

  spendInvokedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  spendInvokedEvent.parameters.push(
    new ethereum.EventParam(
      "nftDestination",
      ethereum.Value.fromAddress(nftDestination)
    )
  )
  spendInvokedEvent.parameters.push(
    new ethereum.EventParam(
      "nativeDestination",
      ethereum.Value.fromAddress(nativeDestination)
    )
  )
  spendInvokedEvent.parameters.push(
    new ethereum.EventParam(
      "primeDestination",
      ethereum.Value.fromAddress(primeDestination)
    )
  )
  spendInvokedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  spendInvokedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenIds",
      ethereum.Value.fromUnsignedBigIntArray(_tokenIds)
    )
  )
  spendInvokedEvent.parameters.push(
    new ethereum.EventParam(
      "_amounts",
      ethereum.Value.fromUnsignedBigIntArray(_amounts)
    )
  )
  spendInvokedEvent.parameters.push(
    new ethereum.EventParam(
      "nativeValue",
      ethereum.Value.fromUnsignedBigInt(nativeValue)
    )
  )
  spendInvokedEvent.parameters.push(
    new ethereum.EventParam(
      "primeValue",
      ethereum.Value.fromUnsignedBigInt(primeValue)
    )
  )
  spendInvokedEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return spendInvokedEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createTrustedForwarderSetEvent(
  forwarder: Address
): TrustedForwarderSet {
  let trustedForwarderSetEvent = changetype<TrustedForwarderSet>(newMockEvent())

  trustedForwarderSetEvent.parameters = new Array()

  trustedForwarderSetEvent.parameters.push(
    new ethereum.EventParam("forwarder", ethereum.Value.fromAddress(forwarder))
  )

  return trustedForwarderSetEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}

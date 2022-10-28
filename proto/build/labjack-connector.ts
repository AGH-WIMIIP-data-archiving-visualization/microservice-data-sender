/* eslint-disable */

export const protobufPackage = "labjack_connector";

export interface LabjackConnectorInput {
  analogInputNo: number;
  duration: number;
}

export interface ResponseMessage {
  iteration: number;
  voltageValue: number;
}

export interface LabjackConnectorResponse {
  response: ResponseMessage[];
}

export interface LabjackConnectorService {
  GetLabjackData(request: LabjackConnectorInput): Promise<LabjackConnectorResponse>;
}

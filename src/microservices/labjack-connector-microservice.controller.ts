import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  LabjackConnectorInput,
  LabjackConnectorResponse,
} from 'proto/build/labjack-connector';

@Controller()
export class LabjackConnectorService {
  @GrpcMethod()
  getLabjackData(
    input: LabjackConnectorInput,
    metadata: any,
  ): LabjackConnectorResponse {
    return {
      response: [
        { iteration: 1, voltageValue: 2 },
        { iteration: 2, voltageValue: 2.3 },
      ],
    };
  }
}

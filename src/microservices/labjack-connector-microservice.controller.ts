import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  LabjackConnectorInput,
  LabjackConnectorResponse,
} from 'proto/build/labjack-connector';
import { runLabjackScript } from 'src/python/python-connector';

@Controller()
export class LabjackConnectorService {
  @GrpcMethod()
  async getLabjackData(
    input: LabjackConnectorInput,
  ): Promise<LabjackConnectorResponse> {
    const response = await runLabjackScript(input);

    return response;
  }
}

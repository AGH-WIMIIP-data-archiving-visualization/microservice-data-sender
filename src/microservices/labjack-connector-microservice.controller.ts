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
    console.log('start reading');
    const response = await runLabjackScript(input);
    console.log(response);

    return response;
  }
}

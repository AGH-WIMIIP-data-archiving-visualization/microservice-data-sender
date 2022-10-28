import { Module } from '@nestjs/common';
import { LabjackConnectorService } from './microservices/labjack-connector-microservice.controller';
@Module({
  imports: [],
  controllers: [LabjackConnectorService],
  providers: [LabjackConnectorService],
})
export class AppModule {}

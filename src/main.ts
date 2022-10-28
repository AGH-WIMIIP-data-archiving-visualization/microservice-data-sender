import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:4001',
      protoPath: 'proto/labjack-connector.proto',
      package: 'labjack_connector',
    },
  });

  app.listen();
}
bootstrap();

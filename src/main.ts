import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { useGlobalPipes } from './pipes/useGlobalPipes';
import { useSwaggerModule } from './swagger/useSwaggerModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useGlobalPipes(app);
  useSwaggerModule(app);

  const configService = app.get(ConfigService);
  await app.listen(configService.get<number>('app.port'));
}
bootstrap();

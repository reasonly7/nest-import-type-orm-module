import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { importConfigModule } from './config/importConfigModule';

@Module({
  imports: [importConfigModule()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

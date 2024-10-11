import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { importConfigModule } from './config/importConfigModule';
import { importTypeOrmModule } from './typeorm/importTypeOrmModule';

@Module({
  imports: [importConfigModule(), importTypeOrmModule()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

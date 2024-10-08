import { Module } from '@nestjs/common';
import { QcSecureService } from './qc-secure.service';

@Module({
  imports: [],
  controllers: [],
  providers: [QcSecureService],
})
export class AppModule {}
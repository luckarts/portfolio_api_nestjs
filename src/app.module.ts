import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormConfig from 'src/config/ormconfig';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useFactory: () => ormConfig })],
})
export class AppModule {}

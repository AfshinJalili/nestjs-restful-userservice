import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import applicationConfig from './config';
import { MongooseModule } from '@nestjs/mongoose';
import mongooseModuleAsyncOptions from './config/mongodb';

@Module({
  imports: [
    ConfigModule.forRoot(applicationConfig),
    MongooseModule.forRootAsync(mongooseModuleAsyncOptions),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import applicationConfig from './config';
import { MongooseModule } from '@nestjs/mongoose';
import mongooseModuleOptions from './config/mongodb';
@Module({
  imports: [
    ConfigModule.forRoot(applicationConfig),
    MongooseModule.forRootAsync(mongooseModuleOptions),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

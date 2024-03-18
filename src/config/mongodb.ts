import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export default {
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    uri: configService.get('mongodb.uri'),
  }),
} as MongooseModuleOptions;

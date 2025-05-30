import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { AdventureModule } from './adventure/adventure.module';
import { InvitationModule } from './invitation/invitation.module';
import { CharacterModule } from './character/character.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        AuthModule,
        UserModule,
        DatabaseModule,
        AdventureModule,
        InvitationModule,
        CharacterModule,
    ],
})
export class AppModule {}

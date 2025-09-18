import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArbitrageOpportunityModule } from './arbitrage-opportunity/arbitrage-opportunity.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [ArbitrageOpportunityModule, WalletModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

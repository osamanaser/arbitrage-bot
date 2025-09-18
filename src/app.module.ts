import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArbitrageOpportunityModule } from './arbitrage-opportunity/arbitrage-opportunity.module';

@Module({
  imports: [ArbitrageOpportunityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

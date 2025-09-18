import { Module } from '@nestjs/common';
import { ArbitrageOpportunityService } from './arbitrage-opportunity.service';
import { ArbitrageOpportunityController } from './arbitrage-opportunity.controller';

@Module({
  controllers: [ArbitrageOpportunityController],
  providers: [ArbitrageOpportunityService],
})
export class ArbitrageOpportunityModule {}

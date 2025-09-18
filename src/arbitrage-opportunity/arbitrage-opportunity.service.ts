import { Injectable } from '@nestjs/common';
import { CreateArbitrageOpportunityDto } from './dto/create-arbitrage-opportunity.dto';
import { UpdateArbitrageOpportunityDto } from './dto/update-arbitrage-opportunity.dto';

@Injectable()
export class ArbitrageOpportunityService {
  create(createArbitrageOpportunityDto: CreateArbitrageOpportunityDto) {
    return 'This action adds a new arbitrageOpportunity';
  }

  findAll() {
    return `This action returns all arbitrageOpportunity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arbitrageOpportunity`;
  }

  update(id: number, updateArbitrageOpportunityDto: UpdateArbitrageOpportunityDto) {
    return `This action updates a #${id} arbitrageOpportunity`;
  }

  remove(id: number) {
    return `This action removes a #${id} arbitrageOpportunity`;
  }
}

import { Args, Query, Resolver } from '@nestjs/graphql';

import { CoresService } from './cores.service';
import { Core } from './entities/core.entity';

@Resolver(() => Core)
export class CoresResolver {
  constructor(private readonly coresService: CoresService) {}

  @Query(() => [Core], { name: 'cores' })
  findAll() {
    return this.coresService.findAll();
  }

  @Query(() => Core, { name: 'core' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.coresService.findOne(id);
  }
}

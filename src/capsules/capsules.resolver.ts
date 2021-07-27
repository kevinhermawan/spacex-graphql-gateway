import { Args, Query, Resolver } from '@nestjs/graphql';

import { CapsulesService } from './capsules.service';
import { Capsule } from './entities/capsule.entity';

@Resolver(() => Capsule)
export class CapsulesResolver {
  constructor(private readonly capsulesService: CapsulesService) {}

  @Query(() => [Capsule], { name: 'capsules' })
  findAll() {
    return this.capsulesService.findAll();
  }

  @Query(() => Capsule, { name: 'capsule' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.capsulesService.findOne(id);
  }
}

import { Args, Query, Resolver } from '@nestjs/graphql';

import { Rocket } from './entities/rocket.entity';
import { RocketsService } from './rockets.service';

@Resolver(() => Rocket)
export class RocketsResolver {
  constructor(private readonly rocketsService: RocketsService) {}

  @Query(() => [Rocket], { name: 'rockets' })
  findAll() {
    return this.rocketsService.findAll();
  }

  @Query(() => Rocket, { name: 'rocket' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.rocketsService.findOne(id);
  }
}

import { Args, Query, Resolver } from '@nestjs/graphql';

import { Ship } from './entities/ship.entity';
import { ShipsService } from './ships.service';

@Resolver(() => Ship)
export class ShipsResolver {
  constructor(private readonly shipsService: ShipsService) {}

  @Query(() => [Ship], { name: 'ships' })
  findAll() {
    return this.shipsService.findAll();
  }

  @Query(() => Ship, { name: 'ship' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.shipsService.findOne(id);
  }
}

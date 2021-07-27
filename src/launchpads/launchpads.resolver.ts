import { Args, Query, Resolver } from '@nestjs/graphql';

import { Launchpad } from './entities/launchpad.entity';
import { LaunchpadsService } from './launchpads.service';

@Resolver(() => Launchpad)
export class LaunchpadsResolver {
  constructor(private readonly launchpadsService: LaunchpadsService) {}

  @Query(() => [Launchpad], { name: 'launchpads' })
  findAll() {
    return this.launchpadsService.findAll();
  }

  @Query(() => Launchpad, { name: 'launchpad' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.launchpadsService.findOne(id);
  }
}

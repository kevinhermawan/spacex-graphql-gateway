import { Args, Query, Resolver } from '@nestjs/graphql';

import { Launch } from './entities/launch.entity';
import { LaunchesService } from './launches.service';

@Resolver(() => Launch)
export class LaunchesResolver {
  constructor(private readonly launchesService: LaunchesService) {}

  @Query(() => [Launch], { name: 'launches' })
  findAll() {
    return this.launchesService.findAll();
  }

  @Query(() => [Launch], { name: 'launchesPast' })
  findAllPast() {
    return this.launchesService.findAllPast();
  }

  @Query(() => Launch, { name: 'launch' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.launchesService.findOne(id);
  }

  @Query(() => Launch, { name: 'launchLatest' })
  findLatest() {
    return this.launchesService.findLatest();
  }

  @Query(() => Launch, { name: 'launchNext' })
  findNext() {
    return this.launchesService.findNext();
  }
}

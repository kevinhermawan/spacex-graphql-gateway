import { Args, Query, Resolver } from '@nestjs/graphql';

import { CrewsService } from './crews.service';
import { Crew } from './entities/crew.entity';

@Resolver(() => Crew)
export class CrewsResolver {
  constructor(private readonly crewsService: CrewsService) {}

  @Query(() => [Crew], { name: 'crews' })
  findAll() {
    return this.crewsService.findAll();
  }

  @Query(() => Crew, { name: 'crew' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.crewsService.findOne(id);
  }
}

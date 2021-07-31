import { Args, Query, Resolver } from '@nestjs/graphql';

import { Starlink } from './entities/starlink.entity';
import { StarlinksService } from './starlinks.service';

@Resolver(() => Starlink)
export class StarlinksResolver {
  constructor(private readonly starlinksService: StarlinksService) {}

  @Query(() => [Starlink], { name: 'starlinks' })
  findAll() {
    return this.starlinksService.findAll();
  }

  @Query(() => Starlink, { name: 'starlink' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.starlinksService.findOne(id);
  }
}

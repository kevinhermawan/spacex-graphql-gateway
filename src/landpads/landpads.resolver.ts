import { Args, Query, Resolver } from '@nestjs/graphql';

import { Landpad } from './entities/landpad.entity';
import { LandpadsService } from './landpads.service';

@Resolver(() => Landpad)
export class LandpadsResolver {
  constructor(private readonly landpadsService: LandpadsService) {}

  @Query(() => [Landpad], { name: 'landpads' })
  findAll() {
    return this.landpadsService.findAll();
  }

  @Query(() => Landpad, { name: 'landpad' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.landpadsService.findOne(id);
  }
}

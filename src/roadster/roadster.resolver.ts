import { Query, Resolver } from '@nestjs/graphql';

import { Roadster } from './entities/roadster.entity';
import { RoadsterService } from './roadster.service';

@Resolver(() => Roadster)
export class RoadsterResolver {
  constructor(private readonly roadsterService: RoadsterService) {}

  @Query(() => Roadster, { name: 'roadster' })
  find() {
    return this.roadsterService.find();
  }
}

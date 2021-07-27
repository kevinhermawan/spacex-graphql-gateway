import { Args, Query, Resolver } from '@nestjs/graphql';

import { DragonsService } from './dragons.service';
import { Dragon } from './entities/dragon.entity';

@Resolver(() => Dragon)
export class DragonsResolver {
  constructor(private readonly dragonsService: DragonsService) {}

  @Query(() => [Dragon], { name: 'dragons' })
  findAll() {
    return this.dragonsService.findAll();
  }

  @Query(() => Dragon, { name: 'dragon' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.dragonsService.findOne(id);
  }
}

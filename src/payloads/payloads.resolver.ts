import { Args, Query, Resolver } from '@nestjs/graphql';

import { Payload } from './entities/payload.entity';
import { PayloadsService } from './payloads.service';

@Resolver(() => Payload)
export class PayloadsResolver {
  constructor(private readonly payloadsService: PayloadsService) {}

  @Query(() => [Payload], { name: 'payloads' })
  findAll() {
    return this.payloadsService.findAll();
  }

  @Query(() => Payload, { name: 'payload' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.payloadsService.findOne(id);
  }
}

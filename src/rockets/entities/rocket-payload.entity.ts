import { Field, ObjectType } from '@nestjs/graphql';

import { RocketCompositeFairing } from './rocket-composite-fairing.entity';

@ObjectType()
export class RocketPayload {
  @Field(() => String, { nullable: true })
  option1?: string;

  @Field(() => RocketCompositeFairing, { nullable: true })
  compositeFairing?: RocketCompositeFairing;
}

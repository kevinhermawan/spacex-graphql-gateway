import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DragonCargo {
  @Field(() => Int, { nullable: true })
  solarArray?: number;

  @Field(() => Boolean, { nullable: true })
  unpressurizedCargo?: boolean;
}

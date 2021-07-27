import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DragonCargo {
  @Field(() => Int, { nullable: true })
  solar_array?: number;

  @Field(() => Boolean, { nullable: true })
  unpressurized_cargo?: boolean;
}

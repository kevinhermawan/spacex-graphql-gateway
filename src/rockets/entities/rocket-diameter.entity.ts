import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RocketDiameter {
  @Field(() => Float, { nullable: true })
  meters?: number;

  @Field(() => Float, { nullable: true })
  feet?: number;
}

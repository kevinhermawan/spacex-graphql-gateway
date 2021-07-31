import { Field, Int, ObjectType } from '@nestjs/graphql';

import { RocketDiameter } from './rocket-diameter.entity';
import { RocketEngines } from './rocket-engines.entity';
import { RocketFirstStage } from './rocket-first-stage.entity';
import { RocketLandingLegs } from './rocket-landing-legs.entity';
import { RocketMass } from './rocket-mass.entity';
import { RocketPayloadWeight } from './rocket-payload-weight.entity';
import { RocketSecondStage } from './rocket-second-stage.entity';

@ObjectType()
export class Rocket {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  wikipedia?: string;

  @Field(() => String, { nullable: true })
  company?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => String, { nullable: true })
  firstFlight?: string;

  @Field(() => Int, { nullable: true })
  costPerLaunch?: number;

  @Field(() => Int, { nullable: true })
  successRatePct?: number;

  @Field(() => Boolean, { nullable: true })
  active?: boolean;

  @Field(() => Int, { nullable: true })
  stages?: number;

  @Field(() => Int, { nullable: true })
  boosters?: number;

  @Field(() => [String], { nullable: true })
  flickrImages?: string[];

  @Field(() => RocketFirstStage, { nullable: true })
  firstStage?: RocketFirstStage;

  @Field(() => RocketSecondStage, { nullable: true })
  secondStage?: RocketSecondStage;

  @Field(() => RocketDiameter, { nullable: true })
  height?: RocketDiameter;

  @Field(() => RocketDiameter, { nullable: true })
  diameter?: RocketDiameter;

  @Field(() => RocketMass, { nullable: true })
  mass?: RocketMass;

  @Field(() => RocketEngines, { nullable: true })
  engines?: RocketEngines;

  @Field(() => RocketLandingLegs, { nullable: true })
  landingLegs?: RocketLandingLegs;

  @Field(() => RocketPayloadWeight, { nullable: true })
  payloadWeights?: RocketPayloadWeight[];
}

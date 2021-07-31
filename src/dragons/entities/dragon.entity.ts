import { Field, Int, ObjectType } from '@nestjs/graphql';

import { DragonDiameter } from './dragon-diameter.entity';
import { DragonHeatShield } from './dragon-heat-shield.entity';
import { DragonMass } from './dragon-mass.entity';
import { DragonPressurizedCapsule } from './dragon-pressurized-capsule.entity';
import { DragonThruster } from './dragon-thruster.entity';
import { DragonTrunk } from './dragon-trunk.entity';
import { DragonVolume } from './dragon-volume.entity';

@ObjectType()
export class Dragon {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  wikipedia?: string;

  @Field(() => Boolean, { nullable: true })
  active?: boolean;

  @Field(() => [DragonThruster], { nullable: true })
  thrusters?: DragonThruster[];

  @Field(() => Int, { nullable: true })
  dryMassLb?: number;

  @Field(() => Int, { nullable: true })
  dryMassKg?: number;

  @Field(() => Int, { nullable: true })
  orbitDurationYr?: number;

  @Field(() => Int, { nullable: true })
  sidewallAngleDeg?: number;

  @Field(() => Int, { nullable: true })
  crewCapacity?: number;

  @Field(() => [String], { nullable: true })
  flickrImages?: string[];

  @Field(() => String, { nullable: true })
  firstFlight?: string;

  @Field(() => DragonDiameter, { nullable: true })
  diameter?: DragonDiameter;

  @Field(() => DragonDiameter, { nullable: true })
  heightWTrunk?: DragonDiameter;

  @Field(() => DragonTrunk, { nullable: true })
  trunk?: DragonTrunk;

  @Field(() => DragonPressurizedCapsule, { nullable: true })
  pressurizedCapsule?: DragonPressurizedCapsule;

  @Field(() => DragonVolume, { nullable: true })
  returnPayloadVol?: DragonVolume;

  @Field(() => DragonMass, { nullable: true })
  returnPayloadMass?: DragonMass;

  @Field(() => DragonVolume, { nullable: true })
  launchPayloadVol?: DragonVolume;

  @Field(() => DragonMass, { nullable: true })
  launchPayloadMass?: DragonMass;

  @Field(() => DragonHeatShield, { nullable: true })
  heatShield?: DragonHeatShield;
}

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
  dry_mass_lb?: number;

  @Field(() => Int, { nullable: true })
  dry_mass_kg?: number;

  @Field(() => Int, { nullable: true })
  orbit_duration_yr?: number;

  @Field(() => Int, { nullable: true })
  sidewall_angle_deg?: number;

  @Field(() => Int, { nullable: true })
  crew_capacity?: number;

  @Field(() => [String], { nullable: true })
  flickr_images?: string[];

  @Field(() => String, { nullable: true })
  first_flight?: string;

  @Field(() => DragonDiameter, { nullable: true })
  diameter?: DragonDiameter;

  @Field(() => DragonDiameter, { nullable: true })
  height_w_trunk?: DragonDiameter;

  @Field(() => DragonTrunk, { nullable: true })
  trunk?: DragonTrunk;

  @Field(() => DragonPressurizedCapsule, { nullable: true })
  pressurized_capsule?: DragonPressurizedCapsule;

  @Field(() => DragonVolume, { nullable: true })
  return_payload_vol?: DragonVolume;

  @Field(() => DragonMass, { nullable: true })
  return_payload_mass?: DragonMass;

  @Field(() => DragonVolume, { nullable: true })
  launch_payload_vol?: DragonVolume;

  @Field(() => DragonMass, { nullable: true })
  launch_payload_mass?: DragonMass;

  @Field(() => DragonHeatShield, { nullable: true })
  heat_shield?: DragonHeatShield;
}

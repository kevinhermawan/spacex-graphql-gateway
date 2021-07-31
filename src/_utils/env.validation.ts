import { plainToClass } from 'class-transformer';
import { IsEnum, IsUrl, validateSync } from 'class-validator';

enum NodeEnvironment {
  development = 'development',
  production = 'production',
}

class EnvironmentVariables {
  @IsEnum(NodeEnvironment)
  NODE_ENV: NodeEnvironment;

  @IsUrl()
  SPACEX_API_URL: string;
}

export function validateEnvVars(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}

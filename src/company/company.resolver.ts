import { Query, Resolver } from '@nestjs/graphql';

import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query(() => Company, { name: 'company' })
  find() {
    return this.companyService.find();
  }
}

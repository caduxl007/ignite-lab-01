import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../database/prisma/prisma.service';

@Resolver()
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => String)
  hello() {
    return 'Hello';
  }
}

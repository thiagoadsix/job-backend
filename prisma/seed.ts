import { PrismaClient } from '@prisma/client';
import { v4 as uuid } from 'uuid';

const prisma = new PrismaClient();

async function main() {
  const filter = await prisma.filters.upsert({
    where: {
      id: uuid(),
    },
    update: {},
    create: {
      title: 'Filter for Netherlands',
      country: 'Netherlands',
      language: 'English',
      remote_jobs_only: true,
      job_requirements: 'more_than_three_years_experience',
      date_posted: 'three_days',
      employment_types: 'fulltime',
      created_at: new Date(),
    },
  });

  const user = await prisma.users.create({
    data: {
      email: 'john.doe@example.com',
      name: 'John Doe',
    },
  });

  const job = await prisma.jobs.create({
    data: {
      title: 'Software Engineer Senior',
    },
  });

  console.log({ filter, user, job });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

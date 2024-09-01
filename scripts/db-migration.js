/* eslint-disable no-console */
const { PrismaClient } = require("@prisma/client");
const { execSync } = require("child_process");

const prisma = new PrismaClient();

function success(msg) {
  console.log(`✓ ${msg}`);
}

function error(msg) {
  console.log(`✗ ${msg}`);
}

async function migration() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined.");
  } else {
    success("DATABASE_URL is defined.");
  }

  try {
    await prisma.$connect();
    success("Database connection successful.");

    console.log(execSync("prisma migrate deploy").toString());
  } catch (e) {
    throw new Error("Unable to connect to the database: " + e.message);
  }
}

(async () => {
  let err = false;
  for (let fn of [migration]) {
    try {
      await fn();
      success(`The function: \`${fn.name}\` is successfully executed.`);
    } catch (e) {
      error(e.message);
      err = true;
    } finally {
      await prisma.$disconnect();
      if (err) {
        process.exit(1);
      }
    }
  }
})();

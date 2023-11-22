/*
  Warnings:

  - The `haveCompetence` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "askCompetence" DROP NOT NULL,
ALTER COLUMN "askCompetence" SET DATA TYPE TEXT,
DROP COLUMN "haveCompetence",
ADD COLUMN     "haveCompetence" TEXT[];

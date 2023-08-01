/*
  Warnings:

  - Added the required column `defai` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Report" ADD COLUMN     "defai" INTEGER NOT NULL,
ALTER COLUMN "name" SET DATA TYPE TEXT;

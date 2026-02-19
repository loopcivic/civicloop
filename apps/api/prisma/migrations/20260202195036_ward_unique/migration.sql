/*
  Warnings:

  - A unique constraint covering the columns `[cityCode,name]` on the table `Ward` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Ward_cityCode_name_key" ON "Ward"("cityCode", "name");

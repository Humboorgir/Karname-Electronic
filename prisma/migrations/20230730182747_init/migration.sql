-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "riazi" INTEGER NOT NULL,
    "oloom" INTEGER NOT NULL,
    "farsi" INTEGER NOT NULL,
    "ejtemai" INTEGER NOT NULL,
    "dini" INTEGER NOT NULL,
    "zaban" INTEGER NOT NULL,
    "arabi" INTEGER NOT NULL,
    "honar" INTEGER NOT NULL,
    "varzesh" INTEGER NOT NULL,
    "fanavari" INTEGER NOT NULL,
    "enzebat" INTEGER NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

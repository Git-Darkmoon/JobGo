-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "modality" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "clerkId" TEXT NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
